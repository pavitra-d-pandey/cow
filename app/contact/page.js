import PageHead from "../components/PageHead";
import ContactForm from "../components/ContactForm";
import { org } from "../data/site";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHead
        title="Contact Us"
        crumb="Contact"
        lead="Reach out for training, livelihood models, local-tech kits or any kind of support."
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            {/* Info side */}
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2 className="section-title">Contact details</h2>

              <div style={{ display: "grid", gap: 16, marginTop: 18 }}>
                <div className="info-card">
                  <div className="icon-badge">📍</div>
                  <h3>Address</h3>
                  <p>
                    {org.address} {org.city}, {org.district}, {org.state} –{" "}
                    {org.pincode}
                  </p>
                </div>
                <div className="info-card">
                  <div className="icon-badge">📞</div>
                  <h3>Phone / Helpline</h3>
                  <p>
                    Office: {org.phone}
                    <br />
                    Alternate: {org.altPhone}
                    <br />
                    Farmer Helpline: {org.helpdesk}
                  </p>
                </div>
                <div className="info-card">
                  <div className="icon-badge">✉</div>
                  <h3>Email</h3>
                  <p>
                    {org.email}
                    <br />
                    {org.helpdesk}
                  </p>
                </div>
                <div className="info-card">
                  <div className="icon-badge">🕒</div>
                  <h3>Working Hours</h3>
                  <p>{org.hours}</p>
                </div>
              </div>
            </div>

            {/* Form side */}
            <div>
              <span className="eyebrow">Send a request</span>
              <h2 className="section-title">Write to us</h2>
              <p className="section-lead" style={{ marginBottom: 18 }}>
                Fill the form below — our team will contact you within 2 working
                days.
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
            <span className="eyebrow">Find Us</span>
            <h2 className="section-title">Our Location</h2>
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
              title="Location map"
              src="https://www.google.com/maps?q=Hanumanganj%2C%20Prayagraj%2C%20Uttar%20Pradesh&output=embed"
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
