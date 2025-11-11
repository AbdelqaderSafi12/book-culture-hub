import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import ParticipantsSection from "@/components/ParticipantsSection";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";

const Index = () => {
  const stats = [
    { icon: BookOpen, label: "كتاب مسجل", value: "500+" },
    { icon: Users, label: "مشارك", value: "50+" },
    { icon: Award, label: "دار نشر", value: "15+" },
    { icon: TrendingUp, label: "زائر شهرياً", value: "10K+" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      
      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-foreground/60">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ParticipantsSection />
    </div>
  );
};

export default Index;
