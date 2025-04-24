
import Hero from "@/components/Hero";
import RecentMatches from "@/components/RecentMatches";
import Leaderboard from "@/components/Leaderboard";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RecentMatches />
      <Leaderboard />
      <Features />
      <About />
      <FAQ />
    </div>
  );
};

export default Index;
