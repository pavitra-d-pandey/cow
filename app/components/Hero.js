"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides } from "../data/site";

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const s = heroSlides[i];

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={s.image} alt={s.alt} />
      </div>
      <div className="container">
        <div className="hero-inner">
          <span className="kicker">{s.kicker}</span>
          <h1>{s.title}</h1>
          <p>{s.text}</p>
          <div className="hero-actions">
            <Link href="/livelihood-models" className="btn btn-primary">
              Explore Livelihood Models →
            </Link>
            <Link href="/training" className="btn btn-outline">
              Free Training
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={idx === i ? "active" : ""}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}
