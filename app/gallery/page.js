import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { galleryImages, stats, testimonials } from "../data/site";

export const metadata = { title: "प्रभाव एवं गैलरी" };

export default function Gallery() {
  return (
    <>
      <PageHead
        title="प्रभाव एवं गैलरी"
        crumb="प्रभाव एवं गैलरी"
        lead="मैदान से तस्वीरें, किसानों की कहानियाँ और ज़मीन पर दिखता बदलाव।"
      />

      {/* Impact stats */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">हमारा प्रभाव</span>
            <h2 className="section-title">संख्याओं में बदलाव</h2>
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

      {/* Gallery grid */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">फ़ोटो गैलरी</span>
            <h2 className="section-title">मैदान से झलकियाँ</h2>
          </div>
          <div className="masonry">
            {galleryImages.map((g) => (
              <figure key={g.src}>
                <img src={g.src} alt={g.caption} />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">सफलता की कहानियाँ</span>
            <h2 className="section-title">किसानों की ज़ुबानी</h2>
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

      {/* Impact highlights */}
      <section className="section dark">
        <div className="container">
          <div className="grid grid-3">
            {[
              {
                t: "महिला सशक्तिकरण",
                d: "640+ स्वयं सहायता समूहों की महिलाओं को घर-बैठे आय का स्थायी स्रोत मिला।",
              },
              {
                t: "जैविक खेती को बढ़ावा",
                d: "वर्मी-कम्पोस्ट व पंचगव्य के प्रसार से हज़ारों एकड़ में रासायनिक इनपुट में कमी।",
              },
              {
                t: "पर्यावरण लाभ",
                d: "बायोगैस, सिल्वीपास्चर व जैव-CNG पायलट से स्वच्छ ऊर्जा व हरित-आवरण में वृद्धि।",
              },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <h3 style={{ color: "#fff" }}>{c.t}</h3>
                <p style={{ color: "#c9d8ce", marginTop: 8 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
