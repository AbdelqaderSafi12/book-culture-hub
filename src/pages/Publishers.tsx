import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone } from "lucide-react";

const publishers = [
  {
    name: "دار الآداب",
    description: "دار نشر رائدة في مجال الأدب العربي والعالمي المترجم، تأسست عام 1956",
    website: "https://daraladab.com",
    email: "info@daraladab.com",
    phone: "+961 1 123456",
    logo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
  },
  {
    name: "المركز الثقافي العربي",
    description: "متخصص في نشر الكتب الفكرية والفلسفية والعلوم الإنسانية",
    website: "https://alarabiccenter.com",
    email: "contact@alarabiccenter.com",
    phone: "+212 5 123456",
    logo: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80",
  },
  {
    name: "دار الشروق",
    description: "واحدة من أعرق دور النشر العربية، متخصصة في الأدب والفكر والثقافة",
    website: "https://daralshorouk.com",
    email: "info@daralshorouk.com",
    phone: "+20 2 123456",
    logo: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80",
  },
  {
    name: "منشورات الجمل",
    description: "دار نشر مستقلة تركز على الأدب المعاصر والترجمات الأدبية الرفيعة",
    website: "https://aljamal.com",
    email: "info@aljamal.com",
    phone: "+49 221 123456",
    logo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
  },
  {
    name: "دار تنوير",
    description: "تهتم بنشر الكتب التنويرية والبحث العلمي والدراسات النقدية",
    website: "https://tanweer.com",
    email: "contact@tanweer.com",
    phone: "+20 2 987654",
    logo: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80",
  },
  {
    name: "المؤسسة العربية للدراسات والنشر",
    description: "متخصصة في البحوث والدراسات الأكاديمية والكتب الموسوعية",
    website: "https://aasp.com",
    email: "info@aasp.com",
    phone: "+961 1 987654",
    logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
  },
];

const Publishers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-right">دور النشر المشاركة</h1>
            <p className="text-xl text-foreground/70 max-w-2xl ml-auto text-right">
              شركاؤنا من أبرز دور النشر العربية المتخصصة في المحتوى الثقافي الرصين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishers.map((publisher, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={publisher.logo}
                    alt={publisher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-right">{publisher.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70 leading-relaxed text-right">{publisher.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-foreground/60 justify-end">
                      <span>{publisher.email}</span>
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-foreground/60 justify-end">
                      <span>{publisher.phone}</span>
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/10 gap-2"
                    onClick={() => window.open(publisher.website, '_blank')}
                  >
                    زيارة الموقع
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publishers;
