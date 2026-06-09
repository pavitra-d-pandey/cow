import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { faqs } from "../data/site";

export const metadata = { title: "सामान्य प्रश्न" };

export default function FAQ() {
  return (
    <>
      <PageHead
        title="सामान्य प्रश्न (FAQ)"
        crumb="सामान्य प्रश्न"
        lead="किसानों द्वारा सबसे अधिक पूछे जाने वाले प्रश्नों के उत्तर। आपका प्रश्न यहाँ न हो तो हमें संपर्क करें।"
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
          <span className="eyebrow">अभी भी प्रश्न है?</span>
          <h2 className="section-title">हम मदद के लिए तैयार हैं</h2>
          <p className="section-lead" style={{ marginBottom: 22 }}>
            किसान-हेल्पलाइन पर कॉल करें या संपर्क फ़ॉर्म भरें — हमारी टीम आपकी
            सहायता करेगी।
          </p>
          <a href="/contact" className="btn btn-primary">
            संपर्क करें →
          </a>
        </div>
      </section>

      <CTABand />
    </>
  );
}
