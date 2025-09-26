"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Star, ShoppingCart, ArrowLeft, Check, Shield, Truck, Clock, Share2, Heart, Zap, Users, ChevronRight } from "lucide-react";
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
  detailedDescription: string;
  specifications: { [key: string]: string };
  benefits: string[];
  useCases: string[];
  gallery: string[];
}

const products: Product[] = [
  {
    id: "nfc-metal-card",
    name: "NFC Metal Card",
    price: 49.99,
    description: "The ultimate first impression. Tap to share your profile instantly.",
    detailedDescription: "Elevate your contractor brand with our premium NFC Metal Card. This sophisticated business card replacement uses cutting-edge Near Field Communication technology to instantly share your complete digital profile with homeowners. Simply tap the card against any smartphone to showcase your credentials, portfolio, contact information, and reviews.",
    features: ["Premium metal construction", "NFC technology", "Custom branding", "Instant profile sharing"],
    benefits: [
      "Make unforgettable first impressions with premium metal construction",
      "Instantly share your complete contractor profile and portfolio",
      "Never worry about running out of business cards again",
      "Track engagement and follow up with interested prospects",
      "Compatible with all modern smartphones (iPhone & Android)"
    ],
    useCases: [
      "Initial homeowner consultations and estimates",
      "Trade shows and networking events",
      "Door-to-door canvassing and lead generation",
      "Follow-up visits and project check-ins",
      "Referral sharing with satisfied customers"
    ],
    specifications: {
      "Material": "Premium stainless steel",
      "Dimensions": "3.375\" × 2.125\" × 0.03\"",
      "Technology": "NFC Type 2 (13.56 MHz)",
      "Compatibility": "iPhone 7+ & Android with NFC",
      "Durability": "Waterproof, scratch-resistant",
      "Customization": "Laser etching & color printing"
    },
    image: nfcMetalCardImg,
    gallery: [nfcMetalCardImg, nfcPlasticCardsImg, qrStickersImg],
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
    detailedDescription: "Keep your contractor business visible in your customers' homes with our weatherproof QR code fridge magnets. These professional-grade magnets feature your custom branding and a QR code that links directly to your digital profile, making it easy for homeowners to find your contact information, leave reviews, or refer you to neighbors.",
    features: ["Weatherproof QR code", "Custom branding", "Strong magnetic hold", "UV resistant"],
    benefits: [
      "Stay visible in customers' homes for ongoing referrals",
      "Professional branded appearance reinforces your credibility",
      "Weatherproof design works indoors and outdoors",
      "Strong magnetic hold ensures long-term placement",
      "Cost-effective marketing that works 24/7"
    ],
    useCases: [
      "Post-job completion follow-up",
      "Seasonal maintenance reminders",
      "Emergency contact information",
      "Review collection campaigns",
      "Neighbor referral programs"
    ],
    specifications: {
      "Material": "Weatherproof vinyl with strong magnet",
      "Dimensions": "3.5\" × 2\" × 0.125\"",
      "QR Code": "High-contrast, scannable design",
      "Magnet Strength": "35 lb pull force",
      "Durability": "UV resistant, weatherproof",
      "Customization": "Full-color printing available"
    },
    image: qrStickersImg,
    gallery: [qrStickersImg, reviewStickersImg, jobSiteStandImg],
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
    detailedDescription: "Equip your entire team with professional NFC Plastic Cards that deliver the same powerful digital profile sharing capabilities as our metal cards at a more accessible price point. Perfect for larger teams or contractors who want to test NFC technology before upgrading to premium options.",
    features: ["Durable plastic", "NFC enabled", "Team branding", "Cost effective"],
    benefits: [
      "Affordable way to equip your entire crew",
      "Same powerful NFC technology as premium cards",
      "Durable plastic construction withstands daily use",
      "Consistent branding across your whole team",
      "Perfect for testing NFC technology adoption"
    ],
    useCases: [
      "Team member introductions on job sites",
      "Crew lead contact sharing",
      "Subcontractor coordination",
      "Trade show booth interactions",
      "Customer service follow-ups"
    ],
    specifications: {
      "Material": "High-quality PVC plastic",
      "Dimensions": "3.375\" × 2.125\" × 0.03\"",
      "Technology": "NFC Type 2 (13.56 MHz)",
      "Compatibility": "iPhone 7+ & Android with NFC",
      "Durability": "Water-resistant, flexible",
      "Customization": "Digital printing & embossing"
    },
    image: nfcPlasticCardsImg,
    gallery: [nfcPlasticCardsImg, nfcMetalCardImg, reviewNfcStandImg],
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
    detailedDescription: "Transform your review collection strategy with these weatherproof QR code stickers. Each pack contains 10 professionally designed stickers that link directly to your Google Business profile, making it effortless for satisfied customers to leave reviews immediately after job completion when their satisfaction is highest.",
    features: ["10 weatherproof stickers", "QR code technology", "Easy application", "Review collection"],
    benefits: [
      "Capture reviews at peak customer satisfaction",
      "Weatherproof design works in all conditions",
      "Professional appearance maintains brand credibility",
      "Easy application saves time on every job",
      "Significant boost to online reputation and SEO"
    ],
    useCases: [
      "Post-completion review collection",
      "Job site signage for ongoing projects",
      "Equipment and vehicle branding",
      "Window and door installations",
      "Follow-up marketing campaigns"
    ],
    specifications: {
      "Quantity": "10 stickers per pack",
      "Material": "Weatherproof vinyl with strong adhesive",
      "Dimensions": "2\" × 2\" per sticker",
      "QR Code": "High-contrast, scannable design",
      "Adhesive": "Permanent, weather-resistant",
      "Customization": "Your Google Business Profile link"
    },
    image: reviewStickersImg,
    gallery: [reviewStickersImg, qrStickersImg, reviewNfcStandImg],
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
    detailedDescription: "Make your job sites work as lead generation tools with our professional Job Site Stand. This weatherproof display features your company branding and a prominent QR code that curious neighbors can scan to learn about your services, view your portfolio, and request estimates for their own projects.",
    features: ["Weather resistant", "Professional branding", "QR code display", "Portable design"],
    benefits: [
      "Turn every job site into a lead generation opportunity",
      "Professional appearance enhances your brand reputation",
      "Weatherproof construction ensures year-round durability",
      "Portable design allows easy setup and repositioning",
      "Generates qualified leads from interested neighbors"
    ],
    useCases: [
      "Residential job site marketing",
      "Neighborhood awareness campaigns",
      "Trade show and event displays",
      "Commercial project visibility",
      "Open house and demonstration events"
    ],
    specifications: {
      "Material": "Aluminum frame with weatherproof graphics",
      "Dimensions": "24\" × 36\" × 1.5\"",
      "Weight": "8 lbs (lightweight yet stable)",
      "Setup": "Tool-free assembly in under 2 minutes",
      "Durability": "Wind and weather resistant",
      "Customization": "Full custom branding and QR code"
    },
    image: jobSiteStandImg,
    gallery: [jobSiteStandImg, qrStickersImg, reviewStickersImg],
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
    detailedDescription: "Maximize your review collection with this elegant tabletop NFC stand. Place it prominently during consultations and project completion meetings to make requesting reviews feel natural and professional. The sleek design complements any home environment while the NFC technology makes leaving a review effortless for your customers.",
    features: ["NFC technology", "Tabletop design", "Review prompting", "Professional appearance"],
    benefits: [
      "Elegant design fits seamlessly in any home environment",
      "NFC technology makes review process effortless",
      "Increases review collection rates significantly",
      "Professional appearance reinforces your credibility",
      "Compact size perfect for carrying to every appointment"
    ],
    useCases: [
      "In-home consultations and estimates",
      "Project completion walkthroughs",
      "Customer service follow-ups",
      "Showroom and office displays",
      "Trade show booth interactions"
    ],
    specifications: {
      "Material": "Premium acrylic with weighted base",
      "Dimensions": "4\" × 6\" × 3\"",
      "Technology": "NFC Type 2 (13.56 MHz)",
      "Compatibility": "iPhone 7+ & Android with NFC",
      "Weight": "12 oz (stable yet portable)",
      "Customization": "Your Google Business Profile link"
    },
    image: reviewNfcStandImg,
    gallery: [reviewNfcStandImg, nfcMetalCardImg, nfcPlasticCardsImg],
    category: "Review Tools",
    rating: 4.8,
    reviews: 94,
    inStock: true
  }
];

const relatedProducts = [
  { id: "nfc-metal-card", name: "NFC Metal Card", price: 49.99, image: nfcMetalCardImg },
  { id: "nfc-plastic-card", name: "NFC Plastic Card", price: 19.99, image: nfcPlasticCardsImg },
  { id: "google-review-stickers", name: "Google Review Stickers", price: 24.99, image: reviewStickersImg }
];

const testimonials = [
  {
    name: "Mike Rodriguez",
    company: "Rodriguez Roofing",
    review: "The NFC Metal Cards are game-changers! Homeowners are blown away when I tap my card to their phone and my entire portfolio appears. I've closed 3 additional jobs just from neighbors who saw my work and scanned my card.",
    rating: 5,
    location: "Austin, TX"
  },
  {
    name: "Sarah Chen",
    company: "Chen Construction",
    review: "These review stickers have doubled our Google reviews in just 2 months. The weatherproof quality is excellent - they stay put through Texas storms and still scan perfectly.",
    rating: 5,
    location: "Dallas, TX"
  },
  {
    name: "James Thompson",
    company: "Thompson Home Improvements",
    review: "The job site stand has been incredible for lead generation. We've gotten 5 new customers just from neighbors walking by our current projects. Best marketing investment we've made!",
    rating: 5,
    location: "Houston, TX"
  }
];

interface ProductPageProps {
  productId: string;
  onNavigate: (pageId: string, productId?: string) => void;
}

export default function ProductPage({ productId, onNavigate }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = products.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="bg-[#020203] min-h-screen">
        <Header currentPage={"products"} onNavigate={onNavigate} />
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
            <Button onClick={() => onNavigate("products")} className="bg-[#007bff] hover:bg-[#0056b3]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="bg-[#020203] min-h-screen">
      <Header currentPage={"products"} onNavigate={onNavigate} />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-6 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
            <button 
              onClick={() => onNavigate("home")}
              className="hover:text-[#007bff] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <button 
              onClick={() => onNavigate("products")}
              className="hover:text-[#007bff] transition-colors"
            >
              Products
            </button>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-white truncate">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="mb-4 sm:mb-6">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#2a2a2a] p-4 sm:p-6 lg:p-8">
                  <img
                    src={product.gallery[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Image Gallery */}
              <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-[#2a2a2a] p-1 sm:p-2 border-2 transition-colors flex-shrink-0 ${
                      selectedImageIndex === index ? 'border-[#007bff]' : 'border-transparent hover:border-gray-600'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Product Title and Badges */}
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-[#007bff] text-xs sm:text-sm font-medium">{product.category}</span>
                  {product.isPopular && (
                    <Badge className="bg-[#007bff] text-white text-xs">Popular</Badge>
                  )}
                  {product.isNew && (
                    <Badge className="bg-green-600 text-white text-xs">New</Badge>
                  )}
                </div>
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">{product.rating}</span>
                  <span className="text-gray-400 text-sm sm:text-base">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg sm:text-xl text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  {product.detailedDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Key Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff] flex-shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Section */}
              <div className="border border-gray-700 rounded-xl p-4 sm:p-6 bg-[#0f0f0f]">
                {/* Quantity Selector */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <label className="text-white font-medium text-sm sm:text-base">Quantity:</label>
                  <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-[#1a1a1a] w-full sm:w-auto">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 sm:px-4 py-2 sm:py-3 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors text-sm sm:text-base"
                    >
                      −
                    </button>
                    <span className="px-4 sm:px-6 py-2 sm:py-3 bg-[#0f0f0f] text-white min-w-[60px] sm:min-w-[80px] text-center text-sm sm:text-base">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 sm:px-4 py-2 sm:py-3 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors text-sm sm:text-base"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white hover:from-[#0056b3] hover:to-[#007bff] shadow-lg hover:shadow-[#007bff]/25 transition-all duration-300 mb-4"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>

                {/* Secondary Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 border-gray-600 text-gray-300 hover:bg-[#1a1a1a]">
                    <Heart className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 border-gray-600 text-gray-300 hover:bg-[#1a1a1a]">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <Truck className="w-6 h-6 text-[#007bff] mb-2" />
                      <span className="text-sm text-gray-300">Free Shipping</span>
                      <span className="text-xs text-gray-500">On orders $75+</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Shield className="w-6 h-6 text-[#007bff] mb-2" />
                      <span className="text-sm text-gray-300">1-Year Warranty</span>
                      <span className="text-xs text-gray-500">Quality guaranteed</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Clock className="w-6 h-6 text-[#007bff] mb-2" />
                      <span className="text-sm text-gray-300">Fast Setup</span>
                      <span className="text-xs text-gray-500">Ready in 24hrs</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="benefits" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-[#1a1a1a] border border-gray-700">
              <TabsTrigger value="benefits" className="data-[state=active]:bg-[#007bff] data-[state=active]:text-white text-xs sm:text-sm">Benefits</TabsTrigger>
              <TabsTrigger value="specifications" className="data-[state=active]:bg-[#007bff] data-[state=active]:text-white text-xs sm:text-sm">Specs</TabsTrigger>
              <TabsTrigger value="use-cases" className="data-[state=active]:bg-[#007bff] data-[state=active]:text-white text-xs sm:text-sm">Use Cases</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-[#007bff] data-[state=active]:text-white text-xs sm:text-sm">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="benefits" className="mt-6 sm:mt-8">
              <div className="bg-[#0f0f0f] border border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Why Contractors Choose This Product</h3>
                <div className="space-y-3 sm:space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6 sm:mt-8">
              <div className="bg-[#0f0f0f] border border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 border-b border-gray-700 last:border-b-0 gap-1 sm:gap-0">
                      <span className="text-gray-400 font-medium text-sm sm:text-base">{key}:</span>
                      <span className="text-white text-sm sm:text-base">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="use-cases" className="mt-6 sm:mt-8">
              <div className="bg-[#0f0f0f] border border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Perfect For These Situations</h3>
                <div className="space-y-3 sm:space-y-4">
                  {product.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed text-sm sm:text-base">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[#0f0f0f] border border-gray-700 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007bff] to-[#00d4ff] rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.company} • {testimonial.location}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed italic">"{testimonial.review}"</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts
              .filter(p => p.id !== productId)
              .slice(0, 3)
              .map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#0f0f0f] border border-gray-700 rounded-xl overflow-hidden hover:border-[#007bff] transition-all duration-300 group cursor-pointer"
                  onClick={() => onNavigate("product", relatedProduct.id)}
                >
                  <div className="aspect-square bg-[#2a2a2a] p-6">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#007bff] transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-2xl font-bold text-[#007bff]">${relatedProduct.price}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}