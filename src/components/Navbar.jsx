import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Resume", href: "/resume", isRoute: true },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        backdropFilter: "blur(6px)",
        background: "rgba(8,8,10,0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          gap: 24,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 0",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          style={{ fontWeight: 700, fontSize: "1.25rem" }}
        >
          Balay Kumar Bagchi
        </motion.div>

        <nav>
          <ul
            style={{
              display: "flex",
              gap: 18,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((n) => (
              <li key={n.label}>
                {n.isRoute ? (
                  <Link
                    to={n.href}
                    style={{
                      color:
                        location.pathname === "/resume"
                          ? "var(--primary-color)"
                          : "#cfcfcf",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    {n.label}
                  </Link>
                ) : (
                  <a
                    href={n.href}
                    style={{
                      color: "#cfcfcf",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    {n.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
