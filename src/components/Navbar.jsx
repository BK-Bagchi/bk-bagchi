import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Resume", href: "/resume", isRoute: true },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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
        borderBottom: "1px solid rgba(255,255,255,0.2)",
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
          style={{ fontWeight: 700, fontSize: "1.25rem", color: "white" }}
        >
          Balay Bagchi
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
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

        {/* Hamburger Button (md and below) */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="block md:hidden"
          style={{ color: "#cfcfcf" }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: "rgba(8,8,10,0.85)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
            className="lg:hidden"
          >
            <ul className="list-none m-0 px-6 py-4 flex flex-col gap-3">
              {navItems.map((n) => (
                <li key={n.label}>
                  {n.isRoute ? (
                    <Link
                      to={n.href}
                      onClick={() => setOpen(false)}
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
                      onClick={() => setOpen(false)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
