"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  staggerChildren,
  fadeInLeft
} from "../../utils/animations";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  Users,
  Zap,
} from "lucide-react";
import imgTapOnMockup from "figma:asset/1fcfa02f1e44091bd03898996b14dce413c48ba3.png";
import rogueMoveDigitalLogo from "figma:asset/0f7035222fb107f816fd4cabb6a188d5f4785405.png";

export function HeroSection({ onNavigate }: { onNavigate?: (pageId: string) => void }) {
  return (
    <>
      <motion.div
        className="relative min-h-screen flex items-center justify-center overflow-hidden sticky-header-ticker-spacing"
        data-name="hero"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020203] via-[#0a0a0b] to-[#020203]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,123,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,123,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          {/* Orbs */}
          <motion.div
            className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-[#007bff]/20 to-[#00d4ff]/20 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-[#00d4ff]/10 to-[#007bff]/10 rounded-full blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {/* Mobile/Top Heading */}
            <motion.div variants={fadeInLeft} transition={{ delay: 0.05 }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-center lg:text-left">
                Turn Skeptical{" "}
                <span className="bg-gradient-to-r from-[#007bff] to-[#00d4ff] bg-clip-text text-transparent">
                  Homeowners
                </span>{" "}
                Into Confident{" "}
                <span className="bg-gradient-to-r from-[#00d4ff] to-[#007bff] bg-clip-text text-transparent">
                  Customers
                </span>
              </h1>
            </motion.div>

            {/* Mobile/Second: Image First */}
            <motion.div
              className="relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#007bff]/20 to-[#00d4ff]/20 rounded-3xl blur-3xl scale-110 animate-pulse"></div>

              <motion.div
                className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-800/50 backdrop-blur-sm"
                animate={{ y: [0, -10, 0], rotateY: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={imgTapOnMockup}
                  alt="Digital Profile Mockup"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-[#007bff] to-[#00d4ff] rounded-xl p-2 sm:p-4 shadow-xl"
                  animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-white/20"
                  animate={{ y: [0, 5, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-400" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Remaining Content - Badge, Subtitle, Stats, CTA */}
            <motion.div
              className="space-y-6 lg:space-y-8 order-2 text-center lg:text-left"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInLeft}>
                <Badge className="bg-gradient-to-r from-[#007bff]/20 to-[#00d4ff]/20 text-[#00d4ff] border-[#007bff]/30 px-4 py-2 text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  #1 Digital Profile Solution for Contractors
                </Badge>
              </motion.div>

              <motion.div variants={fadeInLeft} transition={{ delay: 0.1 }}>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  The Complete Digital Credibility Suite for Modern Contractors.
                  Build trust instantly, showcase your work professionally, and close more deals.
                </p>
              </motion.div>

              <motion.div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6" variants={fadeInLeft} transition={{ delay: 0.2 }}>
                <div className="flex items-center gap-2 text-white">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-sm sm:text-base">4.9/5</span>
                  <span className="text-gray-400 text-sm sm:text-base">Rating</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff]" />
                  <span className="font-semibold text-sm sm:text-base">10,000+</span>
                  <span className="text-gray-400 text-sm sm:text-base">Contractors</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="font-semibold text-sm sm:text-base">85%</span>
                  <span className="text-gray-400 text-sm sm:text-base">More Leads</span>
                </div>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={fadeInLeft} transition={{ delay: 0.3 }}>
                <Button
                  size="lg"
                  onClick={() => onNavigate?.("waitlist")}
                  className="bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white hover:from-[#0056b3] hover:to-[#007bff] shadow-xl hover:shadow-[#007bff]/25 transition-all duration-300 group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg cursor-pointer w-full sm:w-auto"
                >
                  Join the Beta Waitlist
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate?.("waitlist")}
                  className="border-gray-600 text-[rgba(255,255,255,1)] hover:bg-white/10 hover:border-[#007bff] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group bg-[rgba(0,0,0,1)] cursor-pointer w-full sm:w-auto"
                >
                  <Users className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Reserve Your Spot
                </Button>
              </motion.div>

              <motion.div className="pt-4 space-y-3 text-center lg:text-left" variants={fadeInLeft} transition={{ delay: 0.4 }}>
                <div className="text-xs sm:text-sm text-gray-400">
                  ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base text-gray-400 mt-3">
                  <span className="font-medium">Powered by</span>
                  <motion.a
                    href="https://rogue-move.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={rogueMoveDigitalLogo}
                      alt="Rogue Move Digital"
                      className="h-6 sm:h-8 w-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                    />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-[#007bff] to-[#00d4ff] rounded-full mx-auto"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Wave Separator */}
      <div className="relative">
        <svg className="absolute top-0 left-0 w-full h-24 text-[#020203] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2..." opacity=".25" />
          <path d="M0,0V15.81C13,36.92..." opacity=".5" />
          <path d="M0,0V5.63C149.93,59..." />
        </svg>
        <div className="h-32 bg-gradient-to-b from-[#020203] via-[#0a0a0b] to-[#1a1a1a]"></div>
      </div>
    </>
  );
}