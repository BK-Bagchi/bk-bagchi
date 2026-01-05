import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Home,
} from "lucide-react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-12 max-w-3xl mx-auto md:mx-0"
          >
            <h3 className="text-primary font-mono text-lg">Contact</h3>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 text-gray-900 dark:text-white">
              Get in touch
            </h2>
            <p className="text-gray-500 dark:text-gray-300 mt-4 leading-relaxed">
              My inbox is open. Whether it’s a project, a job opportunity, or a
              quick question — I’ll try my best to answer.
            </p>
          </motion.div>

          {/* Form + Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-10"
          >
            {/* Contact Form */}
            <div className="flex-1">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex-1 flex flex-col justify-start bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 my-4"
              >
                <Phone
                  className="text-primary text-gray-700 dark:text-gray-300"
                  size={24}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  +8801308723399
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4 my-4"
              >
                <Home
                  className="text-primary text-gray-700 dark:text-gray-300"
                  size={24}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  Khansamar Chak, Ghoramara, Rajshahi
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 my-4"
              >
                <Mail
                  className="text-primary text-gray-700 dark:text-gray-300"
                  size={24}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  bkbagchi.dipto@gmail.com
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-6 mt-6 justify-start md:justify-center"
              >
                <a
                  href="https://github.com/bk-bagchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
                >
                  <Github
                    className="text-gray-700 dark:text-gray-300"
                    size={24}
                  />
                </a>
                <a
                  href="https://facebook.com/bkbagchi.dipto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
                >
                  <Facebook
                    className="text-gray-700 dark:text-gray-300"
                    size={24}
                  />
                </a>
                <a
                  href="https://twitter.com/bkbagchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
                >
                  <Twitter
                    className="text-gray-700 dark:text-gray-300"
                    size={24}
                  />
                </a>
                <a
                  href="https://linkedin.com/in/bkbagchi-dipto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
                >
                  <Linkedin
                    className="text-gray-700 dark:text-gray-300"
                    size={24}
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-100 dark:bg-gray-800 py-4">
        <p className="text-center text-gray-700 dark:text-gray-300 m-0">
          &copy; Balay Kumar Bagchi {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default Contact;
