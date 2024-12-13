import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true); // Set default value to true for dark mode

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="fixed top-0 w-full bg-gray-300 text-gray-700 shadow dark:bg-gray-900 dark:text-white">
      <ul className="flex justify-center gap-8 py-4">
        {["about", "skills", "projects", "contact"].map((section) => (
          <li key={section}>
            <a href={`#${section}`} className="text-lg hover:text-indigo-400">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-700 text-white px-3 py-1 rounded ml-4"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
