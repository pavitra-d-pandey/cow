import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { livelihoodModels } from "../data/site";

export const metadata = { title: "आजीविका मॉडल" };

export default function LivelihoodModels() {
  return (
    <>
      <PageHead
        title="देशी गौ-आधारित आजीविका मॉडल"
        crumb="आजीविका मॉडल"
        lead="हर मॉडल के साथ अनुमानित निवेश, मासिक आय और वापसी-अवधि — ताकि आप अपनी क्षमता के अनुसार सही उद्यम चुन सकें।"
      />

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">आय के सिद्ध रास्ते</span>
            <h2 className="section-title">कम लागत, निश्चित माँग, नियमित आय</h2>
            <p className="section-lead">
              ये सभी मॉडल किसानों के साथ क्षेत्र-परीक्षण के बाद तैयार किए गए हैं।
              प्रत्येक के लिए प्रशिक्षण, लोकल-टेक किट और बाज़ार-संपर्क की पूरी
              सहायता उपलब्ध है।
            </p>
          </div>

          <div style={{ display: "grid", gap: 40 }}>
            {livelihoodModels.map((m, idx) => (
              <article
                key={m.slug}
                className="split"
                style={{
                  direction: idx % 2 ? "rtl" : "ltr",
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: 24,
                  boxShadow: "var(--shadow)",
                }}
              >
                <div style={{ direction: "ltr" }}>
                  <img
                    src={m.image}
                    alt={m.title}
                    style={{
                      borderRadius: 12,
                      width: "100%",
                      aspectRatio: "4/3",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ direction: "ltr" }}>
                  <span className="chip">{m.en}</span>
                  <h2 style={{ fontSize: 26, margin: "10px 0 8px" }}>
                    {m.title}
                  </h2>
                  <p style={{ color: "var(--muted)", marginBottom: 14 }}>
                    {m.summary}
                  </p>
                  <ul className="ul-check" style={{ marginBottom: 16 }}>
                    {m.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3,1fr)",
                      gap: 10,
                    }}
                  >
                    {[
                      ["निवेश", m.invest],
                      ["मासिक आय", m.income],
                      ["वापसी-अवधि", m.payback],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        style={{
                          background: "var(--green-100)",
                          borderRadius: 10,
                          padding: "10px 12px",
                          textAlign: "center",
                        }}
                      >
                        <small style={{ color: "var(--muted)" }}>{k}</small>
                        <div
                          style={{
                            fontWeight: 800,
                            color: "var(--green-800)",
                            fontSize: 14,
                          }}
                        >
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 24 }}>
            <span className="eyebrow">एक नज़र में तुलना</span>
            <h2 className="section-title">अपनी क्षमता के अनुसार चुनें</h2>
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
                  <th style={th}>मॉडल</th>
                  <th style={th}>निवेश</th>
                  <th style={th}>मासिक आय</th>
                  <th style={th}>वापसी-अवधि</th>
                </tr>
              </thead>
              <tbody>
                {livelihoodModels.map((m, i) => (
                  <tr
                    key={m.slug}
                    style={{ background: i % 2 ? "var(--cream)" : "#fff" }}
                  >
                    <td style={td}>
                      <b>{m.title}</b>
                    </td>
                    <td style={td}>{m.invest}</td>
                    <td style={td}>{m.income}</td>
                    <td style={td}>{m.payback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 12 }}>
            * आँकड़े संकेतक हैं और स्थान, बाज़ार एवं प्रबंधन के अनुसार भिन्न हो
            सकते हैं।
          </p>
        </div>
      </section>

      <CTABand
        title="अपने लिए सही आजीविका मॉडल चुनें"
        text="हमारी टीम आपकी गायों, संसाधनों और बाज़ार के अनुसार सबसे उपयुक्त मॉडल की सलाह देगी।"
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
