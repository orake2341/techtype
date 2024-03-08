import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

const Contact = () => {
  const contactInfoRef = useRef(null);
  const titleRef = useRef(null);
  const [isBarActive, setIsBarActive] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    feedback: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(titleRef.current, { opacity: -0.5, y: -10 })
      .set(contactInfoRef.current, { opacity: 0, y: -10 }) // Initial position for contact info
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      })
      .to(
        contactInfoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.3"
      ); // Slightly delay the contact info animation
  }, []);

  const handleToggle = () => {
    setIsBarActive(!isBarActive);
  };

  return (
    <div className="aurora-background">
      <header className="fixed top-0 w-full bg-black bg-opacity-90 z-50">
        <nav className="container mx-auto flex items-center justify-between px-4 py-6 font-montserrat">
          <Link
            to="/"
            className="text-white text-lg font-bold flex items-center"
          >
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

      <section
        ref={titleRef}
        className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-20 min-h-screen flex flex-col md:flex-row items-center justify-center"
      >
        <div
          className="w-full md:max-w-md p-6 md:p-10 shadow-lg mb-8 md:mb-0"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-white text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-white text-sm font-bold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="feedback"
                className="block text-white text-sm font-bold mb-2"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Feedback
              </button>
            </div>
          </form>
        </div>

        <div
          className="w-full md:max-w-md p-6 md:p-10 shadow-lg mb-8 md:mb-0 mx-10 "
          ref={contactInfoRef}
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Contact Information
          </h2>
          <p className="text-white">Email: techtype@gmail.com</p>
          <p className="text-white">Phone: 63+ 920 119 2745</p>
          <p className="text-white">Address: Green Meadows Subdivision, Sto. Niño, Davao City</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
