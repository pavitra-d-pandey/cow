# CIC-BLT — देशी गौ-आधारित आजीविका एवं प्रौद्योगिकी केंद्र

Centre for Indigenous Cow-Based Livelihood and Technology (CIC-BLT) ki official-style
website. Next.js 14 (App Router) par bani hai, Hindi + English mix content ke saath.

Parent org: **गौ अमृत विज्ञान विद्यापीठ एवं अनुसंधान केंद्र**

## Pages (10)
`/` Home · `/about` · `/livelihood-models` · `/training` · `/tech-kits` ·
`/gallery` · `/resources` · `/news` · `/faq` · `/contact`

## Local me chalाने ke liye
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # production server (PORT env respect karta hai)
```

## Saara content kahan hai?
Ek hi jagah: `app/data/site.js`. Text, stats, models, kits, news, FAQ —
sab yahin edit karein. Components/pages automatically update ho jaayenge.

---

## 🖼️ Images replace karna (Claude in Chrome se Google images)

Abhi `public/images/` me **branded placeholder JPGs** hain (sahi naam +
sahi aspect-ratio ke saath). Inhe asli Google images se replace karne ke liye
neeche diya prompt **Claude in Chrome** (browser extension) me paste karein.

> **Zaroori:** filename बिल्कुल same rakhein — to code me kuch change nahi karna padega.
> Sirf royalty-free / Creative Commons / labelled-for-reuse images hi lein
> (Google Images → Tools → Usage Rights → Creative Commons licenses).

### 👉 Claude in Chrome ko dene ke liye prompt:

```
Tum mere liye ek Indian cow-based livelihood NGO website ke liye real images
dhundhoge aur download karoge. Main har image ke liye ek exact filename doonga —
us filename ko बदलना नहीं hai.

Steps har image ke liye:
1. Google Images (images.google.com) kholo.
2. Diya gaya search query type karo.
3. Tools → Usage Rights → "Creative Commons licenses" filter laga do
   (sirf reuse-allowed images).
4. Sabse relevant, high-resolution, clear image choose karo (blurry/watermark/logo wali nahi).
5. Use download karke is folder me save karo:
   /Users/pavitradurgeshpandey/Desktop/cow/public/images/
6. File ka naam EXACTLY wahi rakho jo niche diya hai (.jpg).
7. Agar koi image na mile to dusri matching choose kar lo, par filename same rakho.

Yeh rahi list (filename — search query):

hero-gaushala.jpg      — "modern gaushala indigenous cows India shed"
hero-farmer.jpg        — "Indian farmer with indigenous cow field"
hero-products.jpg      — "organic cow dung cow urine products India"
about-intro.jpg        — "indigenous Gir cow Indian dairy farm"
about-main.jpg         — "cow shelter gaushala India campus"
training-preview.jpg   — "farmer training workshop India agriculture"
training-process.jpg   — "rural training session farmers India"
kit-workshop.jpg       — "small agriculture machine rural India workshop"
model-vermicompost.jpg — "vermicompost bed earthworm cow dung"
model-panchgavya.jpg   — "panchgavya organic preparation India"
model-dhoop.jpg        — "cow dung dhoop diya making India"
model-a2-milk.jpg      — "A2 milk desi cow ghee bilona"
model-biogas.jpg       — "biogas plant cow dung rural India"
model-silvipasture.jpg — "fodder nursery silvipasture green fodder"
kit-press.jpg          — "dhoop stick making hand press machine"
kit-distill.jpg        — "cow urine distillation steel unit"
kit-vermi.jpg          — "vermicompost starter kit bed"
kit-hydroponic.jpg     — "hydroponic green fodder tray rack"
kit-bilona.jpg         — "bilona ghee churner wooden traditional"
kit-test.jpg           — "milk testing lactometer kit"
gallery-1.jpg          — "Gir cow indigenous India closeup"
gallery-2.jpg          — "women self help group product making India"
gallery-3.jpg          — "vermicompost bed inspection farmer"
gallery-4.jpg          — "panchgavya training farmers India"
gallery-5.jpg          — "bilona ghee making traditional India"
gallery-6.jpg          — "green fodder nursery India"
gallery-7.jpg          — "village biogas plant India"
gallery-8.jpg          — "organic product packaging India branding"
gallery-9.jpg          — "farmer fair mela India agriculture"
farmer-1.jpg           — "Indian farmer man portrait rural"
farmer-2.jpg           — "Indian rural woman farmer portrait"
farmer-3.jpg           — "Indian farmer portrait village"
team-1.jpg             — "Indian scientist man professional portrait"
team-2.jpg             — "Indian woman professional portrait"
team-3.jpg             — "Indian engineer man portrait"
team-4.jpg             — "Indian woman coordinator portrait"
news-1.jpg             — "agriculture training announcement India"
news-2.jpg             — "farmers achievement event India"
news-3.jpg             — "bio CNG biogas innovation India"
news-4.jpg             — "FPO farmer producer organization India"
news-5.jpg             — "online store rural products India"
news-6.jpg             — "agriculture fair farmers India"

Sab download hone ke baad mujhe confirm karo ki kitni images save hui aur
kaunsi nahi mili.
```

> Tip: agar koi image manually badalni ho, बस usi naam ki nayi `.jpg` file
> `public/images/` me overwrite kar do.

---

## 🚀 Deploy

### Option A — Vercel (recommended)
1. Code ko GitHub par push karein.
2. [vercel.com](https://vercel.com) → **New Project** → repo import karein.
3. Framework **Next.js** auto-detect ho jaayega. Bas **Deploy** dabayein.
   (`vercel.json` pehle se config kiya hua hai.)

Ya CLI se:
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

### Option B — Render
1. Code GitHub par push karein.
2. [render.com](https://render.com) → **New** → **Web Service** → repo चुनें.
3. Render `render.yaml` se settings auto-pick karega:
   - Build: `npm install && npm run build`
   - Start: `npm run start`
   - Environment: Node
4. **Create Web Service** dabayein.

`npm run start` me `PORT` env variable use hota hai, isliye Render par
automatic port binding kaam karega.

---

## Tech
- Next.js 14 (App Router), React 18
- Plain CSS (`app/globals.css`) — koi heavy UI library nahi, fast load
- `images.unoptimized: true` — dono Vercel & Render par bina extra config ke chalti hai
- Devanagari font: Tiro Devanagari Hindi (Google Fonts)

## Placeholder images dobara generate karne ke liye
```bash
python3 scripts/gen_placeholders.py
```
