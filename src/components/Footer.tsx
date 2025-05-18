import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-indigo-600 to-purple-600 text-white mt-auto xl:rounded-md dark:bg-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">World Time Clock</h3>
            <p className="text-sm">
              Stay synchronized with time zones around the globe. Accurate,
              reliable, and easy to use.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-indigo-200 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-indigo-200 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-indigo-200 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <p className="text-sm mb-2">
              Follow us on social media for updates and time zone tips!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-indigo-200 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-indigo-200 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-indigo-300 text-center text-sm">
          <p>&copy; {currentYear} World Time Clock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
