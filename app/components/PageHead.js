import Link from "next/link";

export default function PageHead({ title, lead, crumb }) {
  return (
    <header className="page-head">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Home</Link> / {crumb || title}
        </div>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </header>
  );
}
