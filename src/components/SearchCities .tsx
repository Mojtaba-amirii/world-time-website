import { Search } from "lucide-react";

interface SearchCitiesProps {
  onSearch: (searchTerm: string) => void;
}

export function SearchCities({ onSearch }: SearchCitiesProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        name="search"
        placeholder="Search cities..."
        className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
