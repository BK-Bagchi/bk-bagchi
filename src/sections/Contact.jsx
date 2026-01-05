import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 0" }}>
      <div
        className="container"
        style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3
            style={{ color: "var(--primary-color)", fontFamily: "monospace" }}
          >
            Contact
          </h3>
          <h2 style={{ marginTop: 8 }}>Get in touch</h2>
          <p style={{ color: "#9aa7bf", lineHeight: 1.7 }}>
            My inbox is open. Whether it’s a project, a job opportunity or a
            quick question — I’ll try my best to answer.
          </p>
          <a
            href="mailto:balay@example.com"
            style={{
              display: "inline-block",
              marginTop: 18,
              padding: "0.8rem 1.6rem",
              border: "2px solid var(--primary-color)",
              borderRadius: 6,
              color: "var(--primary-color)",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Say hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
