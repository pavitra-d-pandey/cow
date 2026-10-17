import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { techKits } from "../data/site";

export const metadata = { title: "Local-Tech Kits" };

export default function TechKits() {
  return (
    <>
      <PageHead
        title="Local-Tech Kits"
        crumb="Tech Kits"
        lead="Affordable, sturdy and easy-to-run equipment for farmers — designed for local conditions. Available after training at a concessional rate, in instalments and with subsidy."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {techKits.map((k) => (
              <article className="card" key={k.title}>
                <div className="card-img">
                  <img src={k.image} alt={k.title} />
                </div>
                <div className="card-body">
                  <h3>{k.title}</h3>
                  <div
                    style={{
                      fontWeight: 800,
                      color: "var(--saffron-dark)",
                      fontSize: 20,
                      marginTop: 4,
                    }}
                  >
                    {k.price}
                  </div>
                  <div>
                    <small style={{ color: "var(--muted)", fontWeight: 700 }}>
                      Kit includes:
                    </small>
                    <ul className="ul-check" style={{ marginTop: 6 }}>
                      {k.includes.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="meta-row">
                    <span>
                      Capacity: <b>{k.output}</b>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why local-tech */}
      <section className="section alt">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Why 'Local-Tech'</span>
              <h2 className="section-title">For the farmer, suited to the farmer</h2>
              <div className="prose">
                <p>
                  Instead of expensive, complex machines, we provide equipment
                  that is <b>affordable</b>, <b>durable</b> and{" "}
                  <b>easy to repair</b> — so maintenance is possible within the
                  village itself.
                </p>
              </div>
              <ul className="ul-check" style={{ marginTop: 10 }}>
                <li>Start an enterprise with low capital</li>
                <li>Supply through instalments and SHG/FPO</li>
                <li>Application support for applicable government subsidy</li>
                <li>Training in installation, operation and maintenance</li>
                <li>Local spare-parts and service support</li>
              </ul>
            </div>
            <div>
              <img
                src="/images/kit-workshop.jpg"
                alt="Local-tech kit workshop"
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

      {/* How to get */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">How to get a kit</span>
            <h2 className="section-title">3 easy steps</h2>
          </div>
          <div className="grid grid-3">
            {[
              { n: "1", t: "Complete training", d: "Get kit-eligibility on completing the relevant course." },
              { n: "2", t: "Choose a kit & apply", d: "Pick the kit you need; apply with subsidy/instalment options." },
              { n: "3", t: "Setup & support", d: "The Sansthan's team helps with installation and initial operation." },
            ].map((s) => (
              <div className="info-card" key={s.n}>
                <div className="icon-badge">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Choose the right kit for your unit"
        text="Contact our team for details on pricing, subsidy and instalment plans."
      />
    </>
  );
}
