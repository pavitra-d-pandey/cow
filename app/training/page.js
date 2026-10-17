import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { trainingPrograms } from "../data/site";

export const metadata = { title: "Training" };

export default function Training() {
  return (
    <>
      <PageHead
        title="Training & Skill Development"
        crumb="Training"
        lead="Hands-on courses for every group — from new farmers to women's SHGs and government gaushala staff. Most batches are government-sponsored and free."
      />

      {/* Why train with us */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {[
              { icon: "🧑‍🌾", t: "Hands-On", d: "Less classroom, more practice — direct training at the gaushala and unit." },
              { icon: "🎓", t: "Certificate", d: "A recognised certificate and kit-eligibility on completing the course." },
              { icon: "💰", t: "Free Batches", d: "Government-sponsored batches are free; scholarships for others." },
              { icon: "🔗", t: "Post-Training Support", d: "Continued help with kits, loan guidance and market linkage." },
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
            <span className="eyebrow">Course List</span>
            <h2 className="section-title">Available training programmes</h2>
          </div>
          <div className="grid grid-2">
            {trainingPrograms.map((t) => (
              <article className="card" key={t.title}>
                <div className="card-body">
                  <span className="chip">{t.duration}</span>
                  <h3>{t.title}</h3>
                  <p>
                    <b>For whom:</b> {t.for}
                  </p>
                  <ul className="ul-check">
                    {t.learn.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                  <div className="meta-row">
                    <span>
                      Duration: <b>{t.duration}</b>
                    </span>
                    <span>
                      Fee: <b>{t.fee}</b>
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
                alt="Training process"
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
              <span className="eyebrow">How to Enrol</span>
              <h2 className="section-title">A simple enrolment process</h2>
              <ul className="timeline" style={{ marginTop: 18 }}>
                {[
                  ["Step 1", "Fill the contact form or call the farmer helpline."],
                  ["Step 2", "Get details of your eligibility and the nearest batch."],
                  ["Step 3", "Complete registration with Aadhaar and bank details."],
                  ["Step 4", "Attend the training — certificate and kit-eligibility."],
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
            <span className="eyebrow">Calendar</span>
            <h2 className="section-title">Upcoming batches (2026)</h2>
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
                  <th style={th}>Course</th>
                  <th style={th}>Venue</th>
                  <th style={th}>Start Date</th>
                  <th style={th}>Seats</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Gau-Entrepreneur Foundation", "Prayagraj (Main Centre)", "15 June 2026", "Available"],
                  ["Panchgavya Specialist", "Prayagraj", "22 June 2026", "Limited"],
                  ["Women SHG Product-Making", "Hanumanganj", "01 July 2026", "Available"],
                  ["A2 Bilona Dairy Management", "Soraon", "10 July 2026", "Limited"],
                  ["Gaushala Staff Capacity Building", "District-level (Dept.)", "July 2026", "Dept.-nominated"],
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
        title="Reserve your seat for the next batch"
        text="Seats are limited. Register today and benefit from free training."
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
