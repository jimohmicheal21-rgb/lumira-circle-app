"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://se4f92gk.apicdn.sanity.io/v2024-01-01/data/query/production?query=*[_type=='program']{_id,title,description,'imageUrl':image.asset->url}"
      );

      const data = await res.json();
      setPrograms(data?.result || []);
    }

    fetchData();
  }, []);

  return (
    <div className="page">

      {/* NAVBAR */}
      <nav className="nav">
        <div className="logo">
          <img src="https://cdn.sanity.io/images/se4f92gk/production/e721da04619811c3cd756185877f3f55ec4c2512-415x514.svg" />
          <span>Lumira</span>
        </div>

        <div className="links">
          <a href="/">Home</a>
          <a href="/programs">Programs</a>
          <a href="/gurus">Gurus</a>
          <a href="/careers">Careers</a>
        </div>

        <div className="hamburger" onClick={() => setOpen(true)}>☰</div>
      </nav>

      {/* MOBILE MENU */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <div className="sidebar" style={{ right: open ? 0 : "-300px" }}>
        <a href="/">Home</a>
        <a href="/programs">Programs</a>
        <a href="/gurus">Gurus</a>
        <a href="/careers">Careers</a>
        <button onClick={() => setOpen(false)}>Close</button>
      </div>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Transform Your Life With Guided Growth</h1>
        <p>
          Structured programs, expert mentorship, and a supportive community
          designed to help you grow emotionally, spiritually, and professionally.
        </p>

        <button className="btn">Explore Programs</button>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div><h2>10,000+</h2><p>Active Members</p></div>
        <div><h2>25,000+</h2><p>Programs Completed</p></div>
        <div><h2>92%</h2><p>Success Rate</p></div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div>
          <h3>Personal Growth</h3>
          <p>Step-by-step transformation programs for clarity and mindset shift.</p>
        </div>

        <div>
          <h3>Expert Mentorship</h3>
          <p>Learn directly from experienced coaches and guides.</p>
        </div>

        <div>
          <h3>Community Support</h3>
          <p>Grow together with a strong supportive network.</p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="grid">
        {programs.map((p) => (
          <div key={p._id} className="card">
            <img src={p.imageUrl} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Start Your Transformation Today</h2>
        <button>Get Started</button>
      </section>

    </div>
  );
}