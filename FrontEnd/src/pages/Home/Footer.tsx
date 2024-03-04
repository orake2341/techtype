import { useEffect } from "react";
import gsap from "gsap";

const Footer = () => {
  useEffect(() => {
    gsap.from(".footer-content", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <footer className="bg-black text-white py-8 border-t-4 border-red-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="mr-4">
              <img src="facebook-icon.png" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#" className="mr-4">
              <img src="twitter-icon.png" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="#" className="mr-4">
              <img
                src="instagram-icon.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a href="#">
              <img src="linkedin-icon.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
          <div>
            <p className="mb-2">Contact Us:</p>
            <p className="mb-2">Phone: +123456789</p>
            <p className="mb-2">Email: example@example.com</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
