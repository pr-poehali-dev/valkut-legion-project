import ProductCard from "@/components/ProductCard";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  inStock: boolean;
  description: string;
  sizes: string[];
}

const ProductGrid = ({
  onProductClick,
}: {
  onProductClick: (product: Product) => void;
}) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Тактическая куртка M65",
      price: "4 500 ₽",
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=400&h=300&fit=crop",
      category: "Куртки",
      inStock: true,
      description:
        "Классическая военная куртка M65. Изготовлена из прочного хлопка с водоотталкивающей пропиткой. Множество карманов для снаряжения.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      name: "Тактические брюки",
      price: "3 200 ₽",
      image:
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop",
      category: "Брюки",
      inStock: true,
      description:
        "Удобные тактические брюки с усиленными коленями. Множество карманов, прочная ткань Rip-Stop.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 3,
      name: "Тактический рюкзак 45L",
      price: "5 800 ₽",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      category: "Рюкзаки",
      inStock: true,
      description:
        "Вместительный тактический рюкзак на 45 литров. Система MOLLE, усиленные швы, водонепроницаемая ткань.",
      sizes: ["Универсальный"],
    },
    {
      id: 4,
      name: "Берцы тактические",
      price: "6 200 ₽",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      category: "Обувь",
      inStock: true,
      description:
        "Высокие тактические ботинки из натуральной кожи. Подошва Vibram, быстрая шнуровка.",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
    },
    {
      id: 5,
      name: "Тактические перчатки",
      price: "1 800 ₽",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Аксессуары",
      inStock: false,
      description:
        "Тактические перчатки с защитой костяшек. Дышащая ткань, усиленная ладонь.",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 6,
      name: "Тактическая кепка",
      price: "1 200 ₽",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop",
      category: "Головные уборы",
      inStock: true,
      description:
        "Тактическая кепка с велкро панелями. 100% хлопок, регулируемый размер.",
      sizes: ["Универсальный"],
    },
  ];

  return (
    <section id="catalog" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-runic font-bold text-primary mb-4">
            КАТАЛОГ ТОВАРОВ
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите качественную военную экипировку для любых задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
export type { Product };
