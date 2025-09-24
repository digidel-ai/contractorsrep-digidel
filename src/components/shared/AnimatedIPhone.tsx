"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imgScreenReplaceHere1 from "figma:asset/c973c2eb85f796a06fe58c9b800779d4aae0cf2e.png";
import imgIStock469932909 from "figma:asset/0163f5904cd32b7a4ad66e8b47b0489ce42f5c2d.png";
import imgLens from "figma:asset/67830763f82fdf85511f01e79f2ade1854493d70.png";
import { imgScreenReplaceHere } from "../../imports/svg-8e0g0";

export function AnimatedIPhone({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const sizeClasses = {
    small: "h-[150px] w-[140px]",
    default: "h-[180px] sm:h-[200px] lg:h-[215px] w-[160px] sm:w-[180px] lg:w-[196px]",
    large: "h-[250px] w-[230px]"
  };

  return (
    <motion.div
      ref={ref}
      className={`${sizeClasses[size]} overflow-clip relative shadow-[0px_-4.623px_20.27px_0px_rgba(0,0,0,0.1),0px_-13.514px_14.225px_0px_rgba(255,255,255,0.1),0px_29.161px_44.453px_0px_rgba(0,0,0,0.15),0px_13.158px_13.158px_0px_rgba(0,0,0,0.25)] shrink-0 mx-auto lg:mx-0`}
      data-name="iPhone 14 Pro"
      initial={{ opacity: 0, y: 20, rotateY: -15 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateY: 0,
      } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Phone Body */}
      <motion.div
        className="absolute contents inset-[0.13%_1.56%_-86.5%_0.99%]"
        animate={isInView ? { 
          y: [0, -3, 0],
        } : {}}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Screen Background */}
        <div className="absolute bg-[#000000] inset-[0.29%_1.82%_-86.34%_1.26%] pointer-events-none rounded-[28.645px]">
          <div aria-hidden="true" className="absolute border-[#989892] border-[2.249px] border-solid inset-0 rounded-[28.645px]" />
          <div className="absolute inset-0 shadow-[0px_0px_0.173px_2.422px_inset_#3f3f3f]" />
        </div>
        
        {/* Screen Content */}
        <motion.div
          className="absolute contents left-[9.28px] top-[7.75px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div
            className="absolute inset-[3.6%_4.98%_-83.13%_4.73%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[176.961px_385.97px]"
            style={{ maskImage: `url('${imgScreenReplaceHere}')` }}
          >
            <img
              className="block max-w-none size-full"
              height="385.97"
              src={imgScreenReplaceHere1}
              width="176.961"
            />
          </div>
          <div
            className="absolute bg-[#ffffff] bg-size-[100%_261.42%,auto] h-[400.854px] left-[4.74px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.533px_1.041px] mask-size-[176.961px_385.97px] top-[6.71px] w-[185.23px]"
            style={{
              backgroundImage: `url('${imgIStock469932909}')`,
              maskImage: `url('${imgScreenReplaceHere}')`,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Phone Hardware Details */}
      <div className="absolute contents inset-[0.13%_1.51%_-86.54%_0.94%]">
        <div className="absolute bg-[rgba(154,169,177,0.5)] inset-[185.25%_78.24%_-86.54%_20.45%]" />
        <div className="absolute bg-[rgba(228,228,227,0.65)] inset-[0.13%_20.77%_98.61%_77.67%]" />
      </div>

      {/* Notch */}
      <div className="absolute contents inset-[1.79%_43.26%_96.93%_42.5%]">
        <div className="absolute bg-[#141414] inset-[1.79%_43.26%_96.93%_42.5%] pointer-events-none rounded-[5.012px]">
          <div aria-hidden="true" className="absolute border-[#0e0e0e] border-[0.167px] border-solid inset-0 rounded-[5.012px]" />
        </div>
      </div>

      {/* Front Camera */}
      <motion.div
        className="absolute contents left-[74.05px] top-[13.89px]"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <div className="absolute bg-neutral-950 h-[13.139px] left-[74.05px] rounded-[6.235px] top-[13.89px] w-[48.009px]" />
        <div className="absolute h-[13.139px] left-[108.71px] top-[13.89px] w-[13.348px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <ellipse cx="6.67394" cy="6.5693" fill="#0A0A0A" rx="6.67394" ry="6.5693" />
          </svg>
        </div>
        <div className="absolute inset-[7.89%_39.3%_88.77%_57.05%] opacity-70">
          <div className="absolute inset-[-3.27%_-3.28%]">
            <img className="block max-w-none size-full" height="7.654" src={imgLens} width="7.632" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}