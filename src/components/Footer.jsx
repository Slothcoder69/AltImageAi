import { FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-80 text-white py-6 px-4 mt-12 flex flex-col sm:flex-row justify-between items-center text-sm relative">
      <p className="mb-4 sm:mb-0">
        &copy; {new Date().getFullYear()} AutoAlt — Built with 💡 for accessibility.
      </p>

      <div className="flex space-x-6 items-center">
        {/* GitHub Link */}
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <FaGithub size={24} className="inline-block" />
        </a>

        {/* Instagram Link */}
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition duration-300"
        >
          <FaInstagram size={24} className="inline-block" />
        </a>

        {/* Hidden Thinker Link (Easter Egg Style) */}
        <a
          href="https://your-thinker-link.com" // replace this
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2 text-transparent hover:text-white text-xs border border-transparent hover:border-white px-2 py-1 rounded transition duration-300 cursor-pointer"
        >
          Thinker
        </a>
      </div>
    </footer>
  );
}
