import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { resources } from "../data/site";

export const metadata = { title: "संसाधन" };

export default function Resources() {
  return (
    <>
      <PageHead
        title="संसाधन एवं डाउनलोड"
        crumb="संसाधन"
        lead="किसानों, SHG और गौशालाओं के लिए उपयोगी मार्गदर्शिकाएँ, SOP, टेम्पलेट और योजना-सूचियाँ — एक स्थान पर।"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {resources.map((r) => (
              <div
                key={r.title}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: 20,
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: "var(--green-100)",
                    color: "var(--green-800)",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {r.type}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 17 }}>{r.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: 14 }}>{r.desc}</p>
                </div>
                <a className="btn btn-green" href="#" aria-label="डाउनलोड">
                  ↓
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schemes */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">सहायता एवं योजनाएँ</span>
            <h2 className="section-title">सरकारी योजनाओं का लाभ</h2>
            <p className="section-lead">
              गौपालन, जैविक खेती एवं ग्रामीण आजीविका से जुड़ी प्रमुख योजनाओं में
              हम आवेदन एवं दस्तावेज़ी सहायता प्रदान करते हैं।
            </p>
          </div>
          <div className="grid grid-3">
            {[
              { t: "राष्ट्रीय गोकुल मिशन", d: "देशी नस्ल-संवर्धन एवं डेयरी-अवसंरचना हेतु सहायता।" },
              { t: "PM-FME (सूक्ष्म खाद्य उद्यम)", d: "खाद्य-प्रसंस्करण इकाइयों हेतु ऋण व अनुदान।" },
              { t: "NRLM / SHG ऋण", d: "स्वयं सहायता समूहों हेतु आजीविका-ऋण व पूँजी।" },
              { t: "बायोगैस सब्सिडी (MNRE)", d: "घरेलू/सामुदायिक बायोगैस संयंत्र पर अनुदान।" },
              { t: "परंपरागत कृषि विकास योजना", d: "जैविक खेती एवं समूह-प्रमाणन हेतु सहायता।" },
              { t: "NABARD FPO योजना", d: "किसान-उत्पादक संगठनों के गठन व संचालन में मदद।" },
            ].map((s) => (
              <div className="info-card" key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="किसी संसाधन या योजना में सहायता चाहिए?"
        text="हमारी टीम दस्तावेज़, आवेदन और पात्रता में आपकी मदद करेगी।"
      />
    </>
  );
}
