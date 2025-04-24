
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
    <section className="py-16 bg-cricket-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Top Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-cricket-accent mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
