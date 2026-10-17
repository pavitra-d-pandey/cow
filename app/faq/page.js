import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { faqs } from "../data/site";

export const metadata = { title: "FAQ" };

export default function FAQ() {
  return (
    <>
      <PageHead
        title="Frequently Asked Questions"
        crumb="FAQ"
        lead="Answers to the questions farmers ask most. If yours isn't here, get in touch with us."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          {faqs.map((f, i) => (
            <details className="acc" key={i} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="acc-body">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container center">
          <span className="eyebrow">Still have a question?</span>
          <h2 className="section-title">We're here to help</h2>
          <p className="section-lead" style={{ marginBottom: 22 }}>
            Call the farmer helpline or fill the contact form — our team will
            assist you.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us →
          </a>
        </div>
      </section>

      <CTABand />
    </>
  );
}
