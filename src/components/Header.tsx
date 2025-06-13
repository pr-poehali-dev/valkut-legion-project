import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Shield" className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-runic font-bold text-primary">
            VALKUT LEGION
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#catalog"
            className="text-foreground hover:text-primary transition-colors"
          >
            Каталог
          </a>
          <a
            href="#about"
            className="text-foreground hover:text-primary transition-colors"
          >
            О нас
          </a>
          <a
            href="#delivery"
            className="text-foreground hover:text-primary transition-colors"
          >
            Доставка
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Icon name="Menu" className="h-6 w-6 md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
