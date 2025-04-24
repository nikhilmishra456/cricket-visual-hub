
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const RecentMatches = () => {
  const matches = [
    {
      team1: "India",
      team2: "Australia",
      score1: "285/7",
      score2: "280/8",
      result: "India won by 3 wickets",
    },
    {
      team1: "England",
      team2: "South Africa",
      score1: "298/5",
      score2: "265/9",
      result: "England won by 33 runs",
    },
    {
      team1: "New Zealand",
      team2: "Pakistan",
      score1: "270/8",
      score2: "271/6",
      result: "Pakistan won by 4 wickets",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-center mb-12 text-cricket-primary">Recent Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matches.map((match, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-none shadow-lg hover:scale-105 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-cricket-primary/5 to-cricket-secondary/20">
                <CardTitle className="flex items-center gap-2 font-display">
                  <Trophy className="h-5 w-5 text-cricket-accent" />
                  {match.team1} vs {match.team2}
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <div className="space-y-3">
                  <p className="text-sm font-body">{match.team1}: {match.score1}</p>
                  <p className="text-sm font-body">{match.team2}: {match.score2}</p>
                  <p className="text-sm font-medium text-cricket-primary">{match.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentMatches;
