import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "How I structure MERN apps",
    excerpt: "Patterns and folder layout I use for scalable apps.",
  },
  {
    id: 2,
    title: "A friendly intro to Prisma",
    excerpt: "Why I like Prisma for type-safe DB access.",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" style={{ padding: "6rem 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3
            style={{ color: "var(--primary-color)", fontFamily: "monospace" }}
          >
            Blogs
          </h3>
          <h2 style={{ marginTop: 8 }}>Writing and notes</h2>
        </motion.div>

        <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
          {posts.map((p) => (
            <motion.article
              key={p.id}
              whileHover={{ scale: 1.02 }}
              style={{
                padding: 16,
                borderRadius: 8,
                background: "var(--surface-color)",
              }}
            >
              <h4 style={{ margin: 0 }}>{p.title}</h4>
              <p style={{ color: "#9aa7bf" }}>{p.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
