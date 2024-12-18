import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        About World Time Clock
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            World Time Clock is dedicated to helping people stay connected
            across time zones. Our goal is to provide an easy-to-use, accurate,
            and reliable tool for checking the current time in various cities
            around the globe.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Real-time clock updates for multiple cities</li>
            <li>
              Detailed information for each city, including timezone and
              geographical location
            </li>
            <li>User-friendly interface with a clean, modern design</li>
            <li>
              Responsive layout for seamless use on desktop and mobile devices
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our app uses the latest web technologies to fetch and display
            accurate time information for cities worldwide. We utilize reliable
            time APIs and geolocation data to ensure that you always have the
            most up-to-date information at your fingertips.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Get Started
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ready to explore world times? Head back to our home page and start
            browsing different city times. If you have any questions or
            feedback, don't hesitate to get in touch with us.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
            >
              View World Clock
            </Link>
            <Link
              to="/contact"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
