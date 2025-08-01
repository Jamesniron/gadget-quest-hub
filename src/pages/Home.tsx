import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Smartphone, Laptop, Headphones, Watch, Zap, Shield, Truck } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/context/CartContext';
import heroImage from '@/assets/hero-gadgets.jpg';

const Home = () => {
  // Mock featured products
  const featuredProducts: Product[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      price: 999.99,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      category: 'Smartphones',
      brand: 'Apple',
      description: 'Latest iPhone with titanium design and advanced camera system',
      stock: 15
    },
    {
      id: '2',
      name: 'MacBook Air M3',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      category: 'Laptops',
      brand: 'Apple',
      description: 'Ultra-thin laptop with M3 chip for exceptional performance',
      stock: 8
    },
    {
      id: '3',
      name: 'AirPods Pro',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400',
      category: 'Audio',
      brand: 'Apple',
      description: 'Premium wireless earbuds with active noise cancellation',
      stock: 25
    }
  ];

  const categories = [
    { name: 'Smartphones', icon: Smartphone, count: '50+ Products' },
    { name: 'Laptops', icon: Laptop, count: '30+ Products' },
    { name: 'Audio', icon: Headphones, count: '40+ Products' },
    { name: 'Wearables', icon: Watch, count: '20+ Products' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Get your gadgets delivered within 24-48 hours'
    },
    {
      icon: Shield,
      title: 'Warranty Protection',
      description: 'All products come with manufacturer warranty'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Welcome to Gadget Hub
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Discover the Latest
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                    Tech Gadgets
                  </span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  Explore cutting-edge technology from the world's leading brands. 
                  Quality guaranteed, fast delivery, competitive prices.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button variant="hero" size="lg" className="group">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt="Latest Tech Gadgets"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Shop by Category</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find exactly what you're looking for in our carefully curated categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={category.name} to="/products">
                <Card className="group hover:shadow-hover transition-all duration-300 transform hover:scale-105 cursor-pointer bg-gradient-card">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{category.count}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground text-lg">
                Handpicked gadgets that are trending right now
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Gadget Hub?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to providing the best shopping experience for tech enthusiasts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-gradient-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;