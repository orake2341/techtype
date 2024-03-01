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

      // Animation on hover
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
    <section className="bg-gray-900 text-white py-20 min-h-screen grid grid-cols-1 md:grid-cols-2">
  <div className="md:col-span-1 md:grid md:place-items-center">
    <div ref={galleryRef} className="flex flex-wrap justify-center items-center space-x-4">
      <img src='../src/assets/imgs/3.1.jpg' alt="Image 1" className="w-64 h-auto rounded-lg shadow-lg mb-4" />
      <img src='../src/assets/imgs/3.2.jpg' alt="Image 2" className="w-64 h-auto rounded-lg shadow-lg mb-4" />
      <img src='../src/assets/imgs/3.3.jpg' alt="Image 3" className="w-64 h-auto rounded-lg shadow-lg mb-4" />
      <img src='../src/assets/imgs/3.4.jpg' alt="Image 1" className="w-64 h-auto rounded-lg shadow-lg mb-4" />
      <img src='../src/assets/imgs/3.5.jpg' alt="Image 2" className="w-64 h-auto rounded-lg shadow-lg mb-4" />
      <img src='../src/assets/imgs/3.6.jpg' alt="Image 3" className="w-64 h-auto rounded-lg shadow-lg mb-4" />
    </div>
  </div>
  <div className="md:col-span-1 md:grid md:place-items-center">
    {/* Place your video component or video embed code here */}
    <video width="720" height="500" controls>
      <source src="../src/assets/imgs/parallax/Mini Tuplok 2022 Short.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>

  );
};

export default Gallery;
