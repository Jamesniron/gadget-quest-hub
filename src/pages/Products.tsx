import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/context/CartContext';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  // Mock products data
  const products: Product[] = [
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
    },
    {
      id: '4',
      name: 'Samsung Galaxy S24 Ultra',
      price: 1199.99,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
      category: 'Smartphones',
      brand: 'Samsung',
      description: 'Flagship Android phone with S Pen and exceptional camera',
      stock: 12
    },
    {
      id: '5',
      name: 'Dell XPS 13',
      price: 999.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      category: 'Laptops',
      brand: 'Dell',
      description: 'Compact laptop with stunning InfinityEdge display',
      stock: 6
    },
    {
      id: '6',
      name: 'Sony WH-1000XM5',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
      category: 'Audio',
      brand: 'Sony',
      description: 'Industry-leading noise canceling wireless headphones',
      stock: 20
    },
    {
      id: '7',
      name: 'Apple Watch Series 9',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400',
      category: 'Wearables',
      brand: 'Apple',
      description: 'Advanced smartwatch with health monitoring features',
      stock: 18
    },
    {
      id: '8',
      name: 'Google Pixel 8 Pro',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400',
      category: 'Smartphones',
      brand: 'Google',
      description: 'AI-powered camera and pure Android experience',
      stock: 14
    }
  ];

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const brands = ['All', ...Array.from(new Set(products.map(p => p.brand)))];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      
      return matchesSearch && matchesCategory && matchesBrand;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, selectedBrand, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover our complete collection of cutting-edge gadgets and technology
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-accent'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Brand</label>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedBrand === brand
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-accent'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  >
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} products
                </span>
                {(selectedCategory !== 'All' || selectedBrand !== 'All' || searchTerm) && (
                  <Badge variant="secondary">
                    Filtered
                  </Badge>
                )}
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <Card className="p-12 text-center">
                <div className="space-y-4">
                  <div className="text-4xl">🔍</div>
                  <h3 className="text-xl font-semibold">No products found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search terms
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedBrand('All');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;