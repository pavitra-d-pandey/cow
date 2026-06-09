"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, org } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>{org.parent} • {org.reg}</span>
          <span className="tb-right">
            <a href={`tel:${org.phone.replace(/\s/g, "")}`}>📞 {org.phone}</a>
            <a href={`mailto:${org.email}`}>✉ {org.email}</a>
          </span>
        </div>
      </div>

      <nav className="nav">
        <div className="container">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">गौ</span>
            <span className="brand-text">
              <strong>{org.acronym}</strong>
              <span>{org.centre}</span>
            </span>
          </Link>

          <button
            className="menu-toggle"
            aria-label="मेन्यू"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>

          <ul className={`menu ${open ? "open" : ""}`}>
            {nav.map((item) => (
              <li
                key={item.href}
                className={item.href === "/contact" ? "cta" : ""}
              >
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
