"use client";

import { motion } from "motion/react";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export function ProductionTicker({ onNavigate }: { onNavigate: (pageId: string) => void }) {
  return (
    <motion.div
      className="relative w-full bg-gradient-to-r from-[#007bff] to-[#00d4ff] py-3 px-4 overflow-hidden sticky top-[80px] z-40"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between gap-2 sm:gap-4 text-white">
        {/* Left side - Icons and message */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          {/* Icon */}
          <motion.div
            className="hidden sm:flex items-center gap-2 flex-shrink-0"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.div>

          {/* Main message */}
          <motion.p
            className="text-[11px] sm:text-sm lg:text-base font-medium min-w-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-bold">Contractor's Rep is in production.</span>{" "}
            <span className="hidden sm:inline">Join the waitlist and be the first to try it.</span>
            <span className="sm:hidden">Join waitlist!</span>
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => onNavigate("waitlist")}
              size="sm"
              className="bg-white text-[#007bff] hover:bg-white/90 font-semibold px-3 sm:px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-1 sm:gap-2 cursor-pointer text-[11px] sm:text-sm"
            >
              <span className="hidden sm:inline">Get Early Access</span>
              <span className="sm:hidden">Join</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}