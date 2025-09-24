"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerChildren, fadeInUp } from "../../utils/animations";
import rogueMoveDigitalLogo from "figma:asset/0f7035222fb107f816fd4cabb6a188d5f4785405.png";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const footerLinks = {
    Platform: ['Dashboard', 'Analytics', 'Integrations', 'API Access'],
    Products: ['NFC Cards', 'QR Stickers', 'Review Tools', 'Job Site Stands'],
    Company: ['About Us', 'Careers', 'Press', 'Partners'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full bg-gradient-to-b from-[#0a0a0b] to-[#020203] border-t border-gray-800/50"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      data-name="footer"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-8 sm:mb-12"
          variants={staggerChildren}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Company Info - Matches Header Style */}
          <motion.div
            className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left"
            variants={fadeInUp}
          >
            {/* Logo Section - Matching Header */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer mb-4 sm:mb-6 justify-center lg:justify-start"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#007bff] to-[#0056b3] rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded transform rotate-45" />
                </motion.div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-[#00d4ff] to-[#007bff] rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col">
                <div className="font-['SF_Pro:Bold',_sans-serif] text-white text-[20px] sm:text-[24px] tracking-[-0.5px] leading-none">
                  Contractors Rep
                </div>
                <div className="font-['SF_Pro:Regular',_sans-serif] text-[#00d4ff] text-[10px] sm:text-[12px] tracking-[2px] uppercase leading-none mt-1">
                  Future Ready
                </div>
              </div>
            </motion.div>

            <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              The complete digital credibility suite for modern contractors. Build trust instantly, showcase your work professionally, and close more deals.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 justify-center lg:justify-start">
              <div className="flex items-center gap-3 text-gray-400 justify-center lg:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#007bff]" />
                <span className="text-sm sm:text-base">hello@contractorsrep.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-center lg:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#007bff]" />
                <span className="text-sm sm:text-base">1-800-CONTRACTOR</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#007bff]" />
                <span className="text-sm sm:text-base">Available Nationwide</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center lg:text-left"
            variants={staggerChildren}
          >
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                className="space-y-3 sm:space-y-4"
                variants={fadeInUp}
                custom={index}
              >
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  {category}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href="#"
                        className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 text-xs sm:text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800/50 pt-6 sm:pt-8"
          variants={fadeInUp}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
            {/* Copyright */}
            <div className="text-gray-500 text-xs sm:text-sm order-2 sm:order-1">
              © 2025, Contractors Rep Technologies. All rights reserved.
            </div>

            {/* Rogue Move Digital Attribution */}
            <motion.a
              href="https://rogue-move.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#0f0f0f] rounded-lg border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 cursor-pointer order-1 sm:order-2"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-gray-400 text-sm sm:text-base font-medium">Powered by</span>
              <img
                src={rogueMoveDigitalLogo}
                alt="Rogue Move Digital"
                className="h-8 sm:h-10 w-auto hover:scale-105 transition-transform duration-300"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#007bff] to-transparent opacity-50" />
    </motion.div>
  );
}