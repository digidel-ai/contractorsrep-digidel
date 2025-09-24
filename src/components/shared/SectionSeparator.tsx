"use client";

import { motion } from "framer-motion";

interface SectionSeparatorProps {
  variant?: 'wave' | 'diagonal' | 'curve' | 'geometric' | 'gradient';
  fromColor?: string;
  toColor?: string;
  height?: 'sm' | 'md' | 'lg';
  flip?: boolean;
}

export function SectionSeparator({ 
  variant = 'wave', 
  fromColor = '#020203', 
  toColor = '#1a1a1a',
  height = 'md',
  flip = false
}: SectionSeparatorProps) {
  const heightClasses = {
    sm: 'h-8 sm:h-12 lg:h-16',
    md: 'h-16 sm:h-24 lg:h-32',
    lg: 'h-24 sm:h-32 lg:h-48'
  };

  const WaveSeparator = () => (
    <svg
      className={`w-full ${heightClasses[height]} fill-current transition-all duration-300`}
      style={{ color: fromColor }}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      transform={flip ? 'scaleY(-1)' : undefined}
    >
      <motion.path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity="0.25"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
      />
    </svg>
  );

  const DiagonalSeparator = () => (
    <svg
      className={`w-full ${heightClasses[height]} fill-current`}
      style={{ color: fromColor }}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      transform={flip ? 'scaleY(-1)' : undefined}
    >
      <motion.polygon
        points="0,0 1200,120 1200,0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </svg>
  );

  const CurveSeparator = () => (
    <svg
      className={`w-full ${heightClasses[height]} fill-current`}
      style={{ color: fromColor }}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      transform={flip ? 'scaleY(-1)' : undefined}
    >
      <motion.path
        d="M0,0V120H1200V0C1200,0,600,120,0,0Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );

  const GeometricSeparator = () => (
    <div className={`w-full ${heightClasses[height]} relative overflow-hidden`}>
      <div 
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${fromColor} 0%, ${toColor} 100%)` }}
      >
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#007bff]/10 rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + (i % 2) * 30}%`,
                width: `${40 + i * 10}px`,
                height: `${40 + i * 10}px`,
              }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );

  const GradientSeparator = () => (
    <div 
      className={`w-full ${heightClasses[height]}`}
      style={{ 
        background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)` 
      }}
    >
      <motion.div
        className="w-full h-full bg-gradient-to-r from-transparent via-[#007bff]/5 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );

  const renderSeparator = () => {
    switch (variant) {
      case 'diagonal':
        return <DiagonalSeparator />;
      case 'curve':
        return <CurveSeparator />;
      case 'geometric':
        return <GeometricSeparator />;
      case 'gradient':
        return <GradientSeparator />;
      default:
        return <WaveSeparator />;
    }
  };

  return (
    <div className="relative w-full">
      {renderSeparator()}
    </div>
  );
}