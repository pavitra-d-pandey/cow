import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import {
  org,
  objectives,
  leadership,
  governingBody,
  membership,
  timeline,
  stats,
  partners,
} from "../data/site";

export const metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHead
        title="About Us"
        crumb="About"
        lead={`${org.name} (${org.acronym}) — a non-profit, charitable and scientific research institution dedicated to indigenous cow-based livelihood, training and local technology.`}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <span className="eyebrow">Introduction</span>
              <h2 className="section-title">Who we are</h2>
              <p>
                <strong>{org.name} ({org.acronym})</strong> is registered under
                the Societies Registration Act, 1860, and works to establish the
                indigenous cow not merely as a religious or emotional symbol, but
                as an <em>economically viable rural enterprise</em>.
              </p>
              <p>
                We operate as a non-profit, charitable and scientific research
                institution. Our focus is on small and marginal farmers, rural
                women, youth and self-help groups — so that even those with just
                1–2 indigenous cows can earn a dignified income.
              </p>
              <p>
                Blending traditional knowledge with modern technology, we develop
                models that are low-cost, built on local resources and aligned
                with market demand.
              </p>
              <div className="prose-facts">
                <p><b>Registered Office:</b> {org.address} {org.city}, {org.state} – {org.pincode}</p>
                <p><b>Area of Operation:</b> {org.areaOfOperation}</p>
                <p><b>Registration:</b> {org.reg}</p>
              </div>
            </div>
            <div>
              <img
                src="/images/about-main.jpg"
                alt="The Sansthan's campus and farmers"
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

      {/* Mission / Vision / Values */}
      <section className="section alt">
        <div className="container">
          <div className="grid grid-3">
            {[
              {
                icon: "🎯",
                t: "Our Mission",
                d: "To build proven, profitable income models for farmers based on indigenous cows, and take them to every household through training and local-tech kits.",
              },
              {
                icon: "🌅",
                t: "Our Vision",
                d: "An Uttar Pradesh where every indigenous cow is a source of income and self-reliance, and the rural economy stands on a zero-waste, circular model.",
              },
              {
                icon: "🤝",
                t: "Our Values",
                d: "Scientific temper, farmer-first thinking, transparency, women's empowerment, environmental protection and a spirit of service.",
              },
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

      {/* Objectives — from the MoA */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">Our Objectives</span>
            <h2 className="section-title">What the Sansthan works towards</h2>
            <p className="section-lead">
              The aims and objects for which the Society is established, as set
              out in its Memorandum of Association.
            </p>
          </div>
          <div className="grid grid-2">
            {objectives.map((o) => (
              <div
                key={o.t}
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderLeft: "5px solid var(--saffron)",
                  borderRadius: 12,
                  padding: 22,
                  boxShadow: "var(--shadow)",
                }}
              >
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{o.t}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14.5 }}>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section dark">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div
                className="stat"
                key={s.label}
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="num" style={{ color: "var(--saffron)" }}>
                  {s.value}
                </div>
                <div className="lab" style={{ color: "#c9d8ce" }}>
                  {s.label}
                  <small>{s.en}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title">Our Patrons & Office Bearers</h2>
            <p className="section-lead">
              Guided by eminent academicians, scientists and social workers
              committed to indigenous cattle and rural livelihood.
            </p>
          </div>
          <div className="grid grid-3 leaders">
            {leadership.map((m) => (
              <div className="card leader-card" key={m.role}>
                <div className="leader-photo">
                  <img src={m.image} alt={m.name} />
                </div>
                <div className="card-body" style={{ textAlign: "center" }}>
                  <span className="chip" style={{ marginBottom: 8 }}>{m.role}</span>
                  <h3 style={{ fontSize: 17 }}>{m.name}</h3>
                  <p style={{ color: "var(--muted)", fontSize: 13.5 }}>
                    {m.credential}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Body */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 24 }}>
            <span className="eyebrow">Governance</span>
            <h2 className="section-title">Governing Body</h2>
            <p className="section-lead">
              The Managing Committee entrusted with the affairs of the Society
              under Section 2 of the Societies Registration Act, 1860.
            </p>
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
                  <th style={th}>#</th>
                  <th style={th}>Name</th>
                  <th style={th}>Position</th>
                  <th style={th}>Profile</th>
                </tr>
              </thead>
              <tbody>
                {governingBody.map((g, i) => (
                  <tr key={g.no} style={{ background: i % 2 ? "var(--cream)" : "#fff" }}>
                    <td style={td}>{g.no}</td>
                    <td style={td}><b>{g.name}</b></td>
                    <td style={td}>{g.role}</td>
                    <td style={td}>{g.detail || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">Get Involved</span>
            <h2 className="section-title">Membership</h2>
            <p className="section-lead">
              Join the Sansthan and support indigenous cow-based livelihood.
              Membership categories as per the Society's bye-laws.
            </p>
          </div>
          <div className="grid grid-3">
            {membership.map((m) => (
              <div className="info-card" key={m.type} style={{ textAlign: "center" }}>
                <h3>{m.type}</h3>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 26,
                    color: "var(--saffron-dark)",
                    margin: "6px 0 10px",
                  }}
                >
                  {m.fee}
                </div>
                <p>{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">Our Journey</span>
            <h2 className="section-title">Milestones</h2>
          </div>
          <ul className="timeline" style={{ maxWidth: 720, margin: "0 auto" }}>
            {timeline.map((t) => (
              <li key={t.year}>
                <span className="yr">{t.year}</span>
                <p style={{ color: "var(--muted)", marginTop: 2 }}>{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partners */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">Supporting Institutions</span>
          <h2 className="section-title">Our Partners</h2>
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
                  background: "var(--cream-2)",
                  border: "1px solid var(--line)",
                  borderRadius: 999,
                  padding: "10px 20px",
                  fontWeight: 600,
                  fontSize: 14.5,
                  color: "var(--green-800)",
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

const th = { padding: "14px 16px", textAlign: "left", fontSize: 14 };
const td = {
  padding: "12px 16px",
  borderBottom: "1px solid var(--line)",
  fontSize: 14,
  color: "var(--ink)",
};
