import { LuMapPin } from "react-icons/lu";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";

import { clockData } from "../constants/constants";

const SingleClock = () => {
  const { city } = useParams<{ city: string }>();
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const clockInfo = city ? clockData[decodeURIComponent(city)] : null;

  useEffect(() => {
    if (clockInfo) {
      const timer = setInterval(() => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: clockInfo.timeZone,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const formatter = new Intl.DateTimeFormat("en-US", options);
        const [dateStr, timeStr] = formatter.format(now).split(" at ");
        setDate(dateStr);
        setTime(timeStr);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [clockInfo]);

  if (!clockInfo) {
    return <div>City not found</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 mb-4"
      >
        <BsArrowLeftShort className="h-7 w-7" />
        <span>Back to World Clock</span>
      </Link>
      <section className="bg-white rounded-lg shadow-lg p-6 mt-4 dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
          {clockInfo.city}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-5xl font-mono font-semibold text-gray-900 mb-2 dark:text-gray-100">
              {time}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300">{date}</p>
            <p className="text-lg text-gray-700 mt-4 dark:text-gray-300">
              Time Zone:{" "}
              <span className="font-semibold">{clockInfo.timeZone}</span>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Country:{" "}
              <span className="font-semibold">{clockInfo.country}</span>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white">
              Location
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Latitude:{" "}
              <span className="font-semibold">{clockInfo.latitude}°</span>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Longitude:{" "}
              <span className="font-semibold">{clockInfo.longitude}°</span>
            </p>
            <div className="mt-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${clockInfo.latitude},${clockInfo.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                <LuMapPin className="h-4 w-4" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleClock;
