import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set([titleRef.current, subtitleRef.current, textRef.current, buttonRef.current], { opacity: -0.5, y: -10 });

    tl.to([titleRef.current, subtitleRef.current, textRef.current, buttonRef.current], {
      opacity: 1,
      y: 10,
      duration: 0.5,
      ease: "power1.out",
      delay: 0.5
    });

  }, []);

  return (
    <section
      className="bg-white text-black py-20 min-h-screen"
      style={{
        backgroundImage: 'url("../src/assets/imgs/parallax/colorfulkeyboard.jpg")',
      }}
    >
      <div className="container mx-auto text-center py-20">
        <div className="bg-white inline-block p-3 rounded-md">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
            Key to Custom Mastery
          </h2>
        </div>
        <div ref={subtitleRef} className="text-2xl md:text-4xl mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
          <img src="../src/assets/imgs/parallax/Sticker 3.png" alt="TechType" className="w-50 h-40 mx-auto my-auto" />
        </div>
        <p ref={textRef} className="text-lg md:text-xl leading-relaxed mb-12 mx-auto max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
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
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
        > Create Job Order
        </a>
      </div>
    </section>
  );
};

export default Hero;
