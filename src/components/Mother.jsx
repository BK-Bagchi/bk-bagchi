import React, { useEffect } from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Blogs from "../sections/Blogs";
import Contact from "../sections/Contact";
import { motion } from "framer-motion";

export default function Mother() {
  useEffect(() => {
    function scrollToHash() {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // scroll on mount
    scrollToHash();
    // scroll on hash change
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: 84 }}
    >
      <Home />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </motion.main>
  );
}
