import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "اكتشف عالم الكتب الثقافية",
    description: "منصة متكاملة تجمع أفضل الكتب الثقافية من دور النشر الرائدة",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80",
  },
  {
    title: "انضم إلى مجتمع القراء",
    description: "شارك معرفتك وتجربتك مع محبي الكتب حول العالم",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&q=80",
  },
  {
    title: "قدم كتابك المفضل",
    description: "ساهم في إثراء المكتبة الثقافية بترشيحاتك المميزة",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1920&q=80",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          </div>
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                {slide.description}
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity shadow-elegant">
                  استكشف المزيد
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  تعرف علينا
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-card transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-card transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-foreground/30 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
