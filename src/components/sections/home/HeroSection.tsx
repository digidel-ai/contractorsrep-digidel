import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Shield, 
  Zap, 
  TrendingUp,
  Users,
  MapPin,
  Smartphone,
  QrCode,
  Award,
  Play,
  ChevronRight,
  Building,
  Target,
  Clock
} from "lucide-react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { 
  chromaGlow, 
  staggerContainer, 
  fadeInScale, 
  slideInFromLeft, 
  slideInFromRight 
} from "../../../utils/animations";

// Hero Section Component
function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020203] via-[#0a0a0f] to-[#020203]"
      style={{ y, opacity }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007bff]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInScale}>
              <Badge variant="outline" className="mb-6 border-[#007bff]/30 text-[#00d4ff] bg-[#007bff]/10">
                <Zap className="w-4 h-4 mr-2" />
                Trusted by 500+ Roofing Contractors
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              variants={slideInFromLeft}
            >
              Turn Skeptical 
              <span className="block">
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#00d4ff]"
                  animate={chromaGlow}
                >
                  Homeowners
                </motion.span>
              </span>
              Into Confident Customers
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              variants={slideInFromLeft}
              transition={{ delay: 0.2 }}
            >
              The complete digital credibility suite for roofing contractors. Build instant trust with professional sales rep profiles and capture reviews at the perfect moment.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInScale}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white hover:from-[#0056b3] hover:to-[#007bff] shadow-lg hover:shadow-[#007bff]/25 transition-all duration-300 group"
              >
                Start Building Trust Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-600 text-white hover:bg-white/10 group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo (2 min)
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-8 pt-8 border-t border-gray-800"
              variants={staggerContainer}
              transition={{ delay: 0.6 }}
            >
              {[
                { stat: "89%", label: "Higher Close Rate" },
                { stat: "3x", label: "More Reviews" },
                { stat: "24hr", label: "Setup Time" }
              ].map((item, index) => (
                <motion.div key={index} className="text-center" variants={fadeInScale}>
                  <div className="text-2xl font-bold text-[#00d4ff]">{item.stat}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Device Mockup */}
              <motion.div 
                className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-2 rounded-3xl shadow-2xl"
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden aspect-[9/19]">
                  {/* Mock Digital Profile */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#007bff] to-[#00d4ff] rounded-full"></div>
                      <div>
                        <div className="h-4 bg-white/20 rounded w-32"></div>
                        <div className="h-3 bg-white/10 rounded w-24 mt-2"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white/10 rounded w-full"></div>
                      <div className="h-3 bg-white/10 rounded w-3/4"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-20 bg-[#007bff]/20 rounded"></div>
                      <div className="h-20 bg-[#007bff]/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating NFC Card */}
              <motion.div
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-24 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-xl border border-[#007bff]/30"
                animate={{ 
                  x: [0, 10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <motion.div 
                  className="w-full h-full bg-gradient-to-br from-[#007bff]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center"
                  animate={chromaGlow}
                >
                  <QrCode className="w-8 h-8 text-[#00d4ff]" />
                </motion.div>
              </motion.div>

              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#007bff]/20 to-[#00d4ff]/20 rounded-full blur-3xl -z-10 scale-150"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1.2, 1.5, 1.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export { HeroSection };
