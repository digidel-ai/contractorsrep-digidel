"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionSeparator } from "./SectionSeparator";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'dark' | 'darker' | 'gradient' | 'custom';
  customBg?: string;
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  separator?: {
    top?: {
      variant?: 'wave' | 'diagonal' | 'curve' | 'geometric' | 'gradient';
      fromColor?: string;
      toColor?: string;
      height?: 'sm' | 'md' | 'lg';
      flip?: boolean;
    };
    bottom?: {
      variant?: 'wave' | 'diagonal' | 'curve' | 'geometric' | 'gradient';
      fromColor?: string;
      toColor?: string;
      height?: 'sm' | 'md' | 'lg';
      flip?: boolean;
    };
  };
  animation?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = '',
  background = 'dark',
  customBg,
  paddingY = 'lg',
  separator,
  animation = true
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const backgroundClasses = {
    dark: 'bg-[#020203]',
    darker: 'bg-[#0a0a0b]',
    gradient: 'bg-gradient-to-br from-[#020203] via-[#0a0a0b] to-[#1a1a1a]',
    custom: ''
  };

  const paddingClasses = {
    none: '',
    sm: 'py-4 sm:py-6 lg:py-8',
    md: 'py-8 sm:py-12 lg:py-16',
    lg: 'py-12 sm:py-16 lg:py-24',
    xl: 'py-16 sm:py-24 lg:py-32'
  };

  const containerStyle = customBg && background === 'custom' 
    ? { background: customBg }
    : {};

  return (
    <div className="relative">
      {/* Top Separator */}
      {separator?.top && (
        <SectionSeparator {...separator.top} />
      )}
      
      {/* Main Section */}
      <motion.section
        ref={ref}
        id={id}
        className={`
          relative w-full
          ${backgroundClasses[background]}
          ${paddingClasses[paddingY]}
          ${className}
        `}
        style={containerStyle}
        initial={animation ? { opacity: 0, y: 50 } : {}}
        animate={animation && isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,123,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,123,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:75px_75px] lg:bg-[size:100px_100px]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        
        {/* Floating Elements - Hidden on mobile for performance */}
        <motion.div
          className="absolute top-4 sm:top-10 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-[#007bff]/5 to-[#00d4ff]/5 rounded-full blur-2xl hidden sm:block"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-[#00d4ff]/5 to-[#007bff]/5 rounded-full blur-2xl hidden sm:block"
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.section>
      
      {/* Bottom Separator */}
      {separator?.bottom && (
        <SectionSeparator {...separator.bottom} />
      )}
    </div>
  );
}