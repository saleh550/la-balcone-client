
import type { FC } from "react";
import {  FaInstagram } from "react-icons/fa";

const MenuFooter: FC = () => {
  const instagramUrl = "https://www.instagram.com/balcon_coffee?igsh=MW5lOGtzNGsyZXg0ZQ=="; // 🔁 change this
  // const facebookUrl = "https://www.facebook.com/YOUR_USERNAME"; // 🔁 change this

  return (
    <footer className="w-full bg-white/70 dark:bg-gray-950/90 backdrop-blur-sm py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 transition-transform transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
          {/* <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <FaFacebook size={28} />
          </a> */}
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} La Balcone Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MenuFooter;
