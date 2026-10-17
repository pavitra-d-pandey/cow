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
              <span className="eyebrow">About the Sansthan</span>
              <h2 className="section-title">
                The indigenous cow — a farmer's most dependable income unit
              </h2>
              <div className="prose">
                <p>
                  <strong>{org.name} ({org.acronym})</strong> is a non-profit,
                  charitable and scientific research institution working on a
                  simple principle — the indigenous cow is not just milk, but a
                  complete <em>micro-enterprise</em> through dung, urine,
                  Panchgavya and bio-energy.
                </p>
                <p>
                  We give farmers three things together — <b>proven income
                  models</b>, <b>hands-on training</b> and affordable{" "}
                  <b>local-tech kits</b> — so that every indigenous cow becomes a
                  source of income and self-reliance in the village.
                </p>
                <p>
                  Our goal: <b>lower cost, higher income</b> and a{" "}
                  <b>zero-waste</b> rural circular economy.
                </p>
              </div>
              <Link href="/about" className="btn btn-green" style={{ marginTop: 14 }}>
                Read our story →
              </Link>
            </div>
            <div>
              <img
                src="/images/about-intro.jpg"
                alt="Hi-tech gaushala and farmer"
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
            <span className="eyebrow">Our Impact</span>
            <h2 className="section-title">Change you can see on the ground</h2>
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
            <span className="eyebrow">Income Models</span>
            <h2 className="section-title">Proven ways to earn from the indigenous cow</h2>
            <p className="section-lead">
              Every model comes with a clear estimate of investment, monthly
              income and payback period — so you can start with confidence.
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
                  <p>{m.summary}</p>
                  <div className="meta-row">
                    <span>
                      Investment: <b>{m.invest}</b>
                    </span>
                    <span>
                      Income: <b>{m.income}</b>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="center" style={{ marginTop: 30 }}>
            <Link href="/livelihood-models" className="btn btn-primary">
              See all models in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section dark">
        <div className="container">
          <div className="center" style={{ marginBottom: 34 }}>
            <span className="eyebrow" style={{ color: "var(--saffron)" }}>
              How We Work
            </span>
            <h2 className="section-title">From farmer to entrepreneur — 4 easy steps</h2>
          </div>
          <div className="grid grid-4">
            {[
              {
                n: "1",
                t: "Registration & Assessment",
                d: "Register the farmer, assess available cows/resources and select the right model.",
              },
              {
                n: "2",
                t: "Training",
                d: "Hands-on training, quality standards and a unit plan (DPR).",
              },
              {
                n: "3",
                t: "Local-Tech Kit",
                d: "Equipment and setup support at a concessional rate, in instalments, with subsidy.",
              },
              {
                n: "4",
                t: "Market Linkage",
                d: "Continuous sales through FPOs, temple trusts, online and D2C channels.",
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
                alt="Farmer training session"
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
              <span className="eyebrow">Training & Skills</span>
              <h2 className="section-title">Learn a skill, become self-reliant</h2>
              <p className="section-lead" style={{ marginBottom: 18 }}>
                Targeted courses for everyone — from new farmers to women's SHGs
                and government gaushala staff. Most batches are
                government-sponsored and free.
              </p>
              <ul className="ul-check" style={{ marginBottom: 18 }}>
                {trainingPrograms.slice(0, 4).map((t) => (
                  <li key={t.title}>
                    <b>{t.title}</b> — {t.duration}
                  </li>
                ))}
              </ul>
              <Link href="/training" className="btn btn-green">
                See all courses →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 34 }}>
            <span className="eyebrow">In Farmers' Words</span>
            <h2 className="section-title">Changing lives, rising incomes</h2>
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
              <span className="eyebrow">Our Journey</span>
              <h2 className="section-title">From 2021 to today</h2>
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
              <span className="eyebrow">Latest Updates</span>
              <h2 className="section-title">News & Announcements</h2>
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
                All news →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section alt">
        <div className="container center">
          <span className="eyebrow">Partners & Supporters</span>
          <h2 className="section-title">Trusted collaborations</h2>
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
