import Link from "next/link";
import { nav, org } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <span className="brand-mark">गौ</span>
              <span className="brand-text">
                <strong>{org.acronym}</strong>
                <span>{org.centreEn}</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: "#a9c0b1", maxWidth: 320 }}>
              {org.parent} की एक इकाई। देशी गायों के माध्यम से किसानों के लिए
              आय-सृजक मॉडल, प्रशिक्षण एवं किफ़ायती लोकल-टेक किट।
            </p>
            <p style={{ fontSize: 13, color: "#8aa495", marginTop: 12 }}>
              {org.estd} • {org.reg}
            </p>
          </div>

          <div>
            <h4>त्वरित लिंक</h4>
            {nav.slice(0, 6).map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>

          <div>
            <h4>सेवाएँ</h4>
            <Link href="/livelihood-models">आजीविका मॉडल</Link>
            <Link href="/training">किसान प्रशिक्षण</Link>
            <Link href="/tech-kits">लोकल-टेक किट</Link>
            <Link href="/resources">डाउनलोड एवं संसाधन</Link>
            <Link href="/faq">सामान्य प्रश्न</Link>
          </div>

          <div>
            <h4>संपर्क</h4>
            <p style={{ fontSize: 14, color: "#c9d8ce" }}>
              {org.address} {org.city}, {org.state} – {org.pincode}
            </p>
            <p style={{ fontSize: 14, color: "#c9d8ce", marginTop: 8 }}>
              📞 {org.phone}
              <br />
              ✉ {org.email}
            </p>
            <p style={{ fontSize: 13, color: "#8aa495", marginTop: 8 }}>
              {org.hours}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {org.centre} ({org.acronym})। सर्वाधिकार
            सुरक्षित।
          </span>
          <span>एक गैर-लाभकारी, धर्मार्थ एवं वैज्ञानिक अनुसंधान पहल।</span>
        </div>
      </div>
    </footer>
  );
}
