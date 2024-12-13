// src/components/Projects.jsx
const Projects = () => (
  <section className="text-center py-8 bg-gray-100 dark:bg-gray-900">
    <h2 className="text-6xl py-8 font-semibold text-gray-800 dark:text-white">
      Projects
    </h2>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Project 1 */}
      <div className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white">
        <h3 className="font-semibold">Colmar website</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Mocked project from Colmar website. Added login and sign up page
        </p>
        <a
          href="https://mern-colmar.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
        >
          View Project
        </a>
      </div>

      {/* Project 2 */}
      <div className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white">
        <h3 className="font-semibold">PEPEGA SHOPPING CART</h3>
        <p className="text-gray-600 dark:text-gray-300">
          A project adapted from a TODO list, transformed into a shopping cart
          system where users can conveniently add, edit, and delete products in
          the cart.
        </p>
        <a
          href="https://34-thanasin-js-1e46.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
        >
          View Project
        </a>
      </div>

      {/* Vercel TODO List Project */}
      <div className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white">
        <h3 className="font-semibold">React project</h3>
        <p className="text-gray-600 dark:text-gray-300">
          A project adapted from a TODO list, developed and run using React,
          with local storage utilized for data management. Real-time updates
          made by the admin are instantly visible to users.
        </p>
        <a
          href="https://34-thanasin-react.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
