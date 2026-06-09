import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { news } from "../data/site";

export const metadata = { title: "समाचार" };

export default function News() {
  const [featured, ...rest] = news;
  return (
    <>
      <PageHead
        title="समाचार एवं घोषणाएँ"
        crumb="समाचार"
        lead="केंद्र की गतिविधियाँ, उपलब्धियाँ, प्रशिक्षण-घोषणाएँ और कार्यक्रम।"
      />

      {/* Featured */}
      <section className="section">
        <div className="container">
          <article
            className="split"
            style={{
              background: "#fff",
              border: "1px solid var(--line)",
              borderRadius: 16,
              padding: 24,
              boxShadow: "var(--shadow)",
            }}
          >
            <img
              src={featured.image}
              alt={featured.title}
              style={{
                borderRadius: 12,
                width: "100%",
                aspectRatio: "16/10",
                objectFit: "cover",
              }}
            />
            <div>
              <span className="chip">{featured.tag}</span>
              <small style={{ color: "var(--muted)", display: "block", margin: "8px 0" }}>
                {featured.date}
              </small>
              <h2 style={{ fontSize: 28, marginBottom: 10 }}>{featured.title}</h2>
              <p style={{ color: "var(--muted)" }}>{featured.text}</p>
              <a href="#" className="btn btn-green" style={{ marginTop: 16 }}>
                पूरा पढ़ें →
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Rest */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">और समाचार</span>
            <h2 className="section-title">हाल की गतिविधियाँ</h2>
          </div>
          <div className="grid grid-3">
            {rest.map((n) => (
              <article className="card" key={n.title}>
                <div className="card-img">
                  <img src={n.image} alt={n.title} />
                </div>
                <div className="card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="chip">{n.tag}</span>
                    <small style={{ color: "var(--muted)" }}>{n.date}</small>
                  </div>
                  <h3 style={{ fontSize: 18 }}>{n.title}</h3>
                  <p>{n.text}</p>
                  <a href="#" style={{ color: "var(--saffron-dark)", fontWeight: 700, fontSize: 14 }}>
                    पूरा पढ़ें →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container">
          <div className="cta-band" style={{ background: "linear-gradient(120deg, var(--green-700), var(--green-900))" }}>
            <div>
              <h2>अपडेट सीधे पाएँ</h2>
              <p>नए बैच, घोषणाएँ और किसान-योजनाओं की जानकारी के लिए जुड़ें।</p>
            </div>
            <form
              style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
              action="#"
            >
              <input
                placeholder="आपका मोबाइल/ईमेल"
                style={{
                  padding: "12px 16px",
                  borderRadius: 999,
                  border: "none",
                  minWidth: 240,
                  font: "inherit",
                }}
              />
              <button className="btn btn-primary" type="submit">
                जुड़ें
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
