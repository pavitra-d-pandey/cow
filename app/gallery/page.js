import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { galleryImages, stats, testimonials } from "../data/site";

export const metadata = { title: "Impact & Gallery" };

export default function Gallery() {
  return (
    <>
      <PageHead
        title="Impact & Gallery"
        crumb="Impact & Gallery"
        lead="Photos from the field, farmers' stories and change you can see on the ground."
      />

      {/* Impact stats */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">Our Impact</span>
            <h2 className="section-title">Change in numbers</h2>
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
            <span className="eyebrow">Photo Gallery</span>
            <h2 className="section-title">Glimpses from the field</h2>
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
            <span className="eyebrow">Success Stories</span>
            <h2 className="section-title">In farmers' words</h2>
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
                t: "Women's Empowerment",
                d: "Women from 640+ self-help groups gained a steady source of income from home.",
              },
              {
                t: "Boost to Organic Farming",
                d: "The spread of vermicompost and Panchgavya cut chemical inputs across thousands of acres.",
              },
              {
                t: "Environmental Benefit",
                d: "Biogas, silvipasture and Bio-CNG pilots increased clean energy and green cover.",
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
