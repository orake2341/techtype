import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Aboutus.css";
import { gsap } from "gsap";

const Aboutus = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitleRef2 = useRef(null);
  const subtitleRef3 = useRef(null);
  const [isBarActive, setIsBarActive] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(
      [
        titleRef.current,
        subtitleRef.current,
        subtitleRef2.current,
        subtitleRef3.current,
      ],
      { opacity: -0.5, y: -10 }
    );

    tl.to(
      [
        titleRef.current,
        subtitleRef.current,
        subtitleRef2.current,
        subtitleRef3.current,
      ],
      {
        opacity: 1,
        y: 10,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.5,
        stagger: 0.2,
      }
    );
  }, []);

  const handleToggle = () => {
    setIsBarActive(!isBarActive);
  };

  return (
    <div className="aurora-background">
      <header className="fixed top-0 w-full bg-black bg-opacity-100 z-50">
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
        className="container mx-auto px-4 py-20 min-h-screen flex items-center flex-col justify-center"
        style={{ maxWidth: "75%" }}
      >
        <img
          ref={titleRef}
          src="../src/assets/imgs/parallax/Sticker 3.png"
          alt="TechType"
          className="w-50 h-40 my-auto d-block mx-auto"
        />

        <div className="text-center" ref={subtitleRef}>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            OUR VALUES
          </h2>
          <p className="text-white mt-2 text-lg md:text-xl lg:text-2xl font-medium">
            Our team consists of seasoned experts who have honed their skills in
            keyboard modding and PC building over years of hands-on experience.
            We stay at the forefront of technology trends to provide you with
            the latest and greatest in the world of custom computing. Your
            digital workspace should be an extension of your personality. We
            work closely with our clients to understand their preferences and
            requirements, ensuring that every project is a unique reflection of
            their individuality.
          </p>
        </div>

        <div className="text-center mt-12" ref={subtitleRef2}>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ABOUT US
          </h2>
          <p className="text-white mt-2 text-lg md:text-xl lg:text-2xl font-medium">
            Welcome to TechType, where we transform your digital experience
            through the art of keyboard modding and PC building. We are a
            passionate team of tech enthusiasts who share a common love for
            crafting personalized computing solutions that go beyond the
            ordinary. We take pride in our meticulous attention to detail.
            Whether it's a custom keycap set, a precision soldering job, or a
            perfectly cable-managed PC build, we never compromise on quality.
          </p>
        </div>

        <div className="text-center mt-12" ref={subtitleRef3}>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            OUR MISSION
          </h2>
          <p className="text-white mt-2 text-lg md:text-xl lg:text-2xl font-medium">
            At TechType, Our mission is to empower individuals to express their
            unique personalities and unleash their creative potential through
            custom keyboard modifications and tailor-made PC builds. We believe
            that your computing devices should not only meet your functional
            needs but also resonate with your individual style and preferences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
