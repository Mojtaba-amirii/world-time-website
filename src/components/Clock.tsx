import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClockIcon, Info, Sun, Moon } from "lucide-react";

type ClockProps = { city: string; timeZone: string };

const Clock: FC<ClockProps> = ({ city, timeZone }) => {
  const [time, setTime] = useState<string>("");
  const [isDaytime, setIsDaytime] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(date);
      setTime(timeString);

      const hourOptions: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "numeric",
        hour12: false,
      };
      const hour = parseInt(
        new Intl.DateTimeFormat("en-US", hourOptions).format(date)
      );
      setIsDaytime(hour >= 6 && hour < 18);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeZone]);

  return (
    <section className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
      <div className="absolute right-0 top-0 p-4">
        {isDaytime ? (
          <Sun className="h-6 w-6 text-amber-400" />
        ) : (
          <Moon className="h-6 w-6 text-blue-400" />
        )}
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {city}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{timeZone}</p>
        </div>

        <div className="flex items-center space-x-2">
          <ClockIcon className="h-5 w-5 text-gray-400" />
          <span className="font-mono text-3xl font-bold tracking-wider text-gray-900 dark:text-gray-100">
            {time}
          </span>
        </div>

        <Link
          to={`/clock/${encodeURIComponent(city)}`}
          className="inline-flex items-center space-x-2 text-sm text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          <span>More Details</span>
          <Info className="h-4 w-4" />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
    </section>
  );
};

export default Clock;
