import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-norse-dark via-norse-slate to-norse-stone opacity-95" />
      <div className="absolute inset-0 norse-pattern opacity-40" />

      <div className="relative z-10 container text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-runic font-bold text-primary tracking-wider">
            VALKUT LEGION
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-norse tracking-wide">
            Воинская одежда и снаряжение
          </p>
        </div>

        <div className="space-y-4 animate-fade-in">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Качественная милитари одежда и аксессуары для тех, кто ценит
            надежность и стиль. Доставка по всей России.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-norse-glow"
              onClick={() =>
                document
                  .getElementById("catalog")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
              Смотреть каталог
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
