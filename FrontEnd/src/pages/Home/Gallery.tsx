import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const images = galleryRef.current.querySelectorAll("img");

      gsap.set(images, { opacity: 0, scale: 0.8 }); // Initial state

      gsap.to(images, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.5,
          from: "random", // Start staggering from a random image
        },
      });


      images.forEach((image) => {
        image.addEventListener("mouseenter", () => {
          gsap.to(image, { scale: 1.1, duration: 0.3 });
        });
        image.addEventListener("mouseleave", () => {
          gsap.to(image, { scale: 1, duration: 0.3 });
        });
      });
    }
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 min-h-screen border-t-4 border-red-500">
      <div className="container mx-auto flex flex-wrap justify-center items-center space-x-4">
        <div
          ref={galleryRef}
          className="flex flex-wrap justify-center items-center space-x-4"
        >
          <img
            src="../src/assets/imgs/3.1.jpg"
            alt="Image 1"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
          <img
            src="../src/assets/imgs/3.2.jpg"
            alt="Image 2"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
          <img
            src="../src/assets/imgs/3.3.jpg"
            alt="Image 3"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
          <img
            src="../src/assets/imgs/3.4.jpg"
            alt="Image 4"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
          <img
            src="../src/assets/imgs/3.5.jpg"
            alt="Image 5"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
          <img
            src="../src/assets/imgs/3.6.jpg"
            alt="Image 6"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
          <img
            src="../src/assets/imgs/colorfulkeyboard.jpg"
            alt="Image 7"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
          <img
            src="../src/assets/imgs/3.8.jpg"
            alt="Image 8"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
          <img
            src="../src/assets/imgs/BG.jpg"
            alt="Image 9"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
          <img
            src="../src/assets/imgs/keyboard2.jpg"
            alt="Image 10"
            className="w-64 h-auto rounded-lg shadow-lg mb-4"
          />
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center mt-10">
        <video
          width="720"
          height="500"
          controls
          className="rounded-lg shadow-lg"
        >
          <source
            src="../src/assets/imgs/parallax/Mini Tuplok 2022 Short.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="typography text-center my-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Mini Mini Tuplok 2022
        </h2>
        <p className="mt-2 text-lg md:text-xl lg:text-2xl font-medium">
          Big thanks to: Blnc. Keyboards, Sculpkeys, Coffee at Yellow Hauz.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
