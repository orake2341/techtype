import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(
      [
        titleRef.current,
        subtitleRef.current,
        textRef.current,
        buttonRef.current,
      ],
      { opacity: -0.5, y: -10 }
    );

    tl.to(
      [
        titleRef.current,
        subtitleRef.current,
        textRef.current,
        buttonRef.current,
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

  return (
    <section
      className="bg-white text-black py-20 min-h-screen"
      style={{
        backgroundImage: 'url("../src/assets/imgs/4.2.png")',
      }}
    >
      <div className="container mx-auto py-20">
        <div className="inline-block p-3 rounded-md text-left">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
          >
            Key to Custom Mastery
          </h2>
        </div>
        <div
          ref={subtitleRef}
          className="text-2xl md:text-4xl mb-8"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
        >
          <img
            src="../src/assets/imgs/parallax/Sticker 3.png"
            alt="TechType"
            className="w-50 h-40 my-auto"
          />
        </div>
        <p
          ref={textRef}
          className="text-lg md:text-xl leading-relaxed mb-12"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            maxWidth: "28rem",
          }}
        >
          Are you looking to elevate your computing experience to a whole new
          level? Look no further! TechType is your one-stop destination for
          premium keyboard modding and PC building services. Whether you're a
          hardcore gamer, a creative professional, or simply someone who demands
          the best from their technology, we've got you covered.
        </p>

        <a
          ref={buttonRef}
          href="#contact"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
        >
          {" "}
          Create Job Order
        </a>
      </div>
    </section>
  );
};

export default Hero;
