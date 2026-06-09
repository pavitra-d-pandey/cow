import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { techKits } from "../data/site";

export const metadata = { title: "लोकल-टेक किट" };

export default function TechKits() {
  return (
    <>
      <PageHead
        title="लोकल-टेक किट"
        crumb="तकनीकी किट"
        lead="किसानों के लिए किफ़ायती, मज़बूत और आसानी से चलने वाले उपकरण — जो स्थानीय परिस्थितियों के अनुरूप डिज़ाइन किए गए हैं। प्रशिक्षण के बाद रियायती दर, किस्तों एवं सब्सिडी पर उपलब्ध।"
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
                  <div className="en">{k.en}</div>
                  <div
                    style={{
                      fontWeight: 800,
                      color: "var(--saffron-dark)",
                      fontSize: 20,
                    }}
                  >
                    {k.price}
                  </div>
                  <div>
                    <small style={{ color: "var(--muted)", fontWeight: 700 }}>
                      किट में शामिल:
                    </small>
                    <ul className="ul-check" style={{ marginTop: 6 }}>
                      {k.includes.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="meta-row">
                    <span>
                      क्षमता: <b>{k.output}</b>
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
              <span className="eyebrow">क्यों 'लोकल-टेक'</span>
              <h2 className="section-title">किसान के लिए, किसान के अनुरूप</h2>
              <div className="prose">
                <p>
                  महँगी, जटिल मशीनों की जगह हम ऐसे उपकरण उपलब्ध कराते हैं जो
                  <b> सस्ते</b>, <b>टिकाऊ</b> और <b>आसानी से मरम्मत-योग्य</b> हों —
                  ताकि गाँव में ही रखरखाव संभव हो।
                </p>
              </div>
              <ul className="ul-check" style={{ marginTop: 10 }}>
                <li>कम पूँजी में उद्यम शुरू करने की सुविधा</li>
                <li>किस्तों एवं SHG/FPO के माध्यम से आपूर्ति</li>
                <li>लागू सरकारी सब्सिडी हेतु आवेदन-सहायता</li>
                <li>स्थापना, संचालन व रखरखाव का प्रशिक्षण</li>
                <li>स्थानीय स्पेयर-पार्ट्स व सर्विस-सहायता</li>
              </ul>
            </div>
            <div>
              <img
                src="/images/kit-workshop.jpg"
                alt="लोकल-टेक किट कार्यशाला"
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
            <span className="eyebrow">किट कैसे प्राप्त करें</span>
            <h2 className="section-title">3 आसान चरण</h2>
          </div>
          <div className="grid grid-3">
            {[
              { n: "1", t: "प्रशिक्षण पूर्ण करें", d: "संबंधित पाठ्यक्रम पूरा करने पर किट-पात्रता प्राप्त करें।" },
              { n: "2", t: "किट चुनें व आवेदन करें", d: "अपनी ज़रूरत की किट चुनें; सब्सिडी/किस्त विकल्प पर आवेदन करें।" },
              { n: "3", t: "स्थापना व सहायता", d: "केंद्र की टीम स्थापना व आरंभिक संचालन में सहायता करती है।" },
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
        title="अपनी इकाई के लिए सही किट चुनें"
        text="कीमत, सब्सिडी और किस्त-योजना की जानकारी के लिए हमारी टीम से संपर्क करें।"
      />
    </>
  );
}
