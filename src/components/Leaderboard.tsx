
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leaderboard = () => {
  const teams = [
    { name: "India", points: 120, rank: 1 },
    { name: "Australia", points: 115, rank: 2 },
    { name: "England", points: 110, rank: 3 },
    { name: "New Zealand", points: 108, rank: 4 },
  ];

  const players = [
    { name: "Virat Kohli", country: "India", rating: 890 },
    { name: "Steve Smith", country: "Australia", rating: 885 },
    { name: "Kane Williamson", country: "New Zealand", rating: 879 },
    { name: "Joe Root", country: "England", rating: 870 },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Leaderboard</h2>
        <Tabs defaultValue="teams" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="players">Players</TabsTrigger>
          </TabsList>
          <TabsContent value="teams">
            <Card>
              <CardContent className="mt-4">
                {teams.map((team, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border-b last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-cricket-accent">
                        #{team.rank}
                      </span>
                      <span>{team.name}</span>
                    </div>
                    <span className="font-medium">{team.points} pts</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="players">
            <Card>
              <CardContent className="mt-4">
                {players.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border-b last:border-0"
                  >
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-sm text-gray-500">{player.country}</p>
                    </div>
                    <span className="font-medium">{player.rating}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Leaderboard;
