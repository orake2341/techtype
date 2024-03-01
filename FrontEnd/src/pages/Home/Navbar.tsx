import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isBarActive, setIsBarActive] = useState(false);

  const handleToggle = () => {
    setIsBarActive(!isBarActive);
  };

  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-100 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-6 font-montserrat">
        <Link to="/" className="text-white text-lg font-bold flex items-center">
          <span className="text-red-500 text-xl">Tech</span>{" "}
          <span className="text-white text-xl">Type™</span>
        </Link>
        <ul
          className={`flex space-x-4 ${
            isBarActive ? "block" : "hidden"
          } md:flex md:space-x-8`}
        >
          <li>
            <Link
              to="/about"
              className="text-white hover:text-red-500 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          {isBarActive ? (
            <FaTimes
              className="text-white text-2xl cursor-pointer"
              onClick={handleToggle}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={handleToggle}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
