import Link from "next/link";

export default function CTABand({
  title = "Make your indigenous cow a source of income",
  text = "Register today for free training or reach out on the farmer helpline.",
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
              Register Now
            </Link>
            <Link href="/livelihood-models" className="btn btn-outline">
              View Models
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
