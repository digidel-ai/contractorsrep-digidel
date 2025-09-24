"use client";

import { motion } from 'motion/react';
import imgGenerateAnImageOfRoofingContractorWearingCapAndPoloTShirtStandingAndHappyFace from "figma:asset/c0a43bec4e30bd43870af1fe29af2234383ab05c.png";
import imgFrame100001559411 from "figma:asset/19dab61f9a80f86a4a7abfaed02b957584f0918a.png";
import { imgGenerateAnImageOfRoofingContractorWearingCapAndPoloTShirtStandingAndHappyFace1 } from "../../imports/svg-1udkp";

function Frame1000015596() {
  return (
    <motion.div 
      className="box-border content-stretch flex flex-col gap-6 sm:gap-8 lg:gap-[33px] items-start justify-start not-italic p-0 relative shrink-0 text-left w-full max-w-[541px] text-center sm:text-left"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="capitalize font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#ffffff] w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <p className="block leading-[1.2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px]">
          Everything You Need to Build Trust, Close Faster, and Grow Smarter
        </p>
      </motion.div>
      <motion.div 
        className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#f0f0f0] w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <p className="leading-[1.4] text-sm sm:text-base lg:text-lg xl:text-[20px]">
          <span>{`Contractor's Rep isn't just another software tool. It's your full-stack credibility engine—purpose-built for contractor sales teams who operate in the real world. From rep profiles to review generation, from brand control to future-ready analytics, this platform does one thing well: Help you close more deals by building trust faster. `}</span>
          <span className="font-['Poppins:Bold',_sans-serif] not-italic">{`Help you close more deals by building trust faster. `}</span>
        </p>
      </motion.div>
    </motion.div>
  );
}

function MaskGroup() {
  return (
    <motion.div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative"
      data-name="Mask group"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="[grid-area:1_/_1] bg-[78.21%_14.42%] bg-no-repeat bg-size-[99.74%_108.49%] h-[227.315px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[82.199px_-1.167px] mask-size-[125.924px_125.922px] ml-[-82.199px] mt-[1.167px] w-[247.255px]"
        data-name="Generate an image of Roofing Contractor Wearing Cap and Polo T Shirt standing and happy face"
        style={{
          backgroundImage: `url('${imgGenerateAnImageOfRoofingContractorWearingCapAndPoloTShirtStandingAndHappyFace}')`,
          maskImage: `url('${imgGenerateAnImageOfRoofingContractorWearingCapAndPoloTShirtStandingAndHappyFace1}')`,
        }}
      />
    </motion.div>
  );
}

function Group1000011001() {
  return (
    <motion.div 
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[332.891px] mt-0 place-items-start relative"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="[grid-area:1_/_1] ml-[0.001px] mt-0 relative size-[125.922px]"
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 126 126"
        >
          <circle
            cx="62.9609"
            cy="62.9609"
            fill="var(--fill-0, #0065D0)"
            id="Ellipse 2478"
            r="62.9609"
          />
        </svg>
      </motion.div>
      <MaskGroup />
    </motion.div>
  );
}

function HeroImage2() {
  return (
    <motion.div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full max-w-[519px] mx-auto sm:mx-0"
      data-name="Hero_Image2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="[grid-area:1_/_1] bg-[99.87%_27.14%] bg-no-repeat bg-size-[100.07%_116.64%] h-[300px] sm:h-[380px] lg:h-[478.801px] ml-0 mt-[20px] sm:mt-[25px] lg:mt-[30.123px] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[518.787px]"
        data-name="Frame 1000015594 (1) 1"
        style={{ backgroundImage: `url('${imgFrame100001559411}')` }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />
      <Group1000011001 />
    </motion.div>
  );
}

function Frame1000015592() {
  return (
    <motion.div 
      className="box-border content-stretch flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center justify-center leading-[0] p-0 relative shrink-0 max-w-6xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="order-2 lg:order-1 flex-1">
        <Frame1000015596 />
      </div>
      <div className="order-1 lg:order-2 flex-shrink-0">
        <HeroImage2 />
      </div>
    </motion.div>
  );
}

export function FeaturesHeroSection() {
  return (
    <div className="relative w-full bg-[#020203]" data-name="Container">
      <div className="flex flex-col items-center justify-center relative w-full">
        <motion.div 
          className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative w-full sticky-header-ticker-spacing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Frame1000015592 />
        </motion.div>
      </div>
    </div>
  );
}