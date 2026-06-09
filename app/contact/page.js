import PageHead from "../components/PageHead";
import ContactForm from "../components/ContactForm";
import { org } from "../data/site";

export const metadata = { title: "संपर्क करें" };

export default function Contact() {
  return (
    <>
      <PageHead
        title="संपर्क करें"
        crumb="संपर्क करें"
        lead="प्रशिक्षण, आजीविका मॉडल, लोकल-टेक किट या किसी भी सहायता के लिए हमसे जुड़ें।"
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            {/* Info side */}
            <div>
              <span className="eyebrow">हमसे जुड़ें</span>
              <h2 className="section-title">संपर्क विवरण</h2>

              <div style={{ display: "grid", gap: 16, marginTop: 18 }}>
                <div className="info-card">
                  <div className="icon-badge">📍</div>
                  <h3>पता</h3>
                  <p>
                    {org.address} {org.city}, {org.district}, {org.state} –{" "}
                    {org.pincode}
                  </p>
                </div>
                <div className="info-card">
                  <div className="icon-badge">📞</div>
                  <h3>फ़ोन / हेल्पलाइन</h3>
                  <p>
                    कार्यालय: {org.phone}
                    <br />
                    वैकल्पिक: {org.altPhone}
                    <br />
                    किसान-हेल्पलाइन: {org.helpdesk}
                  </p>
                </div>
                <div className="info-card">
                  <div className="icon-badge">✉</div>
                  <h3>ईमेल</h3>
                  <p>
                    {org.email}
                    <br />
                    {org.helpdesk}
                  </p>
                </div>
                <div className="info-card">
                  <div className="icon-badge">🕒</div>
                  <h3>कार्य-समय</h3>
                  <p>{org.hours}</p>
                </div>
              </div>
            </div>

            {/* Form side */}
            <div>
              <span className="eyebrow">अनुरोध भेजें</span>
              <h2 className="section-title">हमें संदेश लिखें</h2>
              <p className="section-lead" style={{ marginBottom: 18 }}>
                नीचे फ़ॉर्म भरें — हमारी टीम 2 कार्य-दिवसों में आपसे संपर्क करेगी।
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 22 }}>
            <span className="eyebrow">पहुँचें</span>
            <h2 className="section-title">हमारा स्थान</h2>
          </div>
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid var(--line)",
              boxShadow: "var(--shadow)",
            }}
          >
            <iframe
              title="स्थान मानचित्र"
              src="https://www.google.com/maps?q=Lucknow%2C%20Uttar%20Pradesh&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
