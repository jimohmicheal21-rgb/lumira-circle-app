"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <main style={styles.page}>
        {/* NAVBAR */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          style={styles.nav}
        >
          {/* LOGO */}
          <div style={styles.logoWrap}>
            <img
              src="https://cdn.sanity.io/images/se4f92gk/production/e721da04619811c3cd756185877f3f55ec4c2512-415x514.svg"
              alt="Lumira Logo"
              style={styles.logo}
            />

            <h2 style={styles.logoText}>Lumira Circle</h2>
          </div>

          {/* DESKTOP NAV */}
          <div className="desktop-links" style={styles.links}>
            <Link href="/" style={styles.link}>Home</Link>
            <Link href="/programs" style={styles.link}>Programs</Link>
            <Link href="/gurus" style={styles.link}>Gurus</Link>
            <Link href="/become-coach" style={styles.link}>Become Coach</Link>
            <Link href="/careers" style={styles.link}>Careers</Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={styles.menuBtn}
          >
            ☰
          </button>
        </motion.nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={styles.mobileMenu}
          >
            <Link href="/" style={styles.mobileLink}>Home</Link>
            <Link href="/programs" style={styles.mobileLink}>Programs</Link>
            <Link href="/gurus" style={styles.mobileLink}>Gurus</Link>
            <Link href="/become-coach" style={styles.mobileLink}>Become Coach</Link>
            <Link href="/careers" style={styles.mobileLink}>Careers</Link>
          </motion.div>
        )}

        {/* HERO */}
        <section style={styles.hero}>
          {/* BLUR EFFECTS */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            style={styles.blur1}
          />

          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            style={styles.blur2}
          />

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={styles.heroContent}
          >
            <motion.img
              animate={{
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              src="https://cdn.sanity.io/images/se4f92gk/production/e721da04619811c3cd756185877f3f55ec4c2512-415x514.svg"
              style={styles.heroLogo}
            />

            <h1 style={styles.heroTitle}>
              Transform Your Life
              <br />
              Through Wellness & Education
            </h1>

            <p style={styles.heroText}>
              Lumira Circle empowers women through transformational
              wellness, elite mentorship, healing, and premium education.
            </p>

            <div style={styles.buttonWrap}>
              <Link href="/programs" style={styles.primaryBtn}>
                Explore Programs
              </Link>

              <Link href="/gurus" style={styles.secondaryBtn}>
                Meet The Gurus
              </Link>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section style={styles.features}>
          {[
            {
              title: "Elite Coachings",
              text: "Receive guidance from transformational mentors and wellness experts."
            },
            {
              title: "Mindset Growth",
              text: "Unlock healing, confidence, clarity, and emotional growth."
            },
            {
              title: "Premium Community",
              text: "Join a powerful network of ambitious and evolving women."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              style={styles.card}
            >
              <h2 style={styles.cardTitle}>{item.title}</h2>
              <p style={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={styles.cta}
        >
          <h2 style={styles.ctaTitle}>
            Ready For Your Transformation?
          </h2>

          <p style={styles.ctaText}>
            Discover healing, mentorship, feminine growth,
            confidence, and transformational wellness through Lumira Circle.
          </p>

          <Link href="/programs" style={styles.ctaButton}>
            Join Lumira Circle
          </Link>
        </motion.section>
      </main>

      {/* RESPONSIVE CSS */}
      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-links {
            display: none !important;
          }

          button {
            display: block !important;
          }
        }

        @media (min-width: 901px) {
          button {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 46px !important;
          }
        }

        @media (max-width: 500px) {
          h1 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </>
  );
}

const styles: any = {
  page: {
    background: "#f5f7fb",
    minHeight: "100vh",
    fontFamily: "Arial",
    overflowX: "hidden",
    maxWidth: "100vw",
  },

  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "38px",
    height: "38px",
  },

  logoText: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#111",
  },

  links: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  },

  link: {
    color: "#333",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "15px",
  },

  menuBtn: {
    background: "none",
    border: "none",
    fontSize: "30px",
    cursor: "pointer",
    color: "#111",
    display: "none",
  },

  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "25px",
    background: "white",
    borderBottom: "1px solid #eee",
  },

  mobileLink: {
    textDecoration: "none",
    color: "#111",
    fontWeight: "600",
    fontSize: "16px",
  },

  hero: {
    position: "relative",
    padding: "120px 20px",
    textAlign: "center",
    overflow: "hidden",
  },

  heroContent: {
    position: "relative",
    zIndex: 5,
    maxWidth: "900px",
    margin: "auto",
  },

  heroLogo: {
    width: "90px",
    marginBottom: "25px",
  },

  heroTitle: {
    fontSize: "72px",
    fontWeight: "900",
    lineHeight: "1.1",
    color: "#111",
    marginBottom: "25px",
  },

  heroText: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#555",
    maxWidth: "760px",
    margin: "auto",
  },

  buttonWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "45px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#111827",
    color: "white",
    padding: "16px 34px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },

  secondaryBtn: {
    background: "white",
    color: "#111",
    padding: "16px 34px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
    border: "1px solid #ddd",
  },

  blur1: {
    position: "absolute",
    width: "450px",
    height: "450px",
    background: "#8b5cf6",
    borderRadius: "50%",
    filter: "blur(120px)",
    opacity: 0.15,
    top: "-100px",
    left: "-100px",
  },

  blur2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "#06b6d4",
    borderRadius: "50%",
    filter: "blur(120px)",
    opacity: 0.12,
    bottom: "-100px",
    right: "-100px",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    padding: "40px",
    maxWidth: "1200px",
    margin: "auto",
  },

  card: {
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(20px)",
    padding: "35px",
    borderRadius: "24px",
    border: "1px solid rgba(255,255,255,0.5)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
  },

  cardTitle: {
    fontSize: "26px",
    marginBottom: "15px",
    color: "#111",
  },

  cardText: {
    color: "#555",
    lineHeight: "1.7",
    fontSize: "16px",
  },

  cta: {
    margin: "100px auto",
    maxWidth: "1000px",
    background: "#111827",
    color: "white",
    textAlign: "center",
    padding: "80px 30px",
    borderRadius: "40px",
  },

  ctaTitle: {
    fontSize: "48px",
    marginBottom: "20px",
    fontWeight: "900",
  },

  ctaText: {
    color: "#d1d5db",
    fontSize: "18px",
    lineHeight: "1.8",
    maxWidth: "700px",
    margin: "auto",
  },

  ctaButton: {
    display: "inline-block",
    marginTop: "35px",
    background: "white",
    color: "#111827",
    padding: "16px 34px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};