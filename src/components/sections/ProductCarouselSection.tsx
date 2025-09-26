"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react";
import { staggerChildren, fadeInUp } from "../../utils/animations";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import nfcPlasticCardsImg from '@/assets/b6f9b1d8a2fc4a90fff2f471b25930ed7bd3b561.png';
import nfcMetalCardImg from '@/assets/34fb5c340c0891aac50c44bd2d7de7f944db7ef0.png';
import qrStickersImg from '@/assets/f3b60b27c518ba0b5f3fe5ab34f8d9e8b7e13a43.png';
import reviewNfcStandImg from '@/assets/dcedbe742ec442cd26cb5901fa7a7ef9dd0eb672.png';
import reviewStickersImg from '@/assets/4a75d08f97892396001244cfcdbd42416d29580b.png';
import jobSiteStandImg from '@/assets/82a8b93c0fcd6d1d360d49c8b1c1a83f07f73908.png';

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
    description: "The ultimate first impression. Tap to share your profile instantly.",
    features: ["Premium metal construction", "NFC technology", "Custom branding", "Instant profile sharing"],
    image: nfcMetalCardImg,
    category: "NFC Cards",
    rating: 4.9,
    reviews: 127,
    inStock: true,
    isPopular: true
  },
  {
    id: "branded-fridge-magnet",
    name: "Branded Fridge Magnet (QR Code)",
    price: 9.99,
    description: "Stay top-of-mind - and on the fridge. Great for repeat business and referrals.",
    features: ["Weatherproof QR code", "Custom branding", "Strong magnetic hold", "UV resistant"],
    image: qrStickersImg,
    category: "Marketing Materials",
    rating: 4.8,
    reviews: 89,
    inStock: true
  },
  {
    id: "nfc-plastic-card",
    name: "NFC Plastic Card",
    price: 19.99,
    description: "Affordable professional tap card for every team member.",
    features: ["Durable plastic", "NFC enabled", "Team branding", "Cost effective"],
    image: nfcPlasticCardsImg,
    category: "NFC Cards",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    isNew: true
  },
  {
    id: "google-review-stickers",
    name: "Google Review Stickers (10-Pack)",
    price: 24.99,
    description: "Easy-to-place QR stickers for collecting on-site reviews post-job.",
    features: ["10 weatherproof stickers", "QR code technology", "Easy application", "Review collection"],
    image: reviewStickersImg,
    category: "Review Tools",
    rating: 4.6,
    reviews: 156,
    inStock: true
  },
  {
    id: "job-site-stand",
    name: "Job Site Stand",
    price: 129.99,
    description: "Branded, weatherproof stand with QR code for walk-by leads.",
    features: ["Weather resistant", "Professional branding", "QR code display", "Portable design"],
    image: jobSiteStandImg,
    category: "Signage",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    isPopular: true
  },
  {
    id: "google-review-nfc-stand",
    name: "Google Review NFC Stand (Tabletop)",
    price: 39.99,
    description: "Sleek counter display that prompts reviews before you leave the home.",
    features: ["NFC technology", "Tabletop design", "Review prompting", "Professional appearance"],
    image: reviewNfcStandImg,
    category: "Review Tools",
    rating: 4.8,
    reviews: 94,
    inStock: true
  }
];

function ProductCard({ product, index, onNavigate }: { product: Product; index: number; onNavigate?: (pageId: string, productId?: string) => void }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of ${product.name} to cart`);
  };

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate("product", product.id);
    }
  };

  return (
    <motion.div
      className="bg-[#0f0f0f] border border-gray-800 rounded-xl overflow-hidden hover:border-[#007bff] hover:shadow-xl hover:shadow-[#007bff]/20 transition-all duration-300 group w-full h-full max-w-[400px] mx-auto cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#2a2a2a] rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-3 sm:p-4 lg:p-6"
        />
        
        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {product.isPopular && (
            <Badge className="bg-[#007bff] text-white text-xs">Popular</Badge>
          )}
          {product.isNew && (
            <Badge className="bg-green-600 text-white text-xs">New</Badge>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <div className="bg-[#007bff]/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 border border-[#007bff]/30">
            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">${product.price}</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 lg:p-6">
        <div className="mb-3 sm:mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#007bff] text-xs sm:text-sm font-medium">{product.category}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white text-xs sm:text-sm">{product.rating}</span>
              <span className="text-gray-400 text-xs sm:text-sm">({product.reviews})</span>
            </div>
          </div>
          
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 group-hover:text-[#007bff] transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm line-clamp-2">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-4 sm:mb-6">
            <ul className="space-y-1 sm:space-y-2">
              {product.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-300">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#00d4ff] rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-[#1a1a1a] w-full sm:w-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(Math.max(1, quantity - 1));
              }}
              className="px-2 sm:px-3 py-1 sm:py-2 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors text-sm"
            >
              −
            </button>
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-[#0f0f0f] text-white min-w-[50px] sm:min-w-[60px] text-center text-sm">
              {quantity}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity(quantity + 1);
              }}
              className="px-2 sm:px-3 py-1 sm:py-2 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors text-sm"
            >
              +
            </button>
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className="flex-1 bg-[#007bff] hover:bg-[#0056b3] text-white text-xs sm:text-sm"
          >
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Add To Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

interface ProductCarouselSectionProps {
  onNavigate?: (pageId: string, productId?: string) => void;
}

export function ProductCarouselSection({ onNavigate }: ProductCarouselSectionProps = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 810);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleCards = isMobile ? 1 : 3;
  const maxIndex = products.length - visibleCards;

  // Auto-advance carousel every 4 seconds for continuous movement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Reset to beginning when we reach the end
        }
        return prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <motion.div
      ref={ref}
      className="relative shrink-0 w-full"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      data-name="product-carousel"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2.5 py-[50px] relative w-full">
          <motion.div
            className="box-border content-stretch flex flex-col gap-[42px] items-center justify-start p-0 relative shrink-0 w-full"
            variants={staggerChildren}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {/* Section Title */}
            <motion.div
              className="font-['Poppins:SemiBold',_sans-serif] font-semibold leading-tight not-italic relative shrink-0 text-[#ffffff] text-center uppercase max-w-4xl mx-auto px-4"
              variants={fadeInUp}
            >
              <p className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] leading-tight lg:leading-[70.2px]">
                Put Your Brand in Their Hands (And Homes)
              </p>
            </motion.div>
            
            {/* Carousel Container */}
            <motion.div
              className="relative w-full max-w-[1400px] h-auto mx-auto"
              variants={fadeInUp}
            >
              {/* Carousel Content */}
              <motion.div
                className="relative w-full h-full overflow-hidden rounded-[15px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="flex w-full h-full"
                  animate={{ x: `${-currentIndex * (100 / visibleCards)}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className={`${isMobile ? 'w-full' : 'w-1/3'} h-full flex-shrink-0 flex items-center justify-center p-2 sm:p-4`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard product={product} index={index} onNavigate={onNavigate} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Navigation Arrows */}
              {currentIndex > 0 && (
                <motion.button
                  className={`absolute ${isMobile ? 'left-2' : 'left-[-80px]'} top-1/2 transform -translate-y-1/2 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] rounded-full p-2 sm:p-3 hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 z-10`}
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </motion.button>
              )}

              {currentIndex < maxIndex && (
                <motion.button
                  className={`absolute ${isMobile ? 'right-2' : 'right-[-80px]'} top-1/2 transform -translate-y-1/2 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] rounded-full p-2 sm:p-3 hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 z-10`}
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </motion.button>
              )}

              {/* Carousel Indicators */}
              <motion.div
                className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {Array.from({ length: Math.max(0, products.length - visibleCards + 1) }).map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#007bff] scale-110' 
                        : 'bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)]'
                    }`}
                    onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <Button 
                size="lg"
                onClick={() => onNavigate && onNavigate("waitlist")}
                className="bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white hover:from-[#0056b3] hover:to-[#007bff] shadow-lg hover:shadow-[#007bff]/25 transition-all duration-300 group"
              >
                Pre-Order Now - Join Waitlist
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}