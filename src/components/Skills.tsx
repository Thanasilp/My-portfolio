import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa"; // Import relevant icons
import { motion } from "framer-motion"; // Import framer-motion for animations

const Skills = () => (
  <section className="text-center py-8 bg-gray-300 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
    <h2 className="text-6xl py-4 font-semibold text-gray-800 dark:text-white">
      Skills
    </h2>
    <div className="mt-4 flex flex-wrap justify-center gap-8">
      {/* JavaScript */}
      <motion.div
        className="flex items-center justify-center gap-2 bg-indigo-200 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-300 rounded-lg px-6 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaJs size={30} />
        <span className="text-xl font-semibold">JavaScript</span>
      </motion.div>

      {/* React */}
      <motion.div
        className="flex items-center justify-center gap-2 bg-blue-200 text-blue-700 dark:bg-blue-800 dark:text-blue-300 rounded-lg px-6 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaReact size={30} />
        <span className="text-xl font-semibold">React</span>
      </motion.div>

      {/* CSS */}
      <motion.div
        className="flex items-center justify-center gap-2 bg-green-200 text-green-700 dark:bg-green-800 dark:text-green-300 rounded-lg px-6 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaCss3Alt size={30} />
        <span className="text-xl font-semibold">CSS</span>
      </motion.div>

      {/* HTML */}
      <motion.div
        className="flex items-center justify-center gap-2 bg-orange-200 text-orange-700 dark:bg-orange-800 dark:text-orange-300 rounded-lg px-6 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaHtml5 size={30} />
        <span className="text-xl font-semibold">HTML</span>
      </motion.div>

      {/* Node.js */}
      <motion.div
        className="flex items-center justify-center gap-2 bg-green-300 text-green-800 dark:bg-green-700 dark:text-green-300 rounded-lg px-6 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaNodeJs size={30} />
        <span className="text-xl font-semibold">Node.js</span>
      </motion.div>

      {/* Express */}
      <motion.div
        className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-400 rounded-lg px-6 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithub size={30} /> {/* Use GitHub icon for Express */}
        <span className="text-xl font-semibold">Express</span>
      </motion.div>

      {/* MongoDB */}
      <motion.div
        className="flex items-center justify-center gap-2 bg-teal-200 text-teal-700 dark:bg-teal-800 dark:text-teal-300 rounded-lg px-6 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaDatabase size={30} />
        <span className="text-xl font-semibold">MongoDB</span>
      </motion.div>

      {/* Git/GitHub */}
      <motion.div
        className="flex items-center justify-center gap-2 bg-purple-200 text-purple-700 dark:bg-purple-800 dark:text-purple-300 rounded-lg px-6 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGitAlt size={30} />
        <span className="text-xl font-semibold">Git/GitHub</span>
      </motion.div>
    </div>
  </section>
);

export default Skills;
