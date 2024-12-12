import { FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "./assets/D (3).png";
import { ReactTyped } from "react-typed";
import CountdownTimer from "./Counter";

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-center">
      {/* Devolt logo in top-left corner */}
      <img
        src={logo}
        alt="Devolt Logo"
        className="absolute top-8 left-8 w-44 " // Updated size for better appearance
      />

      {/* Main content */}
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-futuristic">
          <ReactTyped
            strings={[
              "Just around the",
              "corner...",
            ]}

            typeSpeed={70}
            backSpeed={30}
            loop
          />
        </h1>
      </div>
      <CountdownTimer />
      {/* Social icons */}
      <div className="absolute bottom-4 flex space-x-6">
        <a
          href="#"
          className="text-white hover:text-gray-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;