import Link from "next/link";
import { nav, org } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <img className="brand-logo" src={org.logo} alt={`${org.name} logo`} />
              <span className="brand-text">
                <strong>{org.shortName}</strong>
                <span>{org.name}</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: "#a9c0b1", maxWidth: 320 }}>
              {org.type}. Building income models, training and affordable
              local-tech kits for farmers through indigenous cows.
            </p>
            <p style={{ fontSize: 13, color: "#8aa495", marginTop: 12 }}>
              {org.estd} • {org.reg}
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            {nav.slice(0, 6).map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>

          <div>
            <h4>Services</h4>
            <Link href="/livelihood-models">Livelihood Models</Link>
            <Link href="/training">Farmer Training</Link>
            <Link href="/tech-kits">Local-Tech Kits</Link>
            <Link href="/resources">Downloads & Resources</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div>
            <h4>Contact</h4>
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
            © {new Date().getFullYear()} {org.name} ({org.acronym}). All rights
            reserved.
          </span>
          <span>A non-profit, charitable & scientific research initiative.</span>
        </div>
      </div>
    </footer>
  );
}
