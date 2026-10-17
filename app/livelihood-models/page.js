import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { livelihoodModels } from "../data/site";

export const metadata = { title: "Livelihood Models" };

export default function LivelihoodModels() {
  return (
    <>
      <PageHead
        title="Indigenous Cow-Based Livelihood Models"
        crumb="Livelihood Models"
        lead="Every model comes with estimated investment, monthly income and payback period — so you can choose the right enterprise for your capacity."
      />

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Proven paths to income</span>
            <h2 className="section-title">Low cost, assured demand, regular income</h2>
            <p className="section-lead">
              All of these models have been field-tested with farmers. Each comes
              with full support for training, a local-tech kit and market linkage.
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
                  <h2 style={{ fontSize: 26, margin: "0 0 8px" }}>
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
                      ["Investment", m.invest],
                      ["Monthly Income", m.income],
                      ["Payback", m.payback],
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
            <span className="eyebrow">Compare at a glance</span>
            <h2 className="section-title">Choose according to your capacity</h2>
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
                  <th style={th}>Model</th>
                  <th style={th}>Investment</th>
                  <th style={th}>Monthly Income</th>
                  <th style={th}>Payback</th>
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
            * Figures are indicative and may vary by location, market and
            management.
          </p>
        </div>
      </section>

      <CTABand
        title="Choose the right livelihood model for you"
        text="Our team will advise the most suitable model based on your cows, resources and market."
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
