"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/", id: "home", available: true },
  { name: "Features", href: "/features", id: "features", available: true },
  { name: "Shop Now", href: "/products", id: "products", available: true },
  { name: "Solutions", href: "/solutions", id: "solutions", available: false },
  { name: "Pricing", href: "/pricing", id: "pricing", available: false },
  { name: "Resources", href: "/resources", id: "resources", available: false },
];

// Filter to only show available pages
const availableNavItems = navigationItems.filter(item => item.available);

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (pageId: string) => void;
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const [activeItem, setActiveItem] = useState(currentPage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update active item when currentPage prop changes
  useEffect(() => {
    setActiveItem(currentPage);
  }, [currentPage]);

  const handleNavClick = useCallback((id: string) => {
    setActiveItem(id);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    if (onNavigate) {
      onNavigate(id);
    }
  }, [onNavigate]);

  return (
    <>
      <motion.div
        className="backdrop-blur-[20px] backdrop-filter bg-[rgba(2,2,3,0.85)] border-b border-[rgba(255,255,255,0.05)] h-[80px] shrink-0 sticky top-0 w-full z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        data-name="header"
      >
        <div className="flex flex-row items-center justify-between px-4 sm:px-6 lg:px-16 relative size-full">
        {/* Logo Section */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick("home")}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-[#007bff] to-[#0056b3] rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-6 h-6 border-2 border-white rounded transform rotate-45" />
            </motion.div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-[#00d4ff] to-[#007bff] rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="font-['SF_Pro:Bold',_sans-serif] text-white text-[16px] sm:text-[18px] lg:text-[20px] tracking-[-0.5px] leading-none">
              Contractors Rep
            </div>
            <div className="font-['SF_Pro:Regular',_sans-serif] text-[#00d4ff] text-[8px] sm:text-[9px] lg:text-[10px] tracking-[2px] uppercase leading-none mt-0.5">
              Future Ready
            </div>
          </div>
        </motion.div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden lg:flex items-center space-x-1">
          {availableNavItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative px-6 py-2.5 rounded-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background for active/hover state */}
              <motion.div
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  activeItem === item.id
                    ? "bg-gradient-to-r from-[rgba(0,123,255,0.2)] to-[rgba(0,212,255,0.1)] border border-[rgba(0,123,255,0.3)]"
                    : "bg-transparent group-hover:bg-[rgba(255,255,255,0.05)] group-hover:border group-hover:border-[rgba(255,255,255,0.1)]"
                }`}
                layoutId={activeItem === item.id ? "activeBackground" : undefined}
              />
              
              {/* Text */}
              <span
                className={`relative z-10 font-['Figtree:Medium',_sans-serif] text-[15px] transition-all duration-300 ${
                  activeItem === item.id
                    ? "text-[#00d4ff] font-semibold"
                    : "text-[#e0e0e0] group-hover:text-white"
                }`}
              >
                {item.name}
              </span>

              {/* Active indicator */}
              {activeItem === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#00d4ff] rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ x: "-50%" }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* CTA Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Contact Link - Hidden on mobile and tablet */}
          <motion.button
            className="hidden xl:flex items-center gap-2 px-3 py-2 text-[#e0e0e0] hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
            <span className="font-['Figtree:Medium',_sans-serif] text-[12px] lg:text-[14px]">
              Talk to Sales
            </span>
          </motion.button>

          {/* Demo Button - Responsive sizing */}
          <motion.button
            className="hidden sm:block relative overflow-hidden bg-gradient-to-r from-[#007bff] to-[#0056b3] hover:from-[#0056b3] hover:to-[#003d82] px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-['Figtree:Semibold',_sans-serif] text-white text-[12px] sm:text-[13px] lg:text-[14px] transition-all duration-300 shadow-lg shadow-[rgba(0,123,255,0.25)]"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              whileHover={{
                opacity: [0, 0.1, 0],
                x: [-100, 100],
              }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Book Demo</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>
      </div>

        {/* Subtle glow effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007bff] to-transparent opacity-50" />
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-[rgba(2,2,3,0.95)] backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full p-6">
              <motion.nav
                className="flex flex-col items-center space-y-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {availableNavItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="relative px-6 py-3 rounded-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    {/* Background for active/hover state */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        activeItem === item.id
                          ? "bg-gradient-to-r from-[rgba(0,123,255,0.2)] to-[rgba(0,212,255,0.1)] border border-[rgba(0,123,255,0.3)]"
                          : "bg-transparent group-hover:bg-[rgba(255,255,255,0.05)] group-hover:border group-hover:border-[rgba(255,255,255,0.1)]"
                      }`}
                    />
                    
                    {/* Text */}
                    <span
                      className={`relative z-10 font-['Figtree:Medium',_sans-serif] text-[20px] transition-all duration-300 ${
                        activeItem === item.id
                          ? "text-[#00d4ff] font-semibold"
                          : "text-[#e0e0e0] group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </motion.nav>

              {/* Mobile CTA Buttons */}
              <motion.div
                className="flex flex-col items-center gap-4 mt-12"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 text-[#e0e0e0] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
                  <span className="font-['Figtree:Medium',_sans-serif] text-[16px]">
                    Talk to Sales
                  </span>
                </motion.button>

                <motion.button
                  className="relative overflow-hidden bg-gradient-to-r from-[#007bff] to-[#0056b3] hover:from-[#0056b3] hover:to-[#003d82] px-8 py-4 rounded-xl font-['Figtree:Semibold',_sans-serif] text-white text-[16px] transition-all duration-300 shadow-lg shadow-[rgba(0,123,255,0.25)]"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Book Demo</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}