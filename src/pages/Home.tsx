import { FC } from "react";
import { useOutletContext } from "react-router-dom";

import Clock from "../components/Clock";
import { allCities } from "../constants/constants";

interface HomeContext {
  searchTerm: string;
}

const Home: FC = () => {
  const { searchTerm } = useOutletContext<HomeContext>();

  const filteredCities = allCities.filter((city) =>
    city.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-16 gap-6 h-auto w-[95%] mx-auto">
      {filteredCities.map((city) => (
        <Clock key={city.city} city={city.city} timeZone={city.timeZone} />
      ))}
    </section>
  );
};

export default Home;
