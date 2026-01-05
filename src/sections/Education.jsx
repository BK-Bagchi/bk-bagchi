import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    period: "January 2017 - December 2020",
    institution: "Varendra University, Rajshahi",
    degree: "B.Sc. in Computer Science and Engineering",
    cgpa: "3.85/4",
  },
  {
    id: 2,
    period: "July 2022 - December 2023",
    institution: "University of Rajshahi, Rajshahi",
    degree: "M.Sc. in Computer Science and Engineering",
    cgpa: "3.71/4",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-primary text-xl font-mono">Education</h3>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            Academic Background
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col"
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {edu.degree}
              </h4>
              <p className="text-gray-500 dark:text-gray-300 mb-1">
                {edu.institution}
              </p>
              <p className="text-gray-400 dark:text-gray-500 mb-1">
                {edu.period}
              </p>
              <p className="text-gray-400 dark:text-gray-500">
                CGPA: {edu.cgpa}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
