import PageHead from "../components/PageHead";
import CTABand from "../components/CTABand";
import { org, timeline, team, stats, partners } from "../data/site";

export const metadata = { title: "हमारे बारे में" };

export default function About() {
  return (
    <>
      <PageHead
        title="हमारे बारे में"
        crumb="हमारे बारे में"
        lead={`${org.centre} (${org.acronym}) — देशी गौ-आधारित आजीविका, प्रशिक्षण और लोकल-टेक के लिए समर्पित एक वैज्ञानिक अनुसंधान केंद्र।`}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <span className="eyebrow">परिचय</span>
              <h2 className="section-title">हम कौन हैं</h2>
              <p>
                <strong>{org.centre} ({org.acronym})</strong> की स्थापना{" "}
                {org.parent} के अंतर्गत इस उद्देश्य से की गई कि देशी गाय को केवल
                धार्मिक या भावनात्मक दृष्टि से नहीं, बल्कि एक{" "}
                <em>आर्थिक रूप से व्यवहार्य ग्रामीण उद्यम</em> के रूप में स्थापित
                किया जाए।
              </p>
              <p>
                हम एक गैर-लाभकारी, धर्मार्थ एवं वैज्ञानिक अनुसंधान संस्था के रूप
                में कार्य करते हैं। हमारा केंद्र-बिंदु है — छोटे और सीमांत किसान,
                ग्रामीण महिलाएँ, युवा एवं स्वयं सहायता समूह, जिनके पास 1–2 देशी
                गायें भी हों तो वे भी सम्मानजनक आय अर्जित कर सकें।
              </p>
              <p>
                हम परंपरागत ज्ञान और आधुनिक तकनीक के समन्वय से ऐसे मॉडल विकसित
                करते हैं जो कम लागत में, स्थानीय संसाधनों से और बाज़ार-माँग के
                अनुरूप हों।
              </p>
            </div>
            <div>
              <img
                src="/images/about-main.jpg"
                alt="केंद्र का परिसर एवं किसान"
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

      {/* Mission / Vision / Values */}
      <section className="section alt">
        <div className="container">
          <div className="grid grid-3">
            {[
              {
                icon: "🎯",
                t: "हमारा ध्येय (Mission)",
                d: "देशी गायों के आधार पर किसानों के लिए सिद्ध, लाभकारी आय-मॉडल बनाना और प्रशिक्षण व लोकल-टेक किट के माध्यम से उन्हें घर-घर तक पहुँचाना।",
              },
              {
                icon: "🌅",
                t: "हमारी दृष्टि (Vision)",
                d: "एक ऐसा उत्तर प्रदेश जहाँ हर देशी गाय आय और आत्मनिर्भरता का स्रोत हो, और ग्रामीण अर्थव्यवस्था 'शून्य-अपशिष्ट' चक्रीय मॉडल पर खड़ी हो।",
              },
              {
                icon: "🤝",
                t: "हमारे मूल्य (Values)",
                d: "वैज्ञानिक दृष्टिकोण, किसान-प्रथम सोच, पारदर्शिता, महिला-सशक्तिकरण, पर्यावरण-संरक्षण और सेवा-भाव।",
              },
            ].map((c) => (
              <div className="info-card" key={c.t}>
                <div className="icon-badge">{c.icon}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">हमारे उद्देश्य</span>
            <h2 className="section-title">केंद्र किन लक्ष्यों पर कार्य करता है</h2>
          </div>
          <div className="grid grid-2">
            {[
              {
                t: "ग्रामीण प्रशिक्षण एवं कौशल विकास",
                d: "युवाओं, महिलाओं एवं किसानों को व्यावसायिक, तकनीकी एवं कृषि-आधारित कौशल में प्रशिक्षित कर आत्मनिर्भर बनाना।",
              },
              {
                t: "रोजगार सृजन एवं उद्यमिता",
                d: "लघु एवं कुटीर उद्योग, स्वरोजगार हेतु वित्तीय एवं तकनीकी मार्गदर्शन के माध्यम से रोजगार के अवसर उत्पन्न करना।",
              },
              {
                t: "स्वयं सहायता समूह (SHGs)",
                d: "महिलाओं व कमजोर वर्गों के समूहों का गठन एवं सुदृढ़ीकरण कर बचत, ऋण व आजीविका से सामाजिक-आर्थिक सशक्तिकरण।",
              },
              {
                t: "गो-उत्पाद अनुसंधान एवं विकास (R&D)",
                d: "देशी नस्लों के संरक्षण तथा दूध, गोमूत्र, गोबर व पंचगव्य उत्पादों पर वैज्ञानिक अनुसंधान एवं मूल्य-संवर्धन।",
              },
              {
                t: "हाई-टेक प्राकृतिक गौशाला",
                d: "आधुनिक तकनीक व परंपरागत ज्ञान के समन्वय से मॉडल गौशालाओं की स्थापना, संरक्षण व प्रजनन-सुधार।",
              },
              {
                t: "सतत कृषि एवं चक्रीय अर्थव्यवस्था",
                d: "गोवंश-आधारित सर्कुलर इकोनॉमी मॉडल से टिकाऊ कृषि, जैविक खेती व पर्यावरण-संरक्षण को बढ़ावा।",
              },
            ].map((o) => (
              <div
                key={o.t}
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderLeft: "5px solid var(--saffron)",
                  borderRadius: 12,
                  padding: 22,
                  boxShadow: "var(--shadow)",
                }}
              >
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{o.t}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14.5 }}>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section dark">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div
                className="stat"
                key={s.label}
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="num" style={{ color: "var(--saffron)" }}>
                  {s.value}
                </div>
                <div className="lab" style={{ color: "#c9d8ce" }}>
                  {s.label}
                  <small>{s.en}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">हमारी यात्रा</span>
            <h2 className="section-title">मील के पत्थर</h2>
          </div>
          <ul className="timeline" style={{ maxWidth: 720, margin: "0 auto" }}>
            {timeline.map((t) => (
              <li key={t.year}>
                <span className="yr">{t.year}</span>
                <p style={{ color: "var(--muted)", marginTop: 2 }}>{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="section alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">नेतृत्व</span>
            <h2 className="section-title">हमारी टीम</h2>
            <p className="section-lead">
              वैज्ञानिक, प्रशिक्षक और क्षेत्रीय विशेषज्ञों की समर्पित टीम जो
              किसानों के साथ ज़मीन पर काम करती है।
            </p>
          </div>
          <div className="grid grid-4">
            {team.map((m) => (
              <div className="card" key={m.name}>
                <div className="card-img" style={{ aspectRatio: "1/1" }}>
                  <img src={m.image} alt={m.name} />
                </div>
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: 17 }}>{m.name}</h3>
                  <p style={{ color: "var(--saffron-dark)", fontWeight: 600 }}>
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">सहयोगी संस्थाएँ</span>
          <h2 className="section-title">हमारे साझेदार</h2>
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
                  background: "var(--cream-2)",
                  border: "1px solid var(--line)",
                  borderRadius: 999,
                  padding: "10px 20px",
                  fontWeight: 600,
                  fontSize: 14.5,
                  color: "var(--green-800)",
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
