// src/components/Projects.jsx
const Projects = () => (
  <section className="text-center py-8 bg-gray-100 dark:bg-gray-900">
    <h2 className="text-6xl py-8 font-semibold text-gray-800 dark:text-white">
      Projects
    </h2>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Project 1 */}
      <div className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white">
        <h3 className="font-semibold">Project 1</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Description of the project.
        </p>
      </div>

      {/* Project 2 */}
      <div className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white">
        <h3 className="font-semibold">Project 2</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Description of the project.
        </p>
      </div>

      {/* Vercel TODO List Project */}
      <div className="bg-white p-4 shadow rounded dark:bg-gray-800 dark:text-white">
        <h3 className="font-semibold">TODO List Project</h3>
        <p className="text-gray-600 dark:text-gray-300">
          A simple TODO list application built with React. You can view, add,
          edit, and delete tasks.
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
