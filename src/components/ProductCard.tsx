import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  inStock: boolean;
  onClick: () => void;
}

const ProductCard = ({
  name,
  price,
  image,
  category,
  inStock,
  onClick,
}: ProductCardProps) => {
  return (
    <Card
      className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {category}
          </Badge>
          {!inStock && (
            <Badge variant="destructive" className="absolute top-3 right-3">
              Нет в наличии
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-runic font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-2xl font-bold text-primary">{price}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={!inStock}
        >
          <Icon name="Eye" className="mr-2 h-4 w-4" />
          {inStock ? "Подробнее" : "Недоступно"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
