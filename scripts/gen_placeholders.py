#!/usr/bin/env python3
"""Generate branded placeholder JPGs for the CIC-BLT site.
Replace these later with real Google images (same filenames)."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT, exist_ok=True)

# (filename, label, w, h, base_color)
GREEN = (28, 74, 43)
GREEN2 = (46, 139, 79)
SAFFRON = (232, 130, 31)
CREAM = (244, 236, 220)

IMAGES = [
    ("hero-gaushala.jpg", "हाई-टेक गौशाला", 1600, 900, GREEN),
    ("hero-farmer.jpg", "किसान व देशी गाय", 1600, 900, GREEN2),
    ("hero-products.jpg", "गो-उत्पाद", 1600, 900, SAFFRON),
    ("about-intro.jpg", "केंद्र परिचय", 1000, 750, GREEN2),
    ("about-main.jpg", "हमारा परिसर", 1000, 750, GREEN),
    ("training-preview.jpg", "प्रशिक्षण सत्र", 1000, 750, GREEN2),
    ("training-process.jpg", "प्रशिक्षण प्रक्रिया", 1000, 750, GREEN),
    ("kit-workshop.jpg", "किट कार्यशाला", 1000, 750, SAFFRON),
    ("model-vermicompost.jpg", "वर्मी-कम्पोस्ट", 800, 500, GREEN2),
    ("model-panchgavya.jpg", "पंचगव्य इकाई", 800, 500, SAFFRON),
    ("model-dhoop.jpg", "गोबर धूप-दीया", 800, 500, GREEN),
    ("model-a2-milk.jpg", "A2 दूध व घी", 800, 500, GREEN2),
    ("model-biogas.jpg", "बायोगैस", 800, 500, GREEN),
    ("model-silvipasture.jpg", "सिल्वीपास्चर", 800, 500, GREEN2),
    ("kit-press.jpg", "धूप-प्रेस किट", 800, 500, GREEN),
    ("kit-distill.jpg", "डिस्टिलेशन किट", 800, 500, SAFFRON),
    ("kit-vermi.jpg", "वर्मी किट", 800, 500, GREEN2),
    ("kit-hydroponic.jpg", "हाइड्रोपोनिक किट", 800, 500, GREEN),
    ("kit-bilona.jpg", "बिलोना किट", 800, 500, SAFFRON),
    ("kit-test.jpg", "जाँच किट", 800, 500, GREEN2),
    ("gallery-1.jpg", "गिर गायें", 800, 600, GREEN),
    ("gallery-2.jpg", "SHG धूप-निर्माण", 800, 600, SAFFRON),
    ("gallery-3.jpg", "वर्मी-बेड", 800, 600, GREEN2),
    ("gallery-4.jpg", "प्रशिक्षण", 800, 600, GREEN),
    ("gallery-5.jpg", "बिलोना घी", 800, 600, SAFFRON),
    ("gallery-6.jpg", "चारा-नर्सरी", 800, 600, GREEN2),
    ("gallery-7.jpg", "बायोगैस संयंत्र", 800, 600, GREEN),
    ("gallery-8.jpg", "पैकेजिंग", 800, 600, SAFFRON),
    ("gallery-9.jpg", "किसान-मेला", 800, 600, GREEN2),
    ("farmer-1.jpg", "किसान", 300, 300, GREEN2),
    ("farmer-2.jpg", "किसान", 300, 300, SAFFRON),
    ("farmer-3.jpg", "किसान", 300, 300, GREEN),
    ("team-1.jpg", "निदेशक", 500, 500, GREEN),
    ("team-2.jpg", "अध्यक्ष", 500, 500, GREEN2),
    ("team-3.jpg", "प्रमुख", 500, 500, SAFFRON),
    ("team-4.jpg", "समन्वयक", 500, 500, GREEN2),
    ("news-1.jpg", "समाचार", 800, 500, GREEN2),
    ("news-2.jpg", "समाचार", 800, 500, GREEN),
    ("news-3.jpg", "समाचार", 800, 500, SAFFRON),
    ("news-4.jpg", "समाचार", 800, 500, GREEN2),
    ("news-5.jpg", "समाचार", 800, 500, GREEN),
    ("news-6.jpg", "समाचार", 800, 500, SAFFRON),
]


def find_font(size):
    candidates = [
        "/System/Library/Fonts/Supplemental/Kohinoor.ttc",
        "/System/Library/Fonts/Supplemental/DevanagariMT.ttc",
        "/Library/Fonts/Kohinoor.ttc",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for c in candidates:
        if os.path.exists(c):
            try:
                return ImageFont.truetype(c, size)
            except Exception:
                continue
    return ImageFont.load_default()


def lighten(c, f):
    return tuple(min(255, int(x + (255 - x) * f)) for x in c)


def make(fn, label, w, h, base):
    img = Image.new("RGB", (w, h), base)
    d = ImageDraw.Draw(img)
    # diagonal gradient bands
    top = lighten(base, 0.25)
    for y in range(h):
        f = y / h
        col = tuple(int(top[i] + (base[i] - top[i]) * f) for i in range(3))
        d.line([(0, y), (w, y)], fill=col)
    # soft circle accent
    r = int(min(w, h) * 0.5)
    d.ellipse([w - r, -r // 2, w + r // 2, r], fill=lighten(base, 0.12))
    # center plate
    pad = int(min(w, h) * 0.12)
    d.rounded_rectangle(
        [pad, h // 2 - h // 6, w - pad, h // 2 + h // 6],
        radius=int(min(w, h) * 0.04),
        fill=(255, 255, 255),
    )
    f1 = find_font(max(18, int(h * 0.11)))
    f2 = find_font(max(12, int(h * 0.05)))
    # label centered
    tb = d.textbbox((0, 0), label, font=f1)
    tw, th = tb[2] - tb[0], tb[3] - tb[1]
    d.text(((w - tw) / 2, h / 2 - th), label, font=f1, fill=base)
    tag = "CIC-BLT"
    tb2 = d.textbbox((0, 0), tag, font=f2)
    tw2 = tb2[2] - tb2[0]
    d.text(((w - tw2) / 2, h / 2 + th * 0.4), tag, font=f2, fill=SAFFRON)
    img.save(os.path.join(OUT, fn), "JPEG", quality=82)


for spec in IMAGES:
    make(*spec)
print(f"Generated {len(IMAGES)} placeholder images in public/images")
