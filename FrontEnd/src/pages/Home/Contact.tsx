import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.to(contactRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });
  }, []);

  return (
    <section ref={contactRef} className="bg-gray-800 text-white py-10 mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Have any questions or concerns? Get in touch with us.</p>
        <form className="mx-auto max-w-md">
          <input className="w-full mb-4 p-2" type="text" placeholder="Name" />
          <input className="w-full mb-4 p-2" type="email" placeholder="Email" />
          <textarea className="w-full mb-4 p-2" placeholder="Message"></textarea>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;