import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Flame,
  BookOpen,
  Trophy,
  Star,
  Zap,
  Target,
  Crown,
  Medal,
  Rocket,

} from "lucide-react";

interface ProgressDashboardProps {
  childName: string;
}

const badges = [
  { id: 1, name: "First Book", icon: BookOpen, earned: true, color: "text-coral" },
  { id: 2, name: "Streak Master", icon: Flame, earned: true, color: "text-sunshine" },
  { id: 3, name: "Speed Reader", icon: Zap, earned: true, color: "text-teal" },
  { id: 4, name: "Champion", icon: Trophy, earned: false, color: "text-lavender" },
  { id: 5, name: "Book Worm", icon: Star, earned: false, color: "text-mint" },
  { id: 6, name: "Explorer", icon: Rocket, earned: false, color: "text-coral" },
];

const ProgressDashboard = ({ childName }: ProgressDashboardProps) => {
  const [booksRead, setBooksRead] = useState(0);
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const timer1 = setTimeout(() => setBooksRead(7), 300);
    const timer2 = setTimeout(() => setStreak(12), 500);
    const timer3 = setTimeout(() => setXp(1250), 700);
    const timer4 = setTimeout(() => setLevel(4), 900);
    const timer5 = setTimeout(() => setProgress(65), 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-[#FAF8F5]">
      <div className="container max-w-5xl mx-auto">

        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#73D4C6] l/10 mb-4">
            <Crown className="w-4 sm:w-5 h-4 sm:h-5 text-teal" />
            <span className="font-bold text-teal text-sm sm:text-base">{childName}'s Reading Dashboard</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nunito font-extrabold text-foreground mb-3 md:mb-4 px-2">
            Keep Up the Amazing Work!
          </h2>
          <p className="text-base md:text-lg font-nunito text-muted-foreground px-4">
            Every book is a new adventure. Let's see how far you've come!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 md:mb-8">

          <Card className="border-0 shadow-card bg-linear-to-br from-[#FAF8F5] via-[#F2EEE7] to-[#F59A8F]/20 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4 sm:p-6 text-center font-nunito">
              <div className="w-10 sm:w-14 h-10 sm:h-14 mx-auto rounded-full bg-[#F5C842]/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:animate-bounce-gentle">
                <Flame className="w-5 sm:w-7 h-5 sm:h-7 text-[#F5C842]" />
              </div>
              <p className="text-2xl sm:text-4xl font-black text-foreground">{streak}</p>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground">Day Streak 🔥</p>
            </CardContent>
          </Card>


          <Card className="border-0 shadow-card bg-linear-to-br from-[#FAF8F5] via-[#F2EEE7] to-[#F59A8F]/20 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4 sm:p-6 text-center font-nunito">
              <div className="w-10 sm:w-14 h-10 sm:h-14 mx-auto rounded-full bg-[#F07060]/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:animate-bounce-gentle">
                <BookOpen className="w-5 sm:w-7 h-5 sm:h-7 text-[#F59A8F]" />
              </div>
              <p className="text-2xl sm:text-4xl font-black text-foreground">{booksRead}</p>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground">Books Read 📚</p>
            </CardContent>
          </Card>


          <Card className="border-0 shadow-card  bg-linear-to-br from-[#FAF8F5] via-[#F2EEE7] to-[#F59A8F]/20 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4 sm:p-6 text-center font-nunito">
              <div className="w-10 sm:w-14 h-10 sm:h-14 mx-auto rounded-full bg-[#339989]/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:animate-bounce-gentle">
                <Zap className="w-5 sm:w-7 h-5 sm:h-7 text-[#339989]" />
              </div>
              <p className="text-2xl sm:text-4xl font-black text-foreground">{xp}</p>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground">XP Earned ⚡</p>
            </CardContent>
          </Card>


          <Card className="border-0 shadow-card bg-linear-to-br from-[#FAF8F5] via-[#F2EEE7] to-[#F59A8F]/20 overflow-hidden group hover:scale-105 transition-transform duration-300 font-nunito">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-10 sm:w-14 h-10 sm:h-14 mx-auto rounded-full bg-[#B38DD9]/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:animate-bounce-gentle">
                <Target className="w-5 sm:w-7 h-5 sm:h-7 text-[#B38DD9]" />
              </div>
              <p className="text-2xl sm:text-4xl font-black text-foreground">{level}</p>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground">Level 🎯</p>
            </CardContent>
          </Card>
        </div>


        <Card className="border-0 shadow-card mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between font-nunito">
              <span className="text-xl font-bold text-foreground">Level {level} Progress</span>
              <span className="text-sm font-semibold text-muted-foreground">{progress}% to Level {level + 1}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-6 rounded-full bg-[#F2EEE7] overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 gradient-progress rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-foreground drop-shadow-sm font-nunito">
                  350 XP to next level
                </span>
              </div>
            </div>
          </CardContent>
        </Card>


        <Card className="border-0 shadow-card">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl font-bold text-foreground font-nunito">
              <Medal className="w-5 sm:w-6 h-5 sm:h-6 text-[#F5C842]" />
              Your Badges
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`
                    flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300
                    ${badge.earned
                      ? "bg-card shadow-soft hover:shadow-glow hover:scale-110 cursor-pointer"
                      : "bg-[#FAF8F5]/50 opacity-50"
                    }
                  `}
                >
                  <div className={`
                    w-10 sm:w-14 h-10 sm:h-14 rounded-full flex items-center justify-center
                    ${badge.earned ? "gradient-badge" : "bg-[#FAF8F5]"}
                  `}>
                    <badge.icon className={`w-5 sm:w-7 h-5 sm:h-7 ${badge.earned ? "text-foreground" : "text-muted-foreground"}`} />
                  </div>
                  <span className={`text-[10px] sm:text-xs font-bold text-center leading-tight ${badge.earned ? "text-foreground" : "text-muted-foreground"}`}>
                    {badge.name}
                  </span>
                  {badge.earned && (
                    <Star className="w-3 sm:w-4 h-3 sm:h-4 text-[#F5C842] animate-sparkle" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>


        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="cursor-pointer bg-[#F07060]">
            <BookOpen className="w-5 h-5" />
            Start Your Next Book
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;
