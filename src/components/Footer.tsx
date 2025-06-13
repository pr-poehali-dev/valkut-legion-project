import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-military-dark border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="h-6 w-6 text-primary" />
              <h3 className="font-runic font-bold text-primary">
                VALKUT LEGION
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Качественная военная экипировка для профессионалов и энтузиастов
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center">
                <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                Telegram: @valkutlegion
              </p>
              <p className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                info@valkutlegion.ru
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Информация</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Доставка по всей России</p>
              <p>Гарантия качества</p>
              <p>Поддержка 24/7</p>
            </div>
          </div>

          <div id="delivery">
            <h4 className="font-semibold text-foreground mb-4">Доставка</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>🚚 По Москве: 1-2 дня</p>
              <p>📦 По России: 3-7 дней</p>
              <p>💰 Наложенный платеж</p>
              <p>✅ Проверка при получении</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Valkut Legion. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
