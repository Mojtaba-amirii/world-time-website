import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ClockProps = { city: string; timeZone: string };

export default function Clock({ city, timeZone }: ClockProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeZone]);

  return (
    <section className="flex md:flex-col justify-between items-center md:items-start p-6 bg-slate-200 rounded-md w-full h-fit shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-lg text-gray-600 font-semibold">{city}</div>
      <div className="text-3xl text-gray-900 font-semibold font-mono my-2">
        {time}
      </div>
      <Link
        to={`/clock/${encodeURIComponent(city)}`}
        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 underline text-sm"
      >
        More Info
      </Link>
    </section>
  );
}
