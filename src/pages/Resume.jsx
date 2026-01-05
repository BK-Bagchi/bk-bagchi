import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PDFResume from "../assets/Resume_of_Balay_Kumar_Bagchi.pdf";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ padding: "8rem 0" }}
    >
      <div className="container">
        <h3 style={{ color: "var(--primary-color)", fontFamily: "monospace" }}>
          Resume
        </h3>
        <h2 style={{ marginTop: 8 }}>Full resume</h2>
        <p style={{ color: "#9aa7bf" }}>
          You can download the resume below or go back to the main page.
        </p>

        <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
          <a
            href={PDFResume}
            download
            style={{
              padding: "0.8rem 1.2rem",
              border: "2px solid var(--primary-color)",
              borderRadius: 6,
              color: "var(--primary-color)",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Download PDF
          </a>
          <Link
            to="/"
            style={{
              padding: "0.8rem 1.2rem",
              border: "1px solid #444",
              borderRadius: 6,
              color: "#cfcfcf",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Back
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
