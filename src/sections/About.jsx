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
    <section id="about" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left: About Text */}
          <div>
            <h3 className="text-primary font-mono mb-2">About</h3>
            <h2 className="text-3xl font-bold mb-4">A short background</h2>

            <div className="space-y-4 text-[#9aa7bf] leading-relaxed text-sm sm:text-base max-w-2xl">
              <p>
                I am{" "}
                <span className="text-white font-semibold">
                  Balay Kumar Bagchi
                </span>
                , a motivated Web Developer with a strong academic background,
                having completed my graduation from Varendra University and
                post-graduation from the University of Rajshahi. I am currently
                seeking opportunities as a Junior Frontend Web Developer, where
                I can apply my skills, learn from experienced professionals, and
                contribute meaningfully to real-world products.
              </p>

              <p>
                I specialize in building clean, responsive, and user-friendly
                web applications using React, JavaScript, Tailwind CSS,
                Express.js, MongoDB, Mongoose, and PostgreSQL. I am also
                familiar with Next.js and TypeScript, and I continuously improve
                my skills to stay aligned with modern web technologies. I have
                worked on both full-stack projects and frontend-focused
                applications, giving me a solid understanding of how systems
                work end-to-end.
              </p>

              <p>
                I am passionate about writing maintainable code, improving user
                experience, and solving real problems through technology. I aim
                to grow into a Full-Stack or Backend Developer in the future
                while delivering reliable, scalable, and high-quality solutions.
              </p>

              <p>
                I add value by combining technical skills with a strong learning
                mindset, attention to detail, and the ability to collaborate
                effectively with teams to build impactful digital products.
              </p>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-3">Languages</h4>
              <ul className="space-y-2 text-[#9aa7bf]">
                {languages.map((l) => (
                  <li
                    key={l}
                    className="before:content-['▹'] before:text-primary before:mr-2"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Ask me about</h4>
              <ul className="space-y-2 text-[#9aa7bf] max-w-xs">
                {ask.map((a) => (
                  <li
                    key={a}
                    className="before:content-['▹'] before:text-primary before:mr-2"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
