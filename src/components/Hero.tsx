
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-gradient-to-b from-cricket-primary to-cricket-secondary/30 overflow-hidden">
      <div className="container h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Ultimate Cricket Destination
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Live scores, statistics, and in-depth analysis of your favorite cricket matches
          </p>
          <Button className="bg-cricket-accent hover:bg-cricket-accent/90 text-white">
            Explore Matches
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
