import { useState, useEffect, FC } from "react";
import Clock from "../components/Clock";

interface City {
  city: string;
  timeZone: string;
}

const allCities: City[] = [
  { city: "Stockholm", timeZone: "Europe/Stockholm" },
  { city: "New Delhi", timeZone: "Asia/Kolkata" },
  { city: "New York", timeZone: "America/New_York" },
  { city: "Sydney", timeZone: "Australia/Sydney" },
  { city: "Tokyo", timeZone: "Asia/Tokyo" },
  { city: "London", timeZone: "Europe/London" },
  { city: "Dubai", timeZone: "Asia/Dubai" },
  { city: "Hong Kong", timeZone: "Asia/Hong_Kong" },
  { city: "Kabul", timeZone: "Asia/Kabul" },
  { city: "Tehran", timeZone: "Asia/Tehran" },
  { city: "Cairo", timeZone: "Africa/Cairo" },
  { city: "Moscow", timeZone: "Europe/Moscow" },
];

interface HomeProps {
  searchTerm: string;
}

const Home: FC<HomeProps> = ({ searchTerm }) => {
  const [filteredCities, setFilteredCities] = useState<City[]>(allCities);

  useEffect(() => {
    const filtered = allCities.filter((city) =>
      city.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
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
