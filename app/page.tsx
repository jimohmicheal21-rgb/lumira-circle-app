"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const dynamic = "force-dynamic";

async function getPrograms() {
  const res = await fetch(
    "https://se4f92gk.apicdn.sanity.io/v2024-01-01/data/query/production?query=*[_type=='program']{_id,title,description,'imageUrl':image.asset->url}",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.result;
}

export default async function HomePage() {
  const programs = await getPrograms();

  const [open, setOpen] = useState(false);

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={styles.nav}
      >
        <div style={styles.logo}>
          <div style={styles.logoDot}></div>
          <span>Lumira Circle</span>
        </div>

        <div style={styles.links} className="desktop">
          <a href="/">Home</a>
          <a href="/programs">Programs</a>
          <a href="/gurus">Gurus</a>
          <a href="/careers">Careers</a>
        </div>

        <div style={styles.hamburger} onClick={() => setOpen(true)}>
          ☰
        </div>
      </motion.nav>

      {/* OVERLAY */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: open ? 0 : 300 }}
        transition={{ type: "spring", stiffness: 120 }}
        style={styles.sidebar}
      >
        <h3>Menu</h3>

        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/programs" onClick={() => setOpen(false)}>Programs</a>
        <a href="/gurus" onClick={() => setOpen(false)}>Gurus</a>
        <a href="/careers" onClick={() => setOpen(false)}>Careers</a>

        <button style={styles.closeBtn} onClick={() => setOpen(false)}>
          Close
        </button>
      </motion.div>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={styles.hero}
      >
        <h1 style={styles.heroTitle}>
          Transform Your Mind, Body & Purpose
        </h1>

        <p style={styles.heroText}>
          A premium space for growth, coaching, and transformation programs.
        </p>
      </motion.section>

      {/* PROGRAMS */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Programs</h2>

        <div style={styles.grid}>
          {programs?.slice(0, 3).map((p: any, i: number) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={styles.card}
            >
              {p.imageUrl && (
                <img src={p.imageUrl} style={styles.cardImg} />
              )}

              <div style={styles.cardBody}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={styles.cta}
      >
        <h2>Start Your Transformation Today</h2>
      </motion.section>
    </div>
  );
}

/* STYLES */
const styles: any = {
  page: {
    fontFamily: "Arial",
    background: "linear-gradient(180deg,#f7f8ff,#eef1ff)",
    minHeight: "100vh",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 30px",
    background: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "bold",
  },

  logoDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#6c63ff",
  },

  links: {
    display: "flex",
    gap: 20,
  },

  hamburger: {
    fontSize: 26,
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 998,
  },

  sidebar: {
    position: "fixed",
    top: 0,
    right: 0,
    width: 260,
    height: "100%",
    background: "white",
    padding: 20,
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },

  closeBtn: {
    marginTop: 20,
    padding: 10,
    background: "#111",
    color: "white",
    borderRadius: 8,
  },

  hero: {
    textAlign: "center",
    padding: "90px 20px 50px",
  },

  heroTitle: {
    fontSize: 52,
  },

  heroText: {
    color: "#555",
    maxWidth: 600,
    margin: "auto",
  },

  section: {
    padding: "50px",
  },

  sectionTitle: {
    fontSize: 28,
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 20,
  },

  card: {
    background: "white",
    borderRadius: 15,
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    cursor: "pointer",
  },

  cardImg: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },

  cardBody: {
    padding: 15,
  },

  cta: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#6c63ff",
    color: "white",
  },
};