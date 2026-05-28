"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      {/* NAV */}
      <motion.nav className="nav">
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

        <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <motion.div
        className="sidebar"
        animate={{ x: open ? 0 : 300 }}
      >
        <a href="/">Home</a>
        <a href="/programs">Programs</a>
        <a href="/gurus">Gurus</a>
        <a href="/careers">Careers</a>

        <button onClick={() => setOpen(false)}>Close</button>
      </motion.div>

      {/* HERO */}
      <section className="hero">
        <h1>Transform Your Life</h1>
        <p>Premium coaching programs for real transformation.</p>
      </section>

      {/* PROGRAMS */}
      <section className="grid">
        {programs.map((p) => (
          <motion.div key={p._id} whileHover={{ scale: 1.03 }} className="card">
            <img src={p.imageUrl} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}