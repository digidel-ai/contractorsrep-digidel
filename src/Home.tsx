"use client";

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
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { 
  chromaGlow, 
  staggerContainer, 
  fadeInScale, 
  slideInFromLeft, 
  slideInFromRight 
} from "./utils/animations";

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

// Problem Section Component
function ProblemSection() {
  const problems = [
    {
      icon: Shield,
      title: "Homeowner Skepticism",
      description: "72% of homeowners don't trust door-to-door contractors",
      stat: "72%"
    },
    {
      icon: Users,
      title: "Generic First Impressions",
      description: "Sales reps blend in with every other contractor",
      stat: "89%"
    },
    {
      icon: Star,
      title: "Inconsistent Reviews",
      description: "Only 1 in 10 satisfied customers leave reviews",
      stat: "10%"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#020203] to-[#0a0a0f]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 border-red-500/30 text-red-400 bg-red-500/10">
            The Problem
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Homeowners Say 
            <span className="block text-red-400">"We'll Think About It"</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every roofing contractor faces the same challenges. Homeowners have heard the horror stories and built up walls of skepticism.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={fadeInScale}
              className="relative group"
            >
              <Card className="p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20 hover:border-red-400/40 transition-all duration-300 group-hover:scale-105">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <motion.div 
                      className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <problem.icon className="w-10 h-10 text-red-400" />
                    </motion.div>
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                      {problem.stat}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                    <p className="text-gray-300">{problem.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Solution Overview Section
function SolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#020203] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,123,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 border-[#007bff]/30 text-[#00d4ff] bg-[#007bff]/10">
            The Solution
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#00d4ff]">Contractor's Rep</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A complete digital credibility and reputation management suite designed specifically for roofing contractors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Benefits */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: "Build Instant Trust",
                  description: "Professional digital profiles sent before appointments create familiarity and comfort",
                  highlight: "89% higher close rates"
                },
                {
                  icon: Star,
                  title: "Capture Reviews at Peak Satisfaction",
                  description: "On-site review generation during the 'golden hour' when customers are happiest",
                  highlight: "3x more reviews"
                },
                {
                  icon: TrendingUp,
                  title: "Dominate Local Search",
                  description: "Consistent 5-star reviews boost your Google rankings and local visibility",
                  highlight: "Top 3 rankings"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#007bff]/10 to-transparent rounded-xl border border-[#007bff]/20 hover:border-[#007bff]/40 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007bff] to-[#00d4ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                      <Badge className="bg-[#00d4ff] text-black text-xs">{benefit.highlight}</Badge>
                    </div>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Display */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-[#007bff]/30 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold">Mike Johnson - Elite Roofer</h3>
                    <Badge className="bg-[#007bff] text-white">GAF Master Elite®</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-video bg-gradient-to-br from-[#007bff]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-[#00d4ff]" />
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-[#007bff]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                      <Award className="w-8 h-8 text-[#00d4ff]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span>127 Google Reviews • 4.9 Rating</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-[#00d4ff] mr-2" />
                      <span>23 Projects in Your Area</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#007bff] to-[#00d4ff] p-3 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Smartphone className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>

              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#007bff]/10 to-[#00d4ff]/10 rounded-2xl blur-xl -z-10 scale-110"
                animate={{ 
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Two-Stage Approach Section
function TwoStageSection() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: "Stage 1: Digital Foundation",
      subtitle: "Build Instant Credibility & Generate Reviews",
      description: "Professional digital profiles and on-site review capture system",
      features: [
        "Digital Sales Rep Profiles with credentials",
        "On-the-spot Google Review generation",
        "Professional portfolio showcase",
        "Interactive project mapping"
      ],
      results: "89% higher close rates, 3x more reviews",
      timeline: "Setup in 24 hours"
    },
    {
      id: 2,
      title: "Stage 2: Physical Brand Assets",
      subtitle: "Keep Your Brand Top-of-Mind",
      description: "NFC-enabled business cards and branded assets for long-term recall",
      features: [
        "Custom NFC business cards",
        "Branded refrigerator magnets",
        "Weatherproof QR stickers",
        "Professional marketing materials"
      ],
      results: "Year-round brand visibility, more referrals",
      timeline: "2-week production"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#020203] via-[#0a0a0f] to-[#020203]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 border-[#007bff]/30 text-[#00d4ff] bg-[#007bff]/10">
            Our Approach
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Two-Stage 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#00d4ff]">
              Success System
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with immediate credibility wins, then expand to long-term brand building
          </p>
        </motion.div>

        {/* Stage Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#1a1a1a] rounded-lg p-2 border border-gray-800">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeStage === stage.id
                    ? 'bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Stage {stage.id}
              </button>
            ))}
          </div>
        </div>

        {/* Stage Content */}
        {stages.map((stage) => (
          <motion.div
            key={stage.id}
            className={`${activeStage === stage.id ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-[#007bff] text-white">
                    {stage.title}
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {stage.subtitle}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    {stage.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {stage.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#00d4ff]" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-800">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Results</div>
                    <div className="text-[#00d4ff] font-semibold">{stage.results}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Timeline</div>
                    <div className="text-[#00d4ff] font-semibold">{stage.timeline}</div>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white hover:from-[#0056b3] hover:to-[#007bff] group"
                >
                  Start Stage {stage.id} Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual */}
              <div className="relative">
                <motion.div 
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 rounded-2xl border border-[#007bff]/30 shadow-2xl"
                  animate={stage.id === activeStage ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stage.id === 1 ? (
                    // Stage 1 Visual
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#007bff] to-[#00d4ff] rounded-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="h-4 bg-white/20 rounded w-40 mb-2"></div>
                          <div className="h-3 bg-white/10 rounded w-32"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-video bg-[#007bff]/20 rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-[#00d4ff]" />
                        </div>
                        <div className="aspect-video bg-[#007bff]/20 rounded-lg flex items-center justify-center">
                          <Star className="w-6 h-6 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Stage 2 Visual
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-[#007bff]/30">
                          <QrCode className="w-8 h-8 text-[#00d4ff]" />
                        </div>
                        <div className="h-24 bg-gradient-to-br from-[#007bff]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-8 h-8 text-[#00d4ff]" />
                        </div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="h-3 bg-white/10 rounded w-full"></div>
                        <div className="h-3 bg-white/10 rounded w-3/4 mx-auto"></div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-[#007bff] to-[#00d4ff] px-4 py-2 rounded-full shadow-lg"
                  animate={{ 
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-sm font-semibold">
                    {stage.id === 1 ? 'Fast Setup' : 'Premium Quality'}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Social Proof Section
function SocialProofSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Elite Roofing Solutions",
      avatar: "SC",
      rating: 5,
      quote: "Our close rate went from 23% to 67% in just two months. Homeowners actually look forward to meeting our reps now.",
      result: "+191% close rate increase"
    },
    {
      name: "Mike Rodriguez",
      company: "Peak Performance Roofing",
      avatar: "MR", 
      rating: 5,
      quote: "We went from 2-3 reviews per month to 40+. Our Google ranking jumped from page 3 to the #1 spot locally.",
      result: "1,200% more reviews"
    },
    {
      name: "David Thompson",
      company: "Apex Contractors",
      avatar: "DT",
      rating: 5,
      quote: "The digital profiles are game-changers. Customers research our team before we even arrive. Total trust builder.",
      result: "89% faster sales cycles"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#020203] to-[#0a0a0f]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 border-green-500/30 text-green-400 bg-green-500/10">
            Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Results from 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Real Contractors
            </span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInScale}
              className="group"
            >
              <Card className="p-8 h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-gray-800 hover:border-[#007bff]/40 transition-all duration-300 group-hover:scale-105">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007bff] to-[#00d4ff] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Result Badge */}
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    {testimonial.result}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { stat: "500+", label: "Contractors" },
            { stat: "12,000+", label: "Digital Profiles" }, 
            { stat: "89%", label: "Avg. Close Rate" },
            { stat: "4.9★", label: "Customer Rating" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#00d4ff]">
                {item.stat}
              </div>
              <div className="text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#007bff] via-[#0056b3] to-[#00d4ff] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Stop Losing Deals to 
            <span className="block">"We'll Think About It"?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 500+ roofing contractors who've transformed skeptical homeowners into confident customers with Contractor's Rep.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInScale}>
              <Button 
                size="lg"
                className="bg-white text-[#007bff] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group px-8 py-4 text-lg"
              >
                Get Started - Stage 1 (24hr Setup)
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInScale} transition={{ delay: 0.1 }}>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#007bff] transition-all duration-300 group px-8 py-4 text-lg"
              >
                <Clock className="mr-2 w-5 h-5" />
                Book 15-min Demo Call
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Clock, text: "Setup in 24 hours" },
              { icon: Shield, text: "No long-term contracts" },
              { icon: Target, text: "Results guaranteed" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2"
                variants={fadeInScale}
              >
                <item.icon className="w-8 h-8 text-white" />
                <span className="text-blue-100">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="bg-[#020203] text-white overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TwoStageSection />
      <SocialProofSection />
      <CTASection />
    </div>
  );
}