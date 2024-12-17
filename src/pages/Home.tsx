import Clock from "../components/Clock";

const Home = () => {
  return (
    <main className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-16 gap-2 h-screen w-[95%]">
      <Clock city="Stockholm" timeZone="Europe/Stockholm" />
      <Clock city="Paris" timeZone="Europe/Paris" />
      <Clock city="New York" timeZone="America/New_York" />
      <Clock city="Sydney" timeZone="Australia/Sydney" />
      <Clock city="Tokyo" timeZone="Asia/Tokyo" />
      <Clock city="London" timeZone="Europe/London" />
      <Clock city="Dubai" timeZone="Asia/Dubai" />
      <Clock city="Hong Kong" timeZone="Asia/Hong_Kong" />
    </main>
  );
};

export default Home;
