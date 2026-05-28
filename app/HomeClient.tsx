"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HomeClient({ programs }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.page}>
      {/* NAV */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={styles.nav}
      >
        <div style={styles.logo}>
          <div style={styles.logoDot}></div>
          Lumira Circle
        </div>

        <div style={styles.links}>
          <a href="/">Home</a>
          <a href="/programs">Programs</a>
          <a href="/gurus">Gurus</a>
          <a href="/careers">Careers</a>
        </div>

        <div style={styles.hamburger} onClick={() => setOpen(true)}>
          ☰
        </div>
      </motion.nav>

      {/* SIDEBAR */}
      {open && (
        <div style={styles.overlay} onClick={() => setOpen(false)} />
      )}

      <motion.div
        initial={{ x: 300 }}
        animate={{ x: open ? 0 : 300 }}
        style={styles.sidebar}
      >
        <a href="/">Home</a>
        <a href="/programs">Programs</a>
        <a href="/gurus">Gurus</a>
        <a href="/careers">Careers</a>

        <button onClick={() => setOpen(false)}>Close</button>
      </motion.div>

      {/* HERO */}
      <section style={styles.hero}>
        <h1>Transform Your Life</h1>
      </section>

      {/* PROGRAMS */}
      <div style={styles.grid}>
        {programs?.map((p: any) => (
          <motion.div
            key={p._id}
            whileHover={{ scale: 1.05 }}
            style={styles.card}
          >
            <img src={p.imageUrl} style={styles.img} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* styles */
const styles: any = {
  page: { fontFamily: "Arial" },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    background: "white",
  },

  logo: { fontWeight: "bold", display: "flex", gap: 10 },

  logoDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#6c63ff",
  },

  links: { display: "flex", gap: 15 },

  hamburger: { fontSize: 26, cursor: "pointer" },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
  },

  sidebar: {
    position: "fixed",
    right: 0,
    top: 0,
    width: 250,
    height: "100%",
    background: "white",
    padding: 20,
  },

  hero: { padding: 60, textAlign: "center" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 20,
    padding: 40,
  },

  card: {
    background: "white",
    padding: 15,
    borderRadius: 10,
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },

  img: {
    width: "100%",
    height: 160,
    objectFit: "cover",
  },
};