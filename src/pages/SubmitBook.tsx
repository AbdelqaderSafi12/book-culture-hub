import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Upload, BookOpen } from "lucide-react";
import { useState } from "react";

const SubmitBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال بيانات الكتاب بنجاح!");
    setFormData({ title: "", author: "", publisher: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <BookOpen className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-right">تقديم كتاب</h1>
            <p className="text-xl text-foreground/70 text-right mr-auto max-w-2xl">
              شارك معنا بترشيح كتابك المفضل لإضافته إلى المكتبة الثقافية
            </p>
          </div>

          <Card className="gradient-card border-border/50 shadow-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-right">معلومات الكتاب</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-lg text-right block">عنوان الكتاب *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="أدخل عنوان الكتاب"
                    required
                    className="bg-secondary border-border/50 text-right"
                    dir="rtl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author" className="text-lg text-right block">المؤلف *</Label>
                  <Input
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="اسم المؤلف"
                    required
                    className="bg-secondary border-border/50 text-right"
                    dir="rtl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publisher" className="text-lg text-right block">دار النشر *</Label>
                  <Input
                    id="publisher"
                    name="publisher"
                    value={formData.publisher}
                    onChange={handleChange}
                    placeholder="اسم دار النشر"
                    required
                    className="bg-secondary border-border/50 text-right"
                    dir="rtl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-lg text-right block">وصف الكتاب *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="نبذة مختصرة عن الكتاب وأهميته الثقافية"
                    required
                    rows={5}
                    className="bg-secondary border-border/50 text-right"
                    dir="rtl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cover" className="text-lg text-right block">غلاف الكتاب (اختياري)</Label>
                  <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer bg-secondary/50">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-foreground/50" />
                    <p className="text-foreground/60 mb-2">اضغط لرفع صورة الغلاف</p>
                    <p className="text-sm text-foreground/40">PNG, JPG أو WEBP (حجم أقصى: 5MB)</p>
                    <input type="file" id="cover" className="hidden" accept="image/*" />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary hover:opacity-90 transition-opacity shadow-elegant">
                  إرسال الترشيح
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmitBook;
