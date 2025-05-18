import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-6">
          We'd love to hear from you! Whether you have a question about
          features, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Get in Touch
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-2 text-indigo-600" />
                <span className="text-gray-600">
                  support@worldtimeclock.example.com
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 mr-2 text-indigo-600" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="h-5 w-5 mr-2 text-indigo-600" />
                <span className="text-gray-600">
                  123 Time Zone Street, Clock City, TC 12345
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-sm hover:bg-indigo-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Connect With Us
          </h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
