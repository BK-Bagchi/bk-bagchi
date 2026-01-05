import React from "react";
import { motion } from "framer-motion";

const languages = ["JavaScript", "TypeScript", "Python"];
const ask = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "React.js",
  "Express.js",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "Software Engineering",
  "System Design",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3
            style={{ color: "var(--primary-color)", fontFamily: "monospace" }}
          >
            About
          </h3>
          <h2 style={{ marginTop: 8 }}>A short background</h2>
          <p style={{ maxWidth: 700, color: "#9aa7bf", lineHeight: 1.7 }}>
            I'm Balay Kumar Bagchi — a MERN stack web developer who builds
            usable, accessible and maintainable applications. I work primarily
            with React and Node, and I enjoy designing APIs and
            developer-friendly systems.
          </p>

          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 20,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h4>Languages</h4>
              <ul>
                {languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Ask me about</h4>
              <ul style={{ maxWidth: 340 }}>
                {ask.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
