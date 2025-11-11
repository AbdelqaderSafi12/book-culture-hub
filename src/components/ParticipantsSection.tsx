import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const participants = [
  {
    name: "د. أحمد محمود",
    role: "باحث في الأدب العربي",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "سارة علي",
    role: "مترجمة أدبية",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "محمد حسن",
    role: "كاتب وناقد أدبي",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "ليلى إبراهيم",
    role: "محررة ثقافية",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "عمر خالد",
    role: "باحث في التاريخ",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "فاطمة يوسف",
    role: "أستاذة الفلسفة",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
];

const ParticipantsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-right">فريق المشروع</h2>
          <p className="text-xl text-foreground/70 max-w-2xl ml-auto text-right">
            نخبة من الأكاديميين والكتاب والمترجمين المتخصصين في المجال الثقافي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participants.map((participant, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 flex-row-reverse">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                    <img
                      src={participant.image}
                      alt={participant.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold mb-1">{participant.name}</h3>
                    <p className="text-foreground/60">{participant.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
