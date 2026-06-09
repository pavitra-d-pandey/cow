#!/usr/bin/env python3
"""Fetch real, free-license photos via the en.wikipedia API (Commons-hosted
images used on topic articles) and fit them into each slot (crop-to-fill).
Uses en.wikipedia because commons api.php rate-limits bursts."""
import io
import json
import os
import re
import time
import urllib.parse
import urllib.request
from PIL import Image

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT, exist_ok=True)
API = "https://en.wikipedia.org/w/api.php"
UA = "CICBLT-website/1.0 (educational; contact@cicblt.org.in)"

# Skip non-photo / decorative files.
BAD = re.compile(r"(?i)(\.svg|\.ogg|\.ogv|\.webm|\.gif|commons-logo|wiki|"
                 r"icon|flag|map|symbol|coat_of_arms|logo|locator|"
                 r"question_|edit-|ambox|disambig|sound|speaker|barnstar)")

# Reusable article pools — each article's photos suit the topic.
CATTLE = ["Gir cattle", "Sahiwal cattle", "Tharparkar cattle", "Kankrej cattle",
          "Ongole cattle", "Red Sindhi cattle", "Zebu", "Cattle"]
FARMER = ["Agriculture in India", "Farmer", "Agriculture in Uttar Pradesh",
          "Rural economy of India"]
DUNG = ["Cow dung", "Dung cake", "Manure"]
VERMI = ["Vermicompost", "Compost", "Composting"]
PANCH = ["Panchagavya", "Cow urine", "Organic farming"]
DHOOP = ["Dhuni", "Incense", "Cow dung", "Dhoop"]
MILK = ["Ghee", "Milk", "Dairy in India", "Dairy product"]
BIOGAS = ["Biogas", "Anaerobic digestion", "Bioreactor"]
FODDER = ["Fodder", "Napier grass", "Pasture", "Forage"]
TRAINING = ["Krishi Vigyan Kendra", "Agricultural extension",
            "Self-help group (finance)", "Agriculture in India"]
WORKSHOP = ["Agricultural machinery", "Two-wheel tractor", "Tractor",
            "Appropriate technology"]
WOMEN = ["Self-help group (finance)", "Women in India", "Agriculture in India"]
MEN = ["Farmer", "Agriculture in India", "Rural economy of India"]
HYDRO = ["Hydroponics", "Fodder"]
BILONA = ["Churning (butter)", "Butter", "Ghee"]
TEST = ["Lactometer", "Milk", "Hydrometer"]
PACKAGE = ["Food packaging", "Organic food", "Packaging"]
FAIR = ["Agricultural show", "Krishi", "Agriculture in India"]

SLOTS = {
    "hero-gaushala.jpg": (1600, 900, CATTLE),
    "hero-farmer.jpg": (1600, 900, FARMER),
    "hero-products.jpg": (1600, 900, DUNG),
    "about-intro.jpg": (1000, 750, CATTLE),
    "about-main.jpg": (1000, 750, CATTLE),
    "training-preview.jpg": (1000, 750, TRAINING),
    "training-process.jpg": (1000, 750, TRAINING),
    "kit-workshop.jpg": (1000, 750, WORKSHOP),
    "model-vermicompost.jpg": (800, 500, VERMI),
    "model-panchgavya.jpg": (800, 500, PANCH),
    "model-dhoop.jpg": (800, 500, DHOOP),
    "model-a2-milk.jpg": (800, 500, MILK),
    "model-biogas.jpg": (800, 500, BIOGAS),
    "model-silvipasture.jpg": (800, 500, FODDER),
    "kit-press.jpg": (800, 500, DHOOP),
    "kit-distill.jpg": (800, 500, PANCH),
    "kit-vermi.jpg": (800, 500, VERMI),
    "kit-hydroponic.jpg": (800, 500, HYDRO),
    "kit-bilona.jpg": (800, 500, BILONA),
    "kit-test.jpg": (800, 500, TEST),
    "gallery-1.jpg": (800, 600, CATTLE),
    "gallery-2.jpg": (800, 600, WOMEN),
    "gallery-3.jpg": (800, 600, VERMI),
    "gallery-4.jpg": (800, 600, TRAINING),
    "gallery-5.jpg": (800, 600, BILONA),
    "gallery-6.jpg": (800, 600, FODDER),
    "gallery-7.jpg": (800, 600, BIOGAS),
    "gallery-8.jpg": (800, 600, PACKAGE),
    "gallery-9.jpg": (800, 600, FAIR),
    "farmer-1.jpg": (400, 400, MEN),
    "farmer-2.jpg": (400, 400, WOMEN),
    "farmer-3.jpg": (400, 400, MEN),
    "news-1.jpg": (800, 500, TRAINING),
    "news-2.jpg": (800, 500, FARMER),
    "news-3.jpg": (800, 500, BIOGAS),
    "news-4.jpg": (800, 500, FAIR),
    "news-5.jpg": (800, 500, PACKAGE),
    "news-6.jpg": (800, 500, FAIR),
}

used_urls = set()
_art_cache = {}


def fetch(url, timeout=40, tries=5):
    last = None
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except Exception as e:
            last = e
            time.sleep(2.0 * (i + 1))
    raise last


def api(params):
    params["format"] = "json"
    return json.loads(fetch(API + "?" + urllib.parse.urlencode(params)).decode("utf-8"))


def article_thumbs(article, width):
    """File titles used on an article, in page order, resolved to thumb URLs."""
    if article in _art_cache:
        return list(_art_cache[article])
    try:
        d = api({"action": "query", "titles": article, "prop": "images",
                 "imlimit": "60"})
    except Exception as e:
        print(f"  list fail [{article}]: {e}")
        _art_cache[article] = []
        return []
    titles = []
    for p in d.get("query", {}).get("pages", {}).values():
        for im in p.get("images", []):
            t = im.get("title", "")
            if t.startswith("File:") and not BAD.search(t):
                titles.append(t)
    urls = []
    # resolve in chunks of 40
    for i in range(0, len(titles), 40):
        chunk = titles[i:i + 40]
        try:
            d2 = api({"action": "query", "titles": "|".join(chunk),
                      "prop": "imageinfo", "iiprop": "url|mime|size",
                      "iiurlwidth": str(width)})
        except Exception:
            continue
        byname = {}
        for p in d2.get("query", {}).get("pages", {}).values():
            ii = p.get("imageinfo", [{}])[0]
            if (ii.get("mime") in ("image/jpeg", "image/png")
                    and ii.get("thumburl") and ii.get("width", 0) >= 700):
                byname[p.get("title")] = ii["thumburl"]
        for t in chunk:                      # preserve article order
            if t in byname:
                urls.append(byname[t])
        time.sleep(0.2)
    _art_cache[article] = list(urls)
    return urls


def fit(data, w, h):
    im = Image.open(io.BytesIO(data)).convert("RGB")
    iw, ih = im.size
    scale = max(w / iw, h / ih)
    nw, nh = int(iw * scale + 0.5), int(ih * scale + 0.5)
    im = im.resize((nw, nh), Image.LANCZOS)
    left = (nw - w) // 2
    top = (nh - h) // 2
    return im.crop((left, top, left + w, top + h))


def process(fn, w, h, articles):
    for art in articles:
        for url in article_thumbs(art, max(w, h) * 2):
            if url in used_urls:
                continue
            try:
                im = fit(fetch(url, timeout=50), w, h)
            except Exception:
                continue
            used_urls.add(url)
            im.save(os.path.join(OUT, fn), "JPEG", quality=85)
            print(f"OK   {fn:24} <- {art}", flush=True)
            return True
        time.sleep(0.15)
    print(f"MISS {fn} (kept current)", flush=True)
    return False


def main():
    ok = 0
    for fn, (w, h, arts) in SLOTS.items():
        if process(fn, w, h, arts):
            ok += 1
        time.sleep(0.3)
    print(f"\nDone: {ok}/{len(SLOTS)} real images fetched.", flush=True)


if __name__ == "__main__":
    main()
