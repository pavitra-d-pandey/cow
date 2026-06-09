import Link from "next/link";

export default function CTABand({
  title = "अपनी देशी गाय को आय का स्रोत बनाएँ",
  text = "नि:शुल्क प्रशिक्षण के लिए आज ही पंजीकरण करें या किसान-हेल्पलाइन पर संपर्क करें।",
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              अभी पंजीकरण करें
            </Link>
            <Link href="/livelihood-models" className="btn btn-outline">
              मॉडल देखें
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
