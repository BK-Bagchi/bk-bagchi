import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-primary font-mono mb-3">Hi, my name is</p>

          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] m-0 font-bold">
            Balay Kumar Bagchi
          </h1>

          <h2 className="text-[#9aa7bf] font-semibold mt-3 text-lg sm:text-xl md:text-2xl">
            I build delightful web experiences (MERN / Fullstack)
          </h2>

          <p className="max-w-2xl text-[#9aa7bf] mt-4 leading-relaxed text-sm sm:text-base">
            I'm a web developer working with the MERN stack. I enjoy building
            performant, accessible and delightful user experiences using React,
            Node.js and modern tooling.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {/* Contact Button — outline → filled on hover */}
            <a
              href="/#contact"
              className="
      px-6 py-3 rounded-md font-bold
      border text-primary
      bg-transparent
      transition-all duration-300 ease-out
      hover:bg-primary hover:text-black hover:shadow-lg hover:-translate-y-0.5
    "
            >
              Contact Me
            </a>

            {/* Resume Button — filled → outline on hover */}
            <a
              href="/resume.pdf"
              download
              className="
      px-6 py-3 rounded-md font-bold
      bg-primary text-black border
      transition-all duration-300 ease-out
      hover:bg-transparent hover:text-primary hover:shadow-lg hover:-translate-y-0.5
    "
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
