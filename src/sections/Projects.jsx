import React from "react";
import { motion } from "framer-motion";
import BikroyHubPic from "../assets/Bikroy-1.PNG";
import CollabSpacePic from "../assets/Collab-2.PNG";
import RailPassPic from "../assets/Rail-1.PNG";

const sampleProjects = [
  {
    id: 1,
    title: "Collab Space",
    image: CollabSpacePic,
    technologies: [
      "React",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
    ],
    liveLink: "https://collab-space-server.onrender.com",
    githubLink: "https://github.com/BK-Bagchi/collab-space",
    challenges: [
      "Collab Space is a full-stack collaboration and productivity platform built with the MERN stack, Socket.IO, and a fully customizable, modern UI. It provides project management, task workflow, real-time messaging, notifications, analytics, notes, and team activity tracking — all in one unified workspace.",
    ],
    futurePlans: [
      "Add voice/video collaboration using WebRTC",
      "Introduce team-based permissions and roles",
      "Improve offline support with service workers",
    ],
  },
  {
    id: 2,
    title: "Bikroy Hub",
    image: BikroyHubPic,
    technologies: [
      "React",
      "Express",
      "Node.js",
      "Bootstrap",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
    ],
    liveLink: "https://bikroyhub-server.onrender.com",
    githubLink: "https://github.com/BK-Bagchi/bikroy-hub",
    challenges: [
      "Bikroy Hub is a peer-to-peer (P2P) marketplace where buyers and sellers can connect, post ads, and exchange goods. It comes with secure authentication, payment escrow system, admin dashboard, and dispute resolution system",
    ],
    futurePlans: [
      "Add AI-powered study recommendations",
      "Introduce calendar & deadline syncing",
      "Add mobile PWA support",
    ],
  },
  {
    id: 3,
    title: "Rail Pass",
    image: RailPassPic,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SSLCommerz",
      "EJS Template",
    ],
    liveLink: "https://rail-pass.onrender.com",
    githubLink: "https://github.com/BK-Bagchi/rail-pass",
    challenges: [
      "RailPass is a smart railway reservation system that allows users to search trains, check seat availability, book tickets, and manage journeys online. Also let admin to manage trains and stations. It provides real-time fare details, seat selection, and easy booking confirmation, making train travel seamless and convenient.",
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
    <section id="projects" className="py-24">
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
