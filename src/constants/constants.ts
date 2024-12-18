type ClockInfo = {
  city: string;
  timeZone: string;
  country: string;
  latitude: number;
  longitude: number;
};

export const clockData: Record<string, ClockInfo> = {
  "New York": {
    city: "New York",
    timeZone: "America/New_York",
    country: "United States",
    latitude: 40.7128,
    longitude: -74.006,
  },
  Stockholm: {
    city: "Stockholm",
    timeZone: "Europe/Stockholm",
    country: "Sweden",
    latitude: 59.3293,
    longitude: 18.0686,
  },
  "New Delhi": {
    city: "New Delhi",
    timeZone: "Asia/Kolkata",
    country: "India",
    latitude: 28.6139,
    longitude: 77.209,
  },
  London: {
    city: "London",
    timeZone: "Europe/London",
    country: "United Kingdom",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  Tokyo: {
    city: "Tokyo",
    timeZone: "Asia/Tokyo",
    country: "Japan",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  "Hong Kong": {
    city: "Hong Kong",
    timeZone: "Asia/Hong_Kong",
    country: "Hong Kong",
    latitude: 22.3193,
    longitude: 114.1694,
  },
  Sydney: {
    city: "Sydney",
    timeZone: "Australia/Sydney",
    country: "Australia",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  Dubai: {
    city: "Dubai",
    timeZone: "Asia/Dubai",
    country: "United Arab Emirates",
    latitude: 25.276987,
    longitude: 55.296249,
  },
  Hong_Kong: {
    city: "Hong Kong",
    timeZone: "Asia/Hong_Kong",
    country: "Hong Kong",
    latitude: 22.3193,
    longitude: 114.1694,
  },
  Kabul: {
    city: "Kabul",
    timeZone: "Asia/Kabul",
    country: "Afghanistan",
    latitude: 34.5553,
    longitude: 69.2075,
  },
  Tehran: {
    city: "Tehran",
    timeZone: "Asia/Tehran",
    country: "Iran",
    latitude: 35.6895,
    longitude: 51.594,
  },
  Cairo: {
    city: "Cairo",
    timeZone: "Africa/Cairo",
    country: "Egypt",
    latitude: 30.033,
    longitude: 31.2336,
  },
  Moscow: {
    city: "Moscow",
    timeZone: "Europe/Moscow",
    country: "Russia",
    latitude: 55.7558,
    longitude: 37.6176,
  },
};
