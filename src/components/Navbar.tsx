import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Smartphone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const { state } = useCart();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Cart', path: '/cart' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-primary p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Gadget Hub
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`relative ${
                    isActive(item.path) 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-accent/50"
                  }`}
                >
                  {item.label}
                  {item.path === '/cart' && state.itemCount > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                      {state.itemCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Cart Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {state.itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex space-x-1">
            {navItems.slice(0, 2).map((item) => (
              <Link key={item.path} to={item.path} className="flex-1">
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`w-full ${
                    isActive(item.path) 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-accent/50"
                  }`}
                  size="sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;