import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-gradient-card">
      <CardHeader className="p-0 relative">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <Badge 
          variant="secondary" 
          className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm"
        >
          {product.category}
        </Badge>
        {product.stock < 5 && (
          <Badge 
            variant="destructive" 
            className="absolute top-2 left-2"
          >
            Low Stock
          </Badge>
        )}
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {product.brand}
            </Badge>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">4.5</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-xs text-muted-foreground">
            {product.stock} in stock
          </p>
        </div>
        
        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="bg-primary hover:bg-primary-hover"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;