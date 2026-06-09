import Link from "next/link";
import Hero from "./components/Hero";
import CTABand from "./components/CTABand";
import {
  stats,
  livelihoodModels,
  trainingPrograms,
  testimonials,
  partners,
  timeline,
  news,
  org,
} from "./data/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro + stats */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">केंद्र के बारे में</span>
              <h2 className="section-title">
                देशी गाय — किसान की सबसे भरोसेमंद आय-इकाई
              </h2>
              <div className="prose">
                <p>
                  <strong>{org.centre} ({org.acronym})</strong>, {org.parent} की
                  एक समर्पित इकाई है, जो इस सिद्धांत पर कार्य करती है कि देशी गाय
                  केवल दूध नहीं, बल्कि गोबर, गोमूत्र, पंचगव्य और जैव-ऊर्जा के
                  माध्यम से एक पूर्ण <em>सूक्ष्म-उद्यम</em> है।
                </p>
                <p>
                  हम किसानों को तीन चीज़ें एक साथ देते हैं — <b>सिद्ध आय-मॉडल</b>,{" "}
                  <b>व्यावहारिक प्रशिक्षण</b> और किफ़ायती <b>लोकल-टेक किट</b> —
                  ताकि हर देशी गाय गाँव में आमदनी और आत्मनिर्भरता का स्रोत बने।
                </p>
                <p>
                  हमारा लक्ष्य है: <b>कम लागत, अधिक आय</b> और <b>शून्य-अपशिष्ट</b>{" "}
                  आधारित ग्रामीण चक्रीय अर्थव्यवस्था।
                </p>
              </div>
              <Link href="/about" className="btn btn-green" style={{ marginTop: 14 }}>
                हमारी कहानी पढ़ें →
              </Link>
            </div>
            <div>
              <img
                src="/images/about-intro.jpg"
                alt="हाई-टेक गौशाला और किसान"
                style={{
                  borderRadius: 14,
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  boxShadow: "var(--shadow-lg)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 34 }}>
            <span className="eyebrow">हमारा प्रभाव</span>
            <h2 className="section-title">ज़मीन पर दिखता बदलाव</h2>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.value}</div>
                <div className="lab">
                  {s.label}
                  <small>{s.en}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livelihood models preview */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 34 }}>
            <span className="eyebrow">आय-सृजक मॉडल</span>
            <h2 className="section-title">देशी गाय से कमाई के सिद्ध रास्ते</h2>
            <p className="section-lead">
              हर मॉडल के साथ निवेश, अनुमानित मासिक आय और वापसी-अवधि का स्पष्ट
              आकलन — ताकि आप सोच-समझकर शुरुआत कर सकें।
            </p>
          </div>
          <div className="grid grid-3">
            {livelihoodModels.slice(0, 6).map((m) => (
              <article className="card" key={m.slug}>
                <div className="card-img">
                  <img src={m.image} alt={m.title} />
                </div>
                <div className="card-body">
                  <h3>{m.title}</h3>
                  <div className="en">{m.en}</div>
                  <p>{m.summary}</p>
                  <div className="meta-row">
                    <span>
                      निवेश: <b>{m.invest}</b>
                    </span>
                    <span>
                      आय: <b>{m.income}</b>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="center" style={{ marginTop: 30 }}>
            <Link href="/livelihood-models" className="btn btn-primary">
              सभी मॉडल विस्तार से देखें →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section dark">
        <div className="container">
          <div className="center" style={{ marginBottom: 34 }}>
            <span className="eyebrow" style={{ color: "var(--saffron)" }}>
              हमारी कार्य-प्रणाली
            </span>
            <h2 className="section-title">किसान से उद्यमी तक — 4 आसान चरण</h2>
          </div>
          <div className="grid grid-4">
            {[
              {
                n: "1",
                t: "पंजीकरण व आकलन",
                d: "किसान का पंजीकरण, उपलब्ध गाय/संसाधन का आकलन और सही मॉडल का चयन।",
              },
              {
                n: "2",
                t: "प्रशिक्षण",
                d: "व्यावहारिक (हैंड्स-ऑन) प्रशिक्षण, गुणवत्ता मानक और इकाई-योजना (DPR)।",
              },
              {
                n: "3",
                t: "लोकल-टेक किट",
                d: "रियायती दर/किस्तों व सब्सिडी के साथ उपकरण और सेटअप सहायता।",
              },
              {
                n: "4",
                t: "बाज़ार-संपर्क",
                d: "FPO, मंदिर-ट्रस्ट, ऑनलाइन व D2C के माध्यम से निरंतर बिक्री।",
              },
            ].map((step) => (
              <div
                key={step.n}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--saffron)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    fontSize: 20,
                    marginBottom: 14,
                  }}
                >
                  {step.n}
                </div>
                <h3 style={{ color: "#fff", fontSize: 19 }}>{step.t}</h3>
                <p style={{ color: "#c9d8ce", fontSize: 14.5, marginTop: 8 }}>
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training preview */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <img
                src="/images/training-preview.jpg"
                alt="किसान प्रशिक्षण सत्र"
                style={{
                  borderRadius: 14,
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  boxShadow: "var(--shadow-lg)",
                }}
              />
            </div>
            <div>
              <span className="eyebrow">प्रशिक्षण एवं कौशल</span>
              <h2 className="section-title">हुनर सीखें, आत्मनिर्भर बनें</h2>
              <p className="section-lead" style={{ marginBottom: 18 }}>
                नए किसानों से लेकर महिला SHG और सरकारी गौशाला कर्मियों तक — सबके
                लिए लक्षित पाठ्यक्रम। अधिकांश बैच सरकारी-प्रायोजित एवं नि:शुल्क।
              </p>
              <ul className="ul-check" style={{ marginBottom: 18 }}>
                {trainingPrograms.slice(0, 4).map((t) => (
                  <li key={t.title}>
                    <b>{t.title}</b> — {t.duration}
                  </li>
                ))}
              </ul>
              <Link href="/training" className="btn btn-green">
                सभी पाठ्यक्रम देखें →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 34 }}>
            <span className="eyebrow">किसानों की ज़ुबानी</span>
            <h2 className="section-title">बदलती ज़िंदगियाँ, बढ़ती आमदनी</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <div className="quote" key={t.name}>
                <p>{t.text}</p>
                <div className="who">
                  <img src={t.image} alt={t.name} />
                  <span>
                    <b>{t.name}</b>
                    <small>{t.place}</small>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline + News */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <span className="eyebrow">हमारी यात्रा</span>
              <h2 className="section-title">2021 से अब तक</h2>
              <ul className="timeline" style={{ marginTop: 18 }}>
                {timeline.map((t) => (
                  <li key={t.year}>
                    <span className="yr">{t.year}</span>
                    <p style={{ color: "var(--muted)", marginTop: 2 }}>{t.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">ताज़ा अपडेट</span>
              <h2 className="section-title">समाचार एवं घोषणाएँ</h2>
              <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
                {news.slice(0, 3).map((n) => (
                  <div
                    key={n.title}
                    style={{
                      display: "flex",
                      gap: 14,
                      background: "#fff",
                      border: "1px solid var(--line)",
                      borderRadius: 12,
                      padding: 14,
                      boxShadow: "var(--shadow)",
                    }}
                  >
                    <img
                      src={n.image}
                      alt={n.title}
                      style={{
                        width: 92,
                        height: 92,
                        objectFit: "cover",
                        borderRadius: 10,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <span className="chip">{n.tag}</span>
                      <h3 style={{ fontSize: 16, margin: "6px 0 4px" }}>
                        {n.title}
                      </h3>
                      <small style={{ color: "var(--muted)" }}>{n.date}</small>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/news" className="btn btn-green" style={{ marginTop: 16 }}>
                सभी समाचार →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section alt">
        <div className="container center">
          <span className="eyebrow">सहयोगी एवं समर्थक</span>
          <h2 className="section-title">विश्वसनीय साझेदारी</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            {partners.map((p) => (
              <span
                key={p}
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: 999,
                  padding: "10px 20px",
                  fontWeight: 600,
                  fontSize: 14.5,
                  color: "var(--green-800)",
                  boxShadow: "var(--shadow)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
