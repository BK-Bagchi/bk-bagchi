import React from "react";
import { motion } from "framer-motion";

const sampleProjects = [
  {
    id: 1,
    title: "Collab Space",
    image: "/projects/collab-space.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
    ],
    liveLink: "https://collabspace.app",
    githubLink: "https://github.com/yourusername/collab-space",
    challenges: [
      "Implementing real-time updates with Socket.IO while keeping state in sync",
      "Designing scalable MongoDB schemas for collaborative data",
      "Handling authentication and authorization securely",
    ],
    futurePlans: [
      "Add voice/video collaboration using WebRTC",
      "Introduce team-based permissions and roles",
      "Improve offline support with service workers",
    ],
  },
  {
    id: 2,
    title: "StudyMate",
    image: "/projects/studymate.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    liveLink: "https://studymate.app",
    githubLink: "https://github.com/yourusername/studymate",
    challenges: [
      "Optimizing server-side rendering performance",
      "Designing relational schemas for user, notes and reminders",
      "Ensuring type-safety across frontend and backend",
    ],
    futurePlans: [
      "Add AI-powered study recommendations",
      "Introduce calendar & deadline syncing",
      "Add mobile PWA support",
    ],
  },
  {
    id: 3,
    title: "Banglish Translator",
    image: "/projects/banglish-translator.png",
    technologies: ["React", "Node.js", "Express", "NLP", "MongoDB"],
    liveLink: "https://banglish.app",
    githubLink: "https://github.com/yourusername/banglish-translator",
    challenges: [
      "Handling ambiguous transliteration cases",
      "Maintaining fast translations under heavy load",
      "Designing a clean UX for language switching",
    ],
    futurePlans: [
      "Add Chrome extension version",
      "Introduce user accounts and translation history",
      "Support more South Asian languages",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-primary text-xl font-mono">Projects</h3>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            Some things I've built
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {p.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-300 mb-4 line-clamp-3">
                  {p.challenges[0]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary-dark transition"
                  >
                    Live
                  </a>
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
