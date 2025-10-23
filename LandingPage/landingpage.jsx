"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Play, ShoppingBag, Heart, Search, Instagram, Twitter, Facebook, Star, Plus, Minus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Input,
} from "./src/components/ui/index";

export default function FashionLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCollection, setActiveCollection] = useState(0);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add to cart function
  const addToCart = (item) => {
    setCartItems(prev => [...prev, { ...item, id: Date.now() }]);
  };

  // Add to wishlist function
  const toggleWishlist = (item) => {
    setWishlistItems(prev => {
      const exists = prev.find(wishItem => wishItem.id === item.id);
      if (exists) {
        return prev.filter(wishItem => wishItem.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  // Collection data
  const collections = [
    {
      id: 1,
      name: "Summer Breeze",
      description: "Lightweight linens and vibrant prints for warm days.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f8f7f57c-67f7-4f33-995a-cdde464269bf.png",
      price: "$89",
      items: ["Maxi Dress", "Linen Shirt", "Flowy Pants"]
    },
    {
      id: 2,
      name: "Autumn Harvest",
      description: "Cozy layers and rich textures for cooler seasons.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/378aae6b-7650-451e-b626-4d9553224fe6.png",
      price: "$129",
      items: ["Knit Sweater", "Leather Jacket", "Wool Scarf"]
    },
    {
      id: 3,
      name: "City Pulse",
      description: "Edgy streetwear meets refined tailoring.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a4f7666-d3bf-49b9-b21a-cf51ec97f413.png",
      price: "$99",
      items: ["Blazer", "Graphic Tee", "Tailored Pants"]
    }
  ];

  // Lookbook data
  const lookbooks = [
    {
      id: 1,
      name: "Casual Day",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0d98f835-2865-4fa4-96b0-5664b76cdb72.png",
      price: "$149",
      items: ["Striped Shirt", "Slim Jeans", "Loafers"]
    },
    {
      id: 2,
      name: "Evening Elegance",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94a280f8-242f-4196-924d-4abade1d5550.png",
      price: "$199",
      items: ["Velvet Top", "Wide Pants", "Statement Earrings"]
    },
    {
      id: 3,
      name: "Weekend Adventure",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/da5d687c-caec-4b7f-aa74-0bf58a2bc24c.png",
      price: "$119",
      items: ["Denim Jacket", "Graphic Tee", "Cargo Shorts"]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Fashion Influencer",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65cf292d-d276-4d47-9d3f-c489ff87ea3b.png",
      quote: "VogueThread pieces are versatile and timeless. They elevate any outfit effortlessly!",
      rating: 5,
      followers: "2.3M"
    },
    {
      id: 2,
      name: "Jordan Lee",
      role: "Lifestyle Blogger",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e156b310-7bde-4158-93d0-7ccd1fac70fe.png",
      quote: "The quality is unmatched. These clothes make me feel powerful and stylish every day.",
      rating: 5,
      followers: "1.8M"
    },
    {
      id: 3,
      name: "Taylor Kim",
      role: "Style Icon",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/668fc61b-5acc-4c68-bee0-b886a2703e16.png",
      quote: "From casual to couture, VogueThread has it all. Obsessed with the new collection!",
      rating: 5,
      followers: "3.1M"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${isScrolled ? 'bg-background/95 shadow-lg' : 'bg-background/80'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary animate-fade-in">VogueThread</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#collections" className="text-foreground hover:text-primary transition-colors">Collections</a>
              <a href="#lookbooks" className="text-foreground hover:text-primary transition-colors">Lookbooks</a>
              <a href="#shop" className="text-foreground hover:text-primary transition-colors">Shop</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Stories</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
              <div className="relative">
                <Heart className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </div>
              <div className="relative">
                <ShoppingBag className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <Button variant="outline" className="border-primary">Sign In</Button>
              <Button className="bg-primary text-primary-foreground">Shop Now</Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border pt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#collections" className="text-foreground hover:text-primary">Collections</a>
                <a href="#lookbooks" className="text-foreground hover:text-primary">Lookbooks</a>
                <a href="#shop" className="text-foreground hover:text-primary">Shop</a>
                <a href="#testimonials" className="text-foreground hover:text-primary">Stories</a>
                <a href="#contact" className="text-foreground hover:text-primary">Contact</a>
                <div className="flex space-x-4 pt-2">
                  <Button variant="outline" size="sm" className="border-primary flex-1">Sign In</Button>
                  <Button size="sm" className="bg-primary text-primary-foreground flex-1">Shop Now</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Elevate Your <span className="text-primary">Style</span> with Timeless Elegance
              </h1>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-xl text-muted-foreground leading-relaxed">
                Discover our curated collections of modern fashion that blend sophistication and comfort. Crafted for the confident individual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary px-8 py-3 text-primary-foreground hover:bg-primary/90">
                  Shop Collections
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Lookbook
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94c538d5-e982-4ff2-acb7-1318245e78f3.png"
                alt="Model wearing a sleek black tailored blazer over a white silk blouse with high-waisted trousers in a urban studio setting with soft natural lighting"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Highlights */}
      <section id="collections" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-black">Collection Highlights</h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Explore our latest drops featuring premium fabrics and innovative designs for every occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={collection.id} className="border-border overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="p-0 relative">
                  <img
                    src={collection.image}
                    alt={`${collection.name} collection`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => toggleWishlist(collection)}
                    >
                      <Heart className={`h-4 w-4 ${wishlistItems.find(item => item.id === collection.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-2">{collection.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-2">{collection.description}</CardDescription>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-primary">{collection.price}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {collection.items.map((item, itemIndex) => (
                        <span key={itemIndex} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-primary"
                      onClick={() => setActiveCollection(index)}
                    >
                      View Collection
                    </Button>
                    <Button 
                      className="bg-primary text-primary-foreground"
                      onClick={() => addToCart(collection)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lookbooks */}
      <section id="lookbooks" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-black">Lookbook Showcase</h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Get inspired by our styled looks, blending everyday wear with high fashion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lookbooks.map((lookbook, index) => (
              <div key={lookbook.id} className="relative overflow-hidden rounded-lg shadow-md group animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <img
                  src={lookbook.image}
                  alt={`${lookbook.name} lookbook`}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="w-full">
                    <h3 className="text-white font-semibold mb-2">{lookbook.name}</h3>
                    <p className="text-white/90 text-sm mb-3">{lookbook.price}</p>
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-primary text-primary-foreground"
                        onClick={() => addToCart(lookbook)}
                      >
                        Shop This Look
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 hover:bg-white"
                        onClick={() => toggleWishlist(lookbook)}
                      >
                        <Heart className={`h-4 w-4 ${wishlistItems.find(item => item.id === lookbook.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-black">Influencer Stories</h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Hear from our favorite style icons on why VogueThread is their go-to.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="border-border animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="pt-6">
                  <img
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-center mb-4 italic text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary mt-1">{testimonial.followers} followers</div>
                  </div>
                  <CardFooter className="pt-4 pb-0 flex justify-center">
                    <a href="#" className="text-primary hover:underline flex items-center">
                      Follow on Instagram <Instagram className="ml-1 h-4 w-4" />
                    </a>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section id="shop" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-black animate-fade-in">Ready to Refresh Your Wardrobe?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>
            Browse our full selection and find the perfect pieces for your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Input 
              placeholder="Search for styles, sizes, or colors" 
              className="border-border bg-background" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              className="bg-primary text-primary-foreground px-8"
              onClick={() => {
                if (searchQuery.trim()) {
                  alert(`Searching for: "${searchQuery}"`);
                } else {
                  alert('Please enter a search term');
                }
              }}
            >
              Shop Now
            </Button>
          </div>
          {searchQuery && (
            <div className="mt-4 text-sm text-muted-foreground animate-fade-in">
              Showing results for: <span className="text-primary font-semibold">"{searchQuery}"</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold text-primary">VogueThread</h3>
              <p className="mb-4 text-muted-foreground">
                Timeless fashion for the modern world. Join our community of style enthusiasts.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary p-2">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary p-2">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary p-2">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Collections</a></li>
                <li><a href="#" className="hover:text-primary">Lookbooks</a></li>
                <li><a href="#" className="hover:text-primary">Shop</a></li>
                <li><a href="#" className="hover:text-primary">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Stay Updated</h4>
              <div className="space-y-2">
                <Input 
                  placeholder="Email address" 
                  className="text-sm" 
                  type="email"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      alert('Thank you for subscribing to our newsletter!');
                    }
                  }}
                />
                <Button 
                  size="sm" 
                  className="w-full bg-primary text-primary-foreground"
                  onClick={() => alert('Thank you for subscribing to our newsletter!')}
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get exclusive offers and style tips delivered to your inbox.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 VogueThread. All rights reserved. | <a href="#" className="hover:text-primary">Privacy Policy</a> | <a href="#" className="hover:text-primary">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
