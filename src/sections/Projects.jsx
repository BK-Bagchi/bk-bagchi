import React from "react";
import { motion } from "framer-motion";

const sampleProjects = [
  {
    id: 1,
    title: "Project One",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "A fullstack application with realtime features.",
  },
  {
    id: 2,
    title: "Project Two",
    tech: ["Next.js", "PostgreSQL"],
    desc: "Server-rendered app with strong SEO.",
  },
  {
    id: 3,
    title: "Project Three",
    tech: ["React", "Express", "Redis"],
    desc: "Fast API + caching layer.",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3
            style={{ color: "var(--primary-color)", fontFamily: "monospace" }}
          >
            Projects
          </h3>
          <h2 style={{ marginTop: 8 }}>Some things I've built</h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
            marginTop: 24,
          }}
        >
          {sampleProjects.map((p, i) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              style={{
                background: "var(--surface-color)",
                padding: 18,
                borderRadius: 8,
              }}
            >
              <h4 style={{ margin: 0 }}>{p.title}</h4>
              <p style={{ color: "#9aa7bf" }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "monospace",
                      color: "#bfcbdc",
                      fontSize: 12,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
