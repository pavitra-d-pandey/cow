import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { resources } from "../data/site";

export const metadata = { title: "Resources" };

export default function Resources() {
  return (
    <>
      <PageHead
        title="Resources & Downloads"
        crumb="Resources"
        lead="Useful guides, SOPs, templates and scheme lists for farmers, SHGs and gaushalas — all in one place."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {resources.map((r) => (
              <div
                key={r.title}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: 20,
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: "var(--green-100)",
                    color: "var(--green-800)",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {r.type}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 17 }}>{r.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: 14 }}>{r.desc}</p>
                </div>
                <a className="btn btn-green" href="#" aria-label="Download">
                  ↓
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schemes */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">Support & Schemes</span>
            <h2 className="section-title">Benefit from government schemes</h2>
            <p className="section-lead">
              We provide application and documentation support for key schemes
              related to cow-rearing, organic farming and rural livelihood.
            </p>
          </div>
          <div className="grid grid-3">
            {[
              { t: "Rashtriya Gokul Mission", d: "Support for indigenous breed improvement and dairy infrastructure." },
              { t: "PM-FME (Micro Food Enterprises)", d: "Loans and grants for food-processing units." },
              { t: "NRLM / SHG Credit", d: "Livelihood loans and capital for self-help groups." },
              { t: "Biogas Subsidy (MNRE)", d: "Grants for household/community biogas plants." },
              { t: "Paramparagat Krishi Vikas Yojana", d: "Support for organic farming and group certification." },
              { t: "NABARD FPO Scheme", d: "Help with forming and running Farmer Producer Organisations." },
            ].map((s) => (
              <div className="info-card" key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Need help with a resource or scheme?"
        text="Our team will help you with documents, applications and eligibility."
      />
    </>
  );
}
