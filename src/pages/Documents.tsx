import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Users, Award } from "lucide-react";

const Documents = () => {
  const sections = [
    {
      title: "رؤية المشروع",
      icon: BookOpen,
      description: "سيتم إضافة تفاصيل رؤية المشروع وأهدافه هنا",
    },
    {
      title: "التقارير السنوية",
      icon: FileText,
      description: "سيتم إضافة التقارير والإحصائيات السنوية هنا",
    },
    {
      title: "فريق العمل",
      icon: Users,
      description: "سيتم إضافة تفاصيل فريق العمل ومسؤولياته هنا",
    },
    {
      title: "الإنجازات",
      icon: Award,
      description: "سيتم إضافة قائمة الإنجازات والجوائز هنا",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-right">وثائق المشروع</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mr-auto text-right">
              جميع الوثائق والمستندات الخاصة بالمشروع الثقافي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-right">
                    {section.title}
                    <div className="p-3 rounded-lg bg-primary/10">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60 text-lg text-right">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
