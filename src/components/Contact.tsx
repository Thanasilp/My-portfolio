import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa"; // import GitHub icon

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-gray-300 text-gray-700 dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <div className="flex gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/thanasin-pinchai/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>

        {/* Email */}
        <a
          href="mailto:thanasin.pin@gmail.com"
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-300"
        >
          <FaEnvelope size={24} />
          Email
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Thanasilp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-300"
        >
          <FaGithub size={24} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
