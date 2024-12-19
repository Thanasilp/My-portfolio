import { motion } from "framer-motion";

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="text-center py-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-6xl py-8 font-semibold text-gray-800 dark:text-white">
        Projects
      </h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Project 1 */}
        <motion.div
          className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={projectVariants}
        >
          <h3 className="font-semibold">Colmar website</h3>
          <p className="text-gray-600 dark:text-gray-300">
            A mock project inspired by Colmar Academy, featuring login and
            sign-up functionality.
          </p>
          <a
            href="https://mern-colmar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            View Project
          </a>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={projectVariants}
        >
          <h3 className="font-semibold">PEPEGA SHOPPING CART</h3>
          <p className="text-gray-600 dark:text-gray-300">
            A shopping cart system allowing users to manage items conveniently.
          </p>
          <a
            href="https://34-thanasin-js-1e46.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            View Project
          </a>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={projectVariants}
        >
          <h3 className="font-semibold">React project</h3>
          <p className="text-gray-600 dark:text-gray-300">
            A TODO list adapted into a real-time project using React and local
            storage.
          </p>
          <a
            href="https://34-thanasin-react.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            View Project
          </a>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={projectVariants}
        >
          <h3 className="font-semibold">Meal-Kit-Backend</h3>
          <p className="text-gray-600 dark:text-gray-300">
            A backend system for meal kits, using Node.js and Express with a
            modular design.
          </p>
          <a
            href="https://github.com/Quantum-Chronicle-Saurus/Meal-Kits-Admin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            View Project
          </a>
        </motion.div>

        {/* Project 5 */}
        <motion.div
          className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={projectVariants}
        >
          <h3 className="font-semibold">Meal-Kit-Admin-Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">
            An admin dashboard for managing products, built with Javascript,
            React-Router-Dom,Tailwind CSS, and React(email and password is
            required to login).
          </p>
          <a
            href="https://meal-kits-admin-vercel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            View Project
          </a>
        </motion.div>

        {/* Project 6 */}
        <motion.div
          className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={projectVariants}
        >
          <h3 className="font-semibold">Meal-Kit-Client-Site</h3>
          <p className="text-gray-600 dark:text-gray-300">
            An e-commerce website for ordering food, built with Typescript,
            React-Router-Dom,Tailwind CSS, and React.
          </p>
          <a
            href="https://meal-kit-ecommerce-project-deployed-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            View Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
