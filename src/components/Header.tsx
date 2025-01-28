import { Link } from "react-router-dom";
import { FC } from "react";

import Navbar from "./Navbar";
import { SearchCities } from "./SearchCities ";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

const Header: FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="w-full sticky top-0 bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg xl:rounded-md z-10 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between">
        <h1 className="text-white text-2xl font-bold">
          <Link
            to="/"
            className="hover:text-indigo-200 transition-colors duration-300"
          >
            World Time Clock
          </Link>
        </h1>
        <SearchCities onSearch={onSearch} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
