
import type { FC } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const MenuManagerFooter: FC = () => {
  const instagramUrl = "https://www.instagram.com/samerfa19"; // 🔁 change this
  const facebookUrl = "https://www.facebook.com/YOUR_USERNAME"; // 🔁 change this

  return (
    <footer className="w-full bg-gray-100 py-6 mt-10">
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
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <FaFacebook size={28} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} La Balcone Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MenuManagerFooter;
