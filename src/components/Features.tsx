
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Calendar, Star, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Live Match Updates",
      description: "Real-time scores and commentary for all cricket matches worldwide",
    },
    {
      icon: BarChart,
      title: "Detailed Statistics",
      description: "Comprehensive player and team statistics with interactive visualizations",
    },
    {
      icon: Trophy,
      title: "Tournament Coverage",
      description: "Complete coverage of international and domestic cricket tournaments",
    },
    {
      icon: Star,
      title: "Expert Analysis",
      description: "In-depth analysis from cricket experts and former players",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 to-white">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-center mb-12 text-cricket-primary">Top Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-gradient-to-br from-white to-cricket-secondary/20 hover:scale-105">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-cricket-accent mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-display">{feature.title}</CardTitle>
                <CardDescription className="font-body">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
