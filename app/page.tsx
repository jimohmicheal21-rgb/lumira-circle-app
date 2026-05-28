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

export default async function Page() {
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
          <div style={styles.dot}></div>
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

      {/* OVERLAY */}
      {open && (
        <div style={styles.overlay} onClick={() => setOpen(false)} />
      )}

      {/* SIDEBAR */}
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: open ? 0 : 300 }}
        transition={{ type: "spring", stiffness: 120 }}
        style={styles.sidebar}
      >
        <h3>Menu</h3>

        <a href="/">Home</a>
        <a href="/programs">Programs</a>
        <a href="/gurus">Gurus</a>
        <a href="/careers">Careers</a>

        <button style={styles.close} onClick={() => setOpen(false)}>
          Close
        </button>
      </motion.div>

      {/* HERO */}
      <section style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.title}
        >
          Transform Your Life
        </motion.h1>

        <p style={styles.subtitle}>
          Premium coaching, programs, and personal transformation.
        </p>
      </section>

      {/* PROGRAMS */}
      <section style={styles.section}>
        <h2>Featured Programs</h2>

        <div style={styles.grid}>
          {programs?.map((p: any, i: number) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={styles.card}
            >
              {p.imageUrl && (
                <img src={p.imageUrl} style={styles.img} />
              )}

              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
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
    padding: 18,
    background: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    display: "flex",
    gap: 10,
    fontWeight: "bold",
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#6c63ff",
  },

  links: {
    display: "flex",
    gap: 15,
  },

  hamburger: {
    fontSize: 26,
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
  },

  sidebar: {
    position: "fixed",
    right: 0,
    top: 0,
    width: 260,
    height: "100%",
    background: "white",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },

  close: {
    marginTop: 20,
    padding: 10,
    background: "#111",
    color: "white",
    borderRadius: 8,
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px 40px",
  },

  title: {
    fontSize: 48,
  },

  subtitle: {
    color: "#555",
  },

  section: {
    padding: 40,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 20,
  },

  card: {
    background: "white",
    padding: 15,
    borderRadius: 15,
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },

  img: {
    width: "100%",
    height: 160,
    objectFit: "cover",
    borderRadius: 10,
  },
};