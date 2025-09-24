"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Zap } from "lucide-react";

export function WaitlistHeroSection() {
  const benefits = [
    {
      icon: Users,
      text: "First Access to test our exclusive beta release before public launch"
    },
    {
      icon: Zap,
      text: "Influence the Features with your feedback shaping the final product"
    },
    {
      icon: Sparkles,
      text: "Exclusive Launch Pricing only for early sign-ups"
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020203] via-[#0a0a0b] to-[#1a1a1a] overflow-hidden sticky-header-spacing">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#007bff]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-60 h-60 sm:w-96 sm:h-96 bg-[#00d4ff]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <motion.div
          className="space-y-6 sm:space-y-8 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007bff]/20 to-[#00d4ff]/20 text-[#00d4ff] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-[#007bff]/30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Early Access Available
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Be the First to Unlock{" "}
            <span className="bg-gradient-to-r from-[#007bff] to-[#00d4ff] bg-clip-text text-transparent">
              Contractor's Rep
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The all-in-one digital credibility suite built to help contractors win more bids, close faster, and look like the pro homeowners trust. Secure your early access today.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-gray-800/50 hover:border-[#007bff]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#007bff] to-[#00d4ff] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}