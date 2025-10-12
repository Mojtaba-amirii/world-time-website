import { useMemo, FC } from "react";

import Clock from "../components/Clock";
import { allCities } from "../constants/constants";

interface HomeProps {
  searchTerm: string;
}

const Home: FC<HomeProps> = ({ searchTerm }) => {
  const filteredCities = useMemo(() => {
    return allCities.filter((city) =>
      city.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-16 gap-6 h-auto w-[95%]">
      {filteredCities.map((city) => (
        <Clock key={city.city} city={city.city} timeZone={city.timeZone} />
      ))}
    </main>
  );
};

export default Home;
