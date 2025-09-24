"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { Footer } from "./components/layout/Footer";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  ShoppingCart,
  Filter,
  Grid,
  List,
  Star,
  Truck,
  Shield,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import nfcPlasticCardsImg from "figma:asset/b6f9b1d8a2fc4a90fff2f471b25930ed7bd3b561.png";
import nfcMetalCardImg from "figma:asset/34fb5c340c0891aac50c44bd2d7de7f944db7ef0.png";
import qrStickersImg from "figma:asset/f3b60b27c518ba0b5f3fe5ab34f8d9e8b7e13a43.png";
import reviewNfcStandImg from "figma:asset/dcedbe742ec442cd26cb5901fa7a7ef9dd0eb672.png";
import reviewStickersImg from "figma:asset/4a75d08f97892396001244cfcdbd42416d29580b.png";
import jobSiteStandImg from "figma:asset/82a8b93c0fcd6d1d360d49c8b1c1a83f07f73908.png";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isPopular?: boolean;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: "nfc-metal-card",
    name: "NFC Metal Card",
    price: 49.99,
    description:
      "The ultimate first impression. Tap to share your profile instantly.",
    features: [
      "Premium metal construction",
      "NFC technology",
      "Custom branding",
      "Instant profile sharing",
    ],
    image: nfcPlasticCardsImg,
    category: "NFC Cards",
    rating: 4.9,
    reviews: 127,
    inStock: true,
    isPopular: true,
  },
  {
    id: "branded-fridge-magnet",
    name: "Branded Fridge Magnet (QR Code)",
    price: 9.99,
    description:
      "Stay top-of-mind - and on the fridge. Great for repeat business and referrals.",
    features: [
      "Weatherproof QR code",
      "Custom branding",
      "Strong magnetic hold",
      "UV resistant",
    ],
    image: qrStickersImg,
    category: "Marketing Materials",
    rating: 4.8,
    reviews: 89,
    inStock: true,
  },
  {
    id: "nfc-plastic-card",
    name: "NFC Plastic Card",
    price: 19.99,
    description:
      "Affordable professional tap card for every team member.",
    features: [
      "Durable plastic",
      "NFC enabled",
      "Team branding",
      "Cost effective",
    ],
    image: nfcMetalCardImg,
    category: "NFC Cards",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    isNew: true,
  },
  {
    id: "google-review-stickers",
    name: "Google Review Stickers (10-Pack)",
    price: 24.99,
    description:
      "Easy-to-place QR stickers for collecting on-site reviews post-job.",
    features: [
      "10 weatherproof stickers",
      "QR code technology",
      "Easy application",
      "Review collection",
    ],
    image: reviewStickersImg,
    category: "Review Tools",
    rating: 4.6,
    reviews: 156,
    inStock: true,
  },
  {
    id: "job-site-stand",
    name: "Job Site Stand",
    price: 129.99,
    description:
      "Branded, weatherproof stand with QR code for walk-by leads.",
    features: [
      "Weather resistant",
      "Professional branding",
      "QR code display",
      "Portable design",
    ],
    image: jobSiteStandImg,
    category: "Signage",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    isPopular: true,
  },
  {
    id: "google-review-nfc-stand",
    name: "Google Review NFC Stand (Tabletop)",
    price: 39.99,
    description:
      "Sleek counter display that prompts reviews before you leave the home.",
    features: [
      "NFC technology",
      "Tabletop design",
      "Review prompting",
      "Professional appearance",
    ],
    image: reviewNfcStandImg,
    category: "Review Tools",
    rating: 4.8,
    reviews: 94,
    inStock: true,
  },
];

interface CartItem extends Product {
  quantity: number;
}

interface ProductsProps {
  onNavigate: (pageId: string, productId?: string) => void;
}

export default function Products({
  onNavigate,
}: ProductsProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">(
    "grid",
  );
  const [sortBy, setSortBy] = useState("popular");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showCart, setShowCart] = useState(false);

  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts = products
    .filter(
      (product) =>
        filterCategory === "all" ||
        product.category === filterCategory,
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      }
    });

  const addToCart = (
    product: Product,
    quantity: number = 1,
  ) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id,
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== productId),
    );
  };

  const updateQuantity = (
    productId: string,
    quantity: number,
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const cartItemCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <div className="bg-[#020203] min-h-screen">
      {/* Hero Section */}
      <section className="sticky-header-spacing pb-12 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#007bff] text-xs sm:text-sm uppercase tracking-wider">
                Shop Now
              </span>
              <div className="w-8 sm:w-12 h-px bg-[#007bff]"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Products
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
              Professional tools to elevate your contractor
              brand and streamline your business
            </p>
            <div className="text-xs sm:text-sm text-gray-500 mt-2">
              8 Results
            </div>
          </motion.div>

          {/* Filters and View Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8"
          >
            {/* Top Row - Cart and Category Filter */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Button
                variant="outline"
                className="bg-[#007bff] text-white border-[#007bff] hover:bg-[#0056b3] w-full sm:w-auto text-sm"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Cart ({cartItemCount})
              </Button>

              <Select
                value={filterCategory}
                onValueChange={setFilterCategory}
              >
                <SelectTrigger className="w-full sm:w-48 bg-[#1a1a1a] border-gray-700 text-white text-sm">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-gray-700">
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="text-white hover:bg-[#2a2a2a] text-sm"
                    >
                      {category === "all"
                        ? "All Products"
                        : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bottom Row - Sort and View Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48 bg-[#1a1a1a] border-gray-700 text-white text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-gray-700">
                  <SelectItem
                    value="popular"
                    className="text-white hover:bg-[#2a2a2a] text-sm"
                  >
                    Sort by Popularity
                  </SelectItem>
                  <SelectItem
                    value="price-low"
                    className="text-white hover:bg-[#2a2a2a] text-sm"
                  >
                    Price: Low to High
                  </SelectItem>
                  <SelectItem
                    value="price-high"
                    className="text-white hover:bg-[#2a2a2a] text-sm"
                  >
                    Price: High to Low
                  </SelectItem>
                  <SelectItem
                    value="rating"
                    className="text-white hover:bg-[#2a2a2a] text-sm"
                  >
                    Highest Rated
                  </SelectItem>
                  <SelectItem
                    value="name"
                    className="text-white hover:bg-[#2a2a2a] text-sm"
                  >
                    Name A-Z
                  </SelectItem>
                </SelectContent>
              </Select>

              <div className="flex rounded-lg overflow-hidden border border-gray-700">
                <Button
                  variant={
                    viewMode === "grid" ? "default" : "ghost"
                  }
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={
                    viewMode === "grid"
                      ? "bg-[#007bff]"
                      : "text-gray-400 hover:text-white"
                  }
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={
                    viewMode === "list" ? "default" : "ghost"
                  }
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={
                    viewMode === "list"
                      ? "bg-[#007bff]"
                      : "text-gray-400 hover:text-white"
                  }
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid gap-4 sm:gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onNavigate={onNavigate}
                viewMode={viewMode}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                description: "On orders over $75",
              },
              {
                icon: Shield,
                title: "1-Year Warranty",
                description: "Quality guaranteed",
              },
              {
                icon: Zap,
                title: "Fast Setup",
                description: "Ready in 24 hours",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="text-center"
              >
                <feature.icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#007bff]" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigate: (pageId: string, productId?: string) => void;
  viewMode: "grid" | "list";
  index: number;
}

function ProductCard({
  product,
  onAddToCart,
  onNavigate,
  viewMode,
  index,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-[#0f0f0f] border border-gray-800 rounded-xl overflow-hidden hover:border-[#007bff] hover:shadow-xl hover:shadow-[#007bff]/20 transition-all duration-300 group cursor-pointer ${
        viewMode === "list" ? "flex flex-col sm:flex-row" : ""
      }`}
      onClick={() => onNavigate("product", product.id)}
    >
      {/* Product Image */}
      <div
        className={`relative ${viewMode === "list" ? "w-full sm:w-64 flex-shrink-0" : "aspect-[4/3]"} overflow-hidden bg-[#2a2a2a] ${viewMode === "list" ? "rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none" : "rounded-t-xl"}`}
      >
        {typeof product.image === "string" &&
        product.image.startsWith("/api/") ? (
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4 sm:p-6"
          />
        )}

        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {product.isPopular && (
            <Badge className="bg-[#007bff] text-white text-xs">
              Popular
            </Badge>
          )}
          {product.isNew && (
            <Badge className="bg-green-600 text-white text-xs">
              New
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive" className="text-xs">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <div className="bg-[#007bff]/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 border border-[#007bff]/30">
            <span className="text-white font-bold text-sm sm:text-lg">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-gray-300 line-through ml-1 sm:ml-2 text-xs sm:text-sm">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div
        className={`p-4 sm:p-6 ${viewMode === "list" ? "flex-1" : ""}`}
      >
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#007bff] text-xs sm:text-sm font-medium">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white text-xs sm:text-sm">
                {product.rating}
              </span>
              <span className="text-gray-400 text-xs sm:text-sm">
                ({product.reviews})
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#007bff] transition-colors">
            {product.name}
          </h3>

          <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-4 sm:mb-6">
            <ul className="space-y-1 sm:space-y-2">
              {product.features
                .slice(0, viewMode === "list" ? 4 : 2)
                .map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-xs sm:text-sm text-gray-300"
                  >
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#00d4ff] rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-[#1a1a1a] w-full sm:w-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(Math.max(1, quantity - 1));
              }}
              className="px-2 sm:px-3 py-2 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors text-sm"
              disabled={!product.inStock}
            >
              −
            </button>
            <span className="px-3 sm:px-4 py-2 bg-[#0f0f0f] text-white min-w-[50px] sm:min-w-[60px] text-center text-sm">
              {quantity}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(quantity + 1);
              }}
              className="px-2 sm:px-3 py-2 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors text-sm"
              disabled={!product.inStock}
            >
              +
            </button>
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product, quantity);
            }}
            disabled={!product.inStock}
            className="flex-1 bg-[#007bff] hover:bg-[#0056b3] text-white text-sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}