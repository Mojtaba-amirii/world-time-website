import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-6 text-white">
        <li>
          <Link
            to="/about"
            className="hover:text-indigo-200 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-indigo-200 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
