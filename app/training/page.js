import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { trainingPrograms } from "../data/site";

export const metadata = { title: "प्रशिक्षण" };

export default function Training() {
  return (
    <>
      <PageHead
        title="प्रशिक्षण एवं कौशल विकास"
        crumb="प्रशिक्षण"
        lead="नए किसानों से लेकर महिला SHG और सरकारी गौशाला कर्मियों तक — हर वर्ग के लिए व्यावहारिक, हैंड्स-ऑन पाठ्यक्रम। अधिकांश बैच सरकारी-प्रायोजित एवं नि:शुल्क।"
      />

      {/* Why train with us */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {[
              { icon: "🧑‍🌾", t: "हैंड्स-ऑन", d: "क्लासरूम कम, अभ्यास अधिक — गौशाला व इकाई में सीधा प्रशिक्षण।" },
              { icon: "🎓", t: "प्रमाणपत्र", d: "पाठ्यक्रम पूर्ण करने पर मान्य प्रमाणपत्र एवं किट-पात्रता।" },
              { icon: "💰", t: "नि:शुल्क बैच", d: "सरकारी-प्रायोजित बैच नि:शुल्क; अन्य पर छात्रवृत्ति।" },
              { icon: "🔗", t: "पोस्ट-ट्रेनिंग सहायता", d: "किट, ऋण-मार्गदर्शन एवं बाज़ार-संपर्क की निरंतर मदद।" },
            ].map((c) => (
              <div className="info-card" key={c.t}>
                <div className="icon-badge">{c.icon}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 34 }}>
            <span className="eyebrow">पाठ्यक्रम सूची</span>
            <h2 className="section-title">उपलब्ध प्रशिक्षण कार्यक्रम</h2>
          </div>
          <div className="grid grid-2">
            {trainingPrograms.map((t) => (
              <article className="card" key={t.title}>
                <div className="card-body">
                  <span className="chip">{t.duration}</span>
                  <h3>{t.title}</h3>
                  <div className="en">{t.en}</div>
                  <p>
                    <b>किसके लिए:</b> {t.for}
                  </p>
                  <ul className="ul-check">
                    {t.learn.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                  <div className="meta-row">
                    <span>
                      अवधि: <b>{t.duration}</b>
                    </span>
                    <span>
                      शुल्क: <b>{t.fee}</b>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <img
                src="/images/training-process.jpg"
                alt="प्रशिक्षण प्रक्रिया"
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
              <span className="eyebrow">नामांकन कैसे करें</span>
              <h2 className="section-title">सरल नामांकन प्रक्रिया</h2>
              <ul className="timeline" style={{ marginTop: 18 }}>
                {[
                  ["चरण 1", "संपर्क फ़ॉर्म भरें या किसान-हेल्पलाइन पर कॉल करें।"],
                  ["चरण 2", "पात्रता व निकटतम बैच की जानकारी प्राप्त करें।"],
                  ["चरण 3", "आधार व बैंक-विवरण के साथ पंजीकरण पूर्ण करें।"],
                  ["चरण 4", "प्रशिक्षण में भाग लें — प्रमाणपत्र व किट-पात्रता।"],
                ].map(([y, t]) => (
                  <li key={y}>
                    <span className="yr">{y}</span>
                    <p style={{ color: "var(--muted)", marginTop: 2 }}>{t}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming batches table */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 24 }}>
            <span className="eyebrow">कैलेंडर</span>
            <h2 className="section-title">आगामी बैच (2026)</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "var(--shadow)",
                minWidth: 640,
              }}
            >
              <thead>
                <tr style={{ background: "var(--green-800)", color: "#fff" }}>
                  <th style={th}>पाठ्यक्रम</th>
                  <th style={th}>स्थान</th>
                  <th style={th}>आरंभ तिथि</th>
                  <th style={th}>सीटें</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["गौ-उद्यमी आधार पाठ्यक्रम", "लखनऊ (मुख्य केंद्र)", "15 जून 2026", "उपलब्ध"],
                  ["पंचगव्य विशेषज्ञता", "लखनऊ", "22 जून 2026", "सीमित"],
                  ["महिला SHG उत्पाद-निर्माण", "मलिहाबाद", "01 जुलाई 2026", "उपलब्ध"],
                  ["A2 बिलोना डेयरी प्रबंधन", "काकोरी", "10 जुलाई 2026", "सीमित"],
                  ["गौशाला कर्मी क्षमता-संवर्धन", "जिला-स्तर (विभाग)", "जुलाई 2026", "विभाग-नामित"],
                ].map((r, i) => (
                  <tr key={i} style={{ background: i % 2 ? "var(--cream)" : "#fff" }}>
                    {r.map((c, j) => (
                      <td key={j} style={td}>
                        {j === 0 ? <b>{c}</b> : c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABand
        title="अगले बैच के लिए सीट सुरक्षित करें"
        text="सीटें सीमित हैं। आज ही पंजीकरण करें और नि:शुल्क प्रशिक्षण का लाभ उठाएँ।"
      />
    </>
  );
}

const th = { padding: "14px 16px", textAlign: "left", fontSize: 14 };
const td = {
  padding: "12px 16px",
  borderBottom: "1px solid var(--line)",
  fontSize: 14,
  color: "var(--ink)",
};
