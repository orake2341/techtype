import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Aboutus = () => {
  const aboutRef = useRef(null);

  useEffect(() => {

    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={aboutRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h2 className="text-xl font-semibold border-b-2 pb-2">OUR VALUES:</h2>
        <p className="text-sm mt-2 border-b-2 pb-2">
          Our team consists of seasoned experts who have honed their skills in
          keyboard modding and PC building over years of hands-on experience. We
          stay at the forefront of technology trends to provide you with the
          latest and greatest in the world of custom computing. Your digital
          workspace should be an extension of your personality. We work closely
          with our clients to understand their preferences and requirements,
          ensuring that every project is a unique reflection of their
          individuality.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold border-b-2 pb-2">ABOUT US:</h2>
        <p className="text-sm mt-2 border-b-2 pb-2">
          Welcome to TechType, where we transform your digital experience
          through the art of keyboard modding and PC building. We are a
          passionate team of tech enthusiasts who share a common love for
          crafting personalized computing solutions that go beyond the ordinary.
          We take pride in our meticulous attention to detail. Whether it's a
          custom keycap set, a precision soldering job, or a perfectly
          cable-managed PC build, we never compromise on quality.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold border-b-2 pb-2">OUR MISSION:</h2>
        <p className="text-sm mt-2 border-b-2 pb-2">
          At TechType, Our mission is to empower individuals to express their
          unique personalities and unleash their creative potential through
          custom keyboard modifications and tailor-made PC builds. We believe
          that your computing devices should not only meet your functional needs
          but also resonate with your individual style and preferences.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
