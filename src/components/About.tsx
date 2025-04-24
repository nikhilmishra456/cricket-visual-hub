
const About = () => {
  return (
    <section className="py-16 bg-cricket-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="text-lg text-white/90">
              We are passionate cricket enthusiasts dedicated to bringing you the most comprehensive
              and engaging cricket experience online. Our platform combines live updates,
              in-depth analysis, and rich statistics to keep you connected with the game you love.
            </p>
            <p className="text-lg text-white/90">
              With coverage of international matches, domestic leagues, and exclusive content,
              we're your one-stop destination for everything cricket.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Cricket Stadium"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
