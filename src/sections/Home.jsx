import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 0",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p
            style={{
              color: "var(--primary-color)",
              fontFamily: "monospace",
              marginBottom: 12,
            }}
          >
            Hi, my name is
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            Balay Kumar Bagchi
          </h1>
          <h2 style={{ color: "#9aa7bf", fontWeight: 600, marginTop: 12 }}>
            I build delightful web experiences (MERN / Fullstack)
          </h2>
          <p
            style={{
              maxWidth: 640,
              color: "#9aa7bf",
              marginTop: 18,
              lineHeight: 1.7,
            }}
          >
            I'm a web developer working with the MERN stack. I enjoy building
            performant, accessible and delightful user experiences using React,
            Node.js and modern tooling.
          </p>
          <div style={{ marginTop: 20 }}>
            <a
              href="/#projects"
              style={{
                padding: "0.8rem 1.6rem",
                border: "2px solid var(--primary-color)",
                borderRadius: 6,
                color: "var(--primary-color)",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              See Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
