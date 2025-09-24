"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { staggerChildren, fadeInUp } from "../../utils/animations";
import { Building2, Users, Share2, Star, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const steps = [
    {
      number: "01",
      title: "Brand Your Hub",
      description: "Sign up and customize your company's look — logo, colors, font — all in one place.",
      icon: Building2,
      color: "from-[#007bff] to-[#0056b3]",
      features: ["Custom branding", "Team dashboard", "Instant setup"],
      bgColor: "from-[#007bff]/5 to-[#0056b3]/10",
      borderColor: "[#007bff]/20"
    },
    {
      number: "02", 
      title: "Create Rep Pages",
      description: "Build digital profiles for your team with contact info, project photos, and certifications.",
      icon: Users,
      color: "from-[#00d4ff] to-[#007bff]",
      features: ["Individual profiles", "Photo galleries", "Certification display"],
      bgColor: "from-[#00d4ff]/5 to-[#007bff]/10",
      borderColor: "[#00d4ff]/20"
    },
    {
      number: "03",
      title: "Share Profiles. Build Trust.",
      description: "Send links before appointments so homeowners know who's showing up and why they can trust them.",
      icon: Share2,
      color: "from-[#10b981] to-[#059669]",
      features: ["Pre-appointment sharing", "Trust building", "Professional introduction"],
      bgColor: "from-[#10b981]/5 to-[#059669]/10",
      borderColor: "[#10b981]/20"
    },
    {
      number: "04",
      title: "Capture Reviews at Peak Satisfaction",
      description: "Use weatherproof QR stickers and NFC review cards to collect 5-star Google reviews right after job completion.",
      icon: Star,
      color: "from-[#f59e0b] to-[#d97706]",
      features: ["Weatherproof QR codes", "NFC technology", "Peak satisfaction timing"],
      bgColor: "from-[#f59e0b]/5 to-[#d97706]/10",
      borderColor: "[#f59e0b]/20"
    }
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Section Header */}
      <motion.div
        ref={ref}
        className="text-center mb-10 sm:mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007bff]/20 to-[#00d4ff]/20 text-[#00d4ff] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-[#007bff]/30">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          Simple Process
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          How It <span className="bg-gradient-to-r from-[#007bff] to-[#00d4ff] bg-clip-text text-transparent">Works</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Get your contractor business online and collecting 5-star reviews in just 4 simple steps
        </p>
      </motion.div>

      {/* Steps Grid - 2x2 Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Step Card */}
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${step.bgColor} backdrop-blur-sm border border-${step.borderColor} p-4 sm:p-6 lg:p-8 h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-[#007bff]/10`}>
              {/* Header Section */}
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                {/* Icon Container */}
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center relative overflow-hidden shadow-lg`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white relative z-10" />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Step Number */}
                <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 select-none`}>
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  {step.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} shadow-sm`} />
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Background Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <motion.div
                  className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${step.color} opacity-10 rounded-full blur-xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r ${step.color} opacity-5 rounded-full blur-lg`}
                  animate={{
                    scale: [1, 0.8, 1],
                    opacity: [0.05, 0.2, 0.05],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3 + 1,
                  }}
                />
              </div>

              {/* Step Connector Arrow */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal arrow for first row */}
                  {index === 0 && (
                    <motion.div
                      className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-8 h-8 bg-[#007bff] rounded-full flex items-center justify-center shadow-lg border border-[#007bff]/30">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Vertical arrow after second step */}
                  {index === 1 && (
                    <motion.div
                      className="hidden md:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10"
                      animate={{
                        y: [0, 5, 0],
                        rotate: 90,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-8 h-8 bg-[#00d4ff] rounded-full flex items-center justify-center shadow-lg border border-[#00d4ff]/30">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Horizontal arrow for second row (pointing left) */}
                  {index === 2 && (
                    <motion.div
                      className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 z-10"
                      animate={{
                        x: [0, -5, 0],
                        rotate: 180,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center shadow-lg border border-[#10b981]/30">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process Flow Line for Desktop */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" style={{ top: '50%', left: 0, transform: 'translateY(-50%)' }}>
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#007bff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 200 200 Q 400 200 600 200 Q 600 300 600 400 Q 400 400 200 400"
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, delay: 1 }}
          />
        </svg>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 text-[#00d4ff] text-sm font-medium hover:gap-3 transition-all duration-300 cursor-pointer">
          <span>Ready to get started?</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    </div>
  );
}