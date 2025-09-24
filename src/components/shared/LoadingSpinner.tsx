"use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dots' | 'bars' | 'spinner' | 'pulse';
  color?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'dots',
  color = '#007bff' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerSizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const DotsLoader = () => (
    <div className={`flex items-center justify-center space-x-2 ${containerSizes[size]}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizeClasses[size]} rounded-full`}
          style={{ backgroundColor: color }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  const BarsLoader = () => (
    <div className={`flex items-end justify-center space-x-1 ${containerSizes[size]}`}>
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className="w-1 rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            height: ["20%", "100%", "20%"],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  const SpinnerLoader = () => (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-gray-700 rounded-full`}
      style={{ borderTopColor: color }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );

  const PulseLoader = () => (
    <motion.div
      className={`${sizeClasses[size]} rounded-full`}
      style={{ backgroundColor: color }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.3, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  const renderLoader = () => {
    switch (variant) {
      case 'bars':
        return <BarsLoader />;
      case 'spinner':
        return <SpinnerLoader />;
      case 'pulse':
        return <PulseLoader />;
      default:
        return <DotsLoader />;
    }
  };

  return (
    <div className="flex items-center justify-center">
      {renderLoader()}
    </div>
  );
}