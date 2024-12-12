import { FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "./assets/D (3).png";

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-center">
      {/* Devolt logo in top-left corner */}
      <img
        src={logo}
        alt="Devolt Logo"
        className="absolute top-4 left-10 w-24 h-auto" // Updated size for better appearance
      />

      {/* Main content */}
      <div className="mb-12">
        <h1 className="text-8xl font-bold  text-purple-600 mb-8 uppercase">
          Coming <span className="text-white">Soon.....</span>
        </h1>
      </div>

      {/* Social icons */}
      <div className="flex space-x-6 mt-4">
        <a href="#" className="text-white hover:text-gray-300 text-2xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-white hover:text-gray-300 text-2xl">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
