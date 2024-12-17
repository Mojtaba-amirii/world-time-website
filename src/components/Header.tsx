import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg xl:rounded-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">
          <Link
            to="/"
            className="hover:text-indigo-200 transition-colors duration-300"
          >
            World Time Clock
          </Link>
        </h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
