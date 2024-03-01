import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AboutUs = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.to(aboutRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });
  }, []);

  return (
    <section ref={aboutRef} className="bg-gray-800 text-white py-10 mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="mb-4">We are TechType, your one-stop destination for premium keyboard modding and PC building services. We are passionate about technology and dedicated to delivering the best services to our customers.</p>
        <img src="team.jpg" alt="Our team" className="mx-auto mb-4"/>
        <p>Meet our dedicated team of experts who work tirelessly to provide you with the best technology services.</p>
      </div>
    </section>
  );
};

export default AboutUs;