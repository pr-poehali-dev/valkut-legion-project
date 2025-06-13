import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import type { Product } from "@/components/ProductGrid";

const ProductModal = ({
  product,
  isOpen,
  onClose,
}: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!product) return null;

  const handleBuyClick = () => {
    const message = `Здравствуйте! Хочу заказать: ${product.name} (${product.price})`;
    const telegramUrl = `https://t.me/valkutlegion?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-runic text-2xl text-primary">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Badge className="bg-primary text-primary-foreground">
              {product.category}
            </Badge>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">
                {product.price}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Доступные размеры:
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Badge
                    key={size}
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    {size}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-military-glow"
                onClick={handleBuyClick}
                disabled={!product.inStock}
              >
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                {product.inStock ? "Купить в Telegram" : "Нет в наличии"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы перейдете в Telegram для оформления заказа
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
