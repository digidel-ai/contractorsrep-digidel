"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  staggerChildren,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "../../utils/animations";
import svgPaths from "../../imports/svg-zgipksbc8y";
import imgScreenReplaceHere1 from "figma:asset/c973c2eb85f796a06fe58c9b800779d4aae0cf2e.png";
import imgIStock469932909 from "figma:asset/0163f5904cd32b7a4ad66e8b47b0489ce42f5c2d.png";
import imgLens from "figma:asset/67830763f82fdf85511f01e79f2ade1854493d70.png";
import imgImage from "figma:asset/98ce7e5c25f4caff1dfd2939d6feaf68f7c16386.png";
import imgGroup10000110241 from "figma:asset/31543888ab33967186dbb5a71fc00b09b0d9acf2.png";
import imgImage1 from "figma:asset/30e7801ffd1cca50a90c349330f79cc5698aa708.png";
import imgAiPoweredBusinessCardScanner1 from "figma:asset/bffdeff540055c4a028fc11c46dd92764fdb9d82.png";
import imgImage2 from "figma:asset/1c2613a4e4946cb4a836c81a3ddc75d6538bacf6.png";
import imgIPhone14Pro71 from "figma:asset/96337ca4ffd69cb563252fedc336d2e8d0f2f91c.png";
import imgImage3 from "figma:asset/efeb3ba2a8ea6a94d56f01d45d211994495ace61.png";
import imgCustomizeYourProfile from "figma:asset/541fc283baf36ee53bfe8dbb36a820b4c3ee3561.png";
import imgCustomizeYourProfile1 from "figma:asset/2ca5456cbd9d21ddba2d736dbab8c4b874453464.png";
import imgCustomizeYourProfile2 from "figma:asset/119ce05ccdf3e8a8c87fd43c594082c5d3733a3a.png";
import imgImage4 from "figma:asset/a840d89415f3f8b0a258e89fa8df80fc8461f8d4.png";
import imgIPhone14Pro31 from "figma:asset/9498a9aa432ab15ef5c03a6e188e10559c6011e0.png";
import imgRecapDevice59195646FigmaSiteDemoProfile311 from "figma:asset/7165ed5df6ee84caee824c88d7ebd04c40bf9eb2.png";
import imgGroup100001102421 from "figma:asset/8912769fac2a9912a07b1b7b64fe1abb112de2dc.png";
import { imgScreenReplaceHere } from "../../imports/svg-87gjn";

export function WhyTopContractorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 810);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile Card Component - Image first, then content
  function MobileCard({ 
    title, 
    description, 
    image, 
    imageStyle = "bg-center bg-cover bg-no-repeat",
    imageClassName = "h-[180px] w-full rounded-lg",
    delay = 0 
  }: {
    title: string;
    description: string;
    image: string;
    imageStyle?: string;
    imageClassName?: string;
    delay?: number;
  }) {
    return (
      <motion.div
        className="bg-[#120b19] relative rounded-[15px] w-full overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.02, y: -3 }}
      >
        <div className="p-6">
          {/* Image First */}
          <div className="mb-4">
            <div
              className={`${imageClassName} ${imageStyle} mx-auto`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          </div>
          
          {/* Content Below */}
          <div className="text-center space-y-3">
            <h3 className="font-['Poppins:Medium',_sans-serif] text-[#ffffff] text-lg leading-tight">
              {title}
            </h3>
            <p className="font-['Poppins:Regular',_sans-serif] text-[#a7a7a7] text-sm leading-[1.6]">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Mobile QR Code Grid Component
  function MobileQRCard({ delay = 0 }: { delay?: number }) {
    return (
      <motion.div
        className="bg-[#120b19] relative rounded-[15px] w-full overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.02, y: -3 }}
      >
        <div className="p-6">
          {/* QR Code Grid First */}
          <div className="mb-4">
            <div className="grid grid-cols-3 gap-3 max-w-[240px] mx-auto">
              {/* Yellow QR */}
              <motion.div
                className="bg-yellow-400 h-[60px] w-[60px] rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-[40px] h-[40px] bg-black rounded-sm opacity-80"></div>
              </motion.div>
              
              {/* Purple QR */}
              <motion.div
                className="bg-purple-500 h-[60px] w-[60px] rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-[40px] h-[40px] bg-white rounded-sm opacity-90"></div>
              </motion.div>
              
              {/* Orange QR */}
              <motion.div
                className="bg-orange-500 h-[60px] w-[60px] rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-[40px] h-[40px] bg-white rounded-sm opacity-90"></div>
              </motion.div>
              
              {/* Large Black QR - spans 2 columns */}
              <motion.div
                className="bg-black h-[120px] w-[120px] rounded-lg flex items-center justify-center col-span-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-[90px] h-[90px] bg-white rounded-sm opacity-90"></div>
              </motion.div>
              
              {/* Green QR */}
              <motion.div
                className="bg-green-500 h-[60px] w-[60px] rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-[40px] h-[40px] bg-white rounded-sm opacity-90"></div>
              </motion.div>
            </div>
          </div>
          
          {/* Content Below */}
          <div className="text-center space-y-3">
            <h3 className="font-['Poppins:Medium',_sans-serif] text-[#ffffff] text-lg leading-tight">
              Custom QR Code
            </h3>
            <p className="font-['Poppins:Regular',_sans-serif] text-[#a7a7a7] text-sm leading-[1.6]">
              Each Contractors Rep card includes a custom QR code you can personalize with your brand colors and logo.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Mobile Apple Wallet Card Component
  function MobileAppleWalletCard({ delay = 0 }: { delay?: number }) {
    return (
      <motion.div
        className="bg-[#120b19] relative rounded-[15px] w-full overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.02, y: -3 }}
      >
        <div className="p-6">
          {/* Apple Wallet Visual First */}
          <div className="mb-4">
            <div className="flex flex-row gap-3 items-center justify-center max-w-[200px] mx-auto">
              {/* iPhone with Apple Wallet */}
              <motion.div
                className="h-[100px] rounded-tl-[10px] rounded-tr-[10px] flex-shrink-0 w-[60px] bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url('${imgIPhone14Pro71}')`,
                }}
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* QR Code Card */}
              <motion.div
                className="h-[80px] rounded-[8px] flex-shrink-0 w-[50px] bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url('${imgImage3}')`,
                }}
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              
              {/* NFC Business Card */}
              <motion.div
                className="h-[70px] rounded-[6px] flex-shrink-0 w-[42px] bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url('${imgImage4}')`,
                }}
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, -3, 3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </div>
          
          {/* Content Below */}
          <div className="text-center space-y-3">
            <h3 className="font-['Poppins:Medium',_sans-serif] text-[#ffffff] text-lg leading-tight">
              Apple Wallet
            </h3>
            <p className="font-['Poppins:Regular',_sans-serif] text-[#a7a7a7] text-sm leading-[1.6]">
              Your Contractors Rep profile is always ready to share straight from your phone's wallet — perfect for job site encounters.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Mobile Layout - All Features as Individual Cards
  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        className="relative w-full py-12 bg-[#020203]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        data-name="why-top-contractors-section"
      >
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            className="flex flex-col gap-8 w-full"
            variants={staggerChildren}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {/* Section Header */}
            <motion.div
              className="text-center w-full gap-6"
              variants={fadeInUp}
            >
              <div className="font-['Poppins:SemiBold',_sans-serif] text-[#ffffff] uppercase text-center">
                <p className="leading-[1.3] text-2xl md:text-3xl">
                  Why Top Contractors Are Going Digital
                </p>
              </div>
              <div className="font-['Poppins:Regular',_sans-serif] text-[#a7a7a7] text-center mt-4">
                <p className="leading-[1.4] text-sm">
                  Skeptical homeowners need proof, not promises. 
                  Your digital profile showcases 5-star reviews, 
                  GAF Master Elite® credentials, and neighborhood 
                  projects instantly.
                </p>
              </div>
            </motion.div>

            {/* Individual Feature Cards */}
            <motion.div
              className="flex flex-col gap-6 w-full"
              variants={staggerChildren}
            >
              {/* 1. Link In Bio */}
              <MobileCard
                title="Link In Bio"
                description="Your Contractors Rep profile link works everywhere: drop it in appointment confirmations, follow-up texts, or proposal emails. One tap shows homeowners your credentials, local projects, and review capture form — building trust before you arrive."
                image={imgGroup10000110241}
                imageClassName="h-[180px] w-[120px]"
                delay={0.1}
              />

              {/* 2. AI-Powered Business Card Scanner */}
              <MobileCard
                title="AI-Powered Business Card Scanner"
                description="Snap a photo of any business card and Contractors Rep saves the contact. Perfect for insurance adjusters, material suppliers, and GC connections — no more lost leads or cluttered trucks."
                image={imgAiPoweredBusinessCardScanner1}
                imageClassName="h-[200px] w-[160px]"
                delay={0.2}
              />

              {/* 3. Customize Your Profile */}
              <MobileCard
                title="Customize Your Profile"
                description="Your Contractors Rep profile showcases your GAF Master Elite® certification, local project photos, 5-star Google reviews, and service areas — all in a clean, mobile-friendly link. Fully branded and ready to build trust on day one."
                image={imgCustomizeYourProfile2}
                imageClassName="h-[200px] w-[130px]"
                delay={0.3}
              />

              {/* 4. Profile Insights */}
              <MobileCard
                title="Profile Insights"
                description="Track how often homeowners view your team's profiles, which credentials they check, and when they're most engaged. Help your sales reps follow up at the perfect moment and close faster."
                image={imgImage2}
                imageClassName="h-[150px] w-full max-w-[200px]"
                delay={0.4}
              />

              {/* 5. Apple Wallet */}
              <MobileAppleWalletCard delay={0.5} />

              {/* 6. Custom QR Code */}
              <MobileQRCard delay={0.6} />

              {/* 7. Manage Leads */}
              <MobileCard
                title="Manage Leads"
                description="Keep track of leads captured or scanned. Contractors Rep captures the data."
                image={imgIPhone14Pro31}
                imageClassName="h-[180px] w-[120px]"
                delay={0.7}
              />

              {/* 8. Offline Access */}
              <MobileCard
                title="Offline Access"
                description="Customers can scan your contact info or open your profile from a scan — right on the spot."
                image={imgGroup100001102421}
                imageClassName="h-[180px] w-[140px]"
                delay={0.8}
              />

              {/* 9. Multiple Profile */}
              <MobileCard
                title="Multiple Profile"
                description="For contracting sales or subcontracting crews. Or give every sales rep a profile that shows only their reviews and jobs."
                image={imgRecapDevice59195646FigmaSiteDemoProfile311}
                imageClassName="h-[180px] w-[140px]"
                delay={0.9}
              />

              {/* 10. Direct Links */}
              <MobileCard
                title="Direct Links"
                description="Skip the full profile. Use direct links to send people straight to your Google reviews, Google Form inquiry, or payment page."
                image={imgRecapDevice59195646FigmaSiteDemoProfile311}
                imageClassName="h-[180px] w-full max-w-[240px]"
                imageStyle="bg-center bg-contain bg-no-repeat"
                delay={1.0}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // Desktop Layout - ORIGINAL DESIGN RESTORED EXACTLY
  // Link In Bio Content Component
  function Content() {
    return (
      <motion.div
        className="box-border content-stretch flex flex-col gap-3 sm:gap-4 lg:gap-[7px] items-center lg:items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-center lg:text-left w-full lg:w-[365px]"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] w-full">
          <p className="block leading-[36px] text-lg sm:text-xl lg:text-[24px]">
            Link In Bio
          </p>
        </div>
        <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] w-full">
          <p className="block leading-[1.6] text-sm sm:text-base lg:text-[15px]">
            Your Contractors Rep profile link works everywhere:
            drop it in appointment confirmations, follow-up 
            texts, or proposal emails. One tap shows homeowners 
            your credentials, local projects, and review capture 
            form — building trust before you arrive.
          </p>
        </div>
      </motion.div>
    );
  }

  // Animated iPhone Component
  function IPhone14Pro() {
    return (
      <motion.div
        className="h-[120px] sm:h-[160px] lg:h-[215px] overflow-clip relative shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.1),0px_-6px_8px_0px_rgba(255,255,255,0.1),0px_15px_22px_0px_rgba(0,0,0,0.15),0px_7px_7px_0px_rgba(0,0,0,0.25)] shrink-0 w-[110px] sm:w-[150px] lg:w-[196px]"
        initial={{ opacity: 0, y: 20, rotateY: -15 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: [0, -5, 0],
                rotateY: 0,
              }
            : {}
        }
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateY: { duration: 0.8, delay: 0.4 },
        }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
      >
        {/* Phone Body and Screen */}
        <div className="absolute contents inset-[0.13%_1.56%_-86.5%_0.99%]">
          <div className="absolute bg-[#000000] inset-[0.29%_1.82%_-86.34%_1.26%] pointer-events-none rounded-[28.645px]">
            <div
              aria-hidden="true"
              className="absolute border-[#989892] border-[2.249px] border-solid inset-0 rounded-[28.645px]"
            />
            <div className="absolute inset-0 shadow-[0px_0px_0.173px_2.422px_inset_#3f3f3f]" />
          </div>

          {/* Screen Content */}
          <div className="absolute contents left-[9.28px] top-[7.75px]">
            <div
              className="absolute inset-[3.6%_4.98%_-83.13%_4.73%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[176.961px_385.97px]"
              style={{
                maskImage: `url('${imgScreenReplaceHere}')`,
              }}
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
          </div>
        </div>

        {/* Antennas */}
        <div className="absolute contents inset-[0.13%_1.51%_-86.54%_0.94%]">
          <div className="absolute bg-[rgba(154,169,177,0.5)] inset-[185.25%_78.24%_-86.54%_20.45%]" />
          <div className="absolute bg-[rgba(228,228,227,0.65)] inset-[0.13%_20.77%_98.61%_77.67%]" />
        </div>

        {/* Notch */}
        <div className="absolute contents inset-[1.79%_43.26%_96.93%_42.5%]">
          <div className="absolute bg-[#141414] inset-[1.79%_43.26%_96.93%_42.5%] pointer-events-none rounded-[5.012px]">
            <div
              aria-hidden="true"
              className="absolute border-[#0e0e0e] border-[0.167px] border-solid inset-0 rounded-[5.012px]"
            />
          </div>
        </div>

        {/* Front Camera */}
        <div className="absolute contents left-[74.05px] top-[13.89px]">
          <div className="absolute bg-neutral-950 h-[13.139px] left-[74.05px] rounded-[6.235px] top-[13.89px] w-[48.009px]" />
          <div className="absolute h-[13.139px] left-[108.71px] top-[13.89px] w-[13.348px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 14 14"
            >
              <ellipse
                cx="6.67394"
                cy="6.5693"
                fill="#0A0A0A"
                rx="6.67394"
                ry="6.5693"
              />
            </svg>
          </div>
          <div className="absolute inset-[7.89%_39.3%_88.77%_57.05%] opacity-70">
            <div className="absolute inset-[-3.27%_-3.28%]">
              <img
                className="block max-w-none size-full"
                height="7.654"
                src={imgLens}
                width="7.632"
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Images Grid Component
  function Images() {
    return (
      <motion.div
        className="[flex-flow:wrap] box-border content-start flex gap-2 sm:gap-3 lg:gap-[6.051px] items-start justify-center lg:justify-start p-0 relative shrink-0 w-full lg:w-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          className="bg-center bg-cover bg-no-repeat h-[120px] sm:h-[160px] lg:h-[215.309px] shrink-0 w-[110px] sm:w-[150px] lg:w-[203.46px] rounded-lg"
          style={{ backgroundImage: `url('${imgImage}')` }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ duration: 0.3 }}
        />
        <IPhone14Pro />
        <motion.div
          className="bg-[49.55%_10.44%] bg-no-repeat bg-size-[144.58%_215.02%] h-[120px] sm:h-[160px] lg:h-[215px] rounded-tl-[15px] sm:rounded-tl-[22px] lg:rounded-tl-[30px] rounded-tr-[15px] sm:rounded-tr-[22px] lg:rounded-tr-[30px] shrink-0 w-[100px] sm:w-[140px] lg:w-[180px]"
          style={{
            backgroundImage: `url('${imgGroup10000110241}')`,
          }}
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="bg-center bg-cover bg-no-repeat h-[120px] sm:h-[160px] lg:h-[216.318px] shrink-0 w-[110px] sm:w-[150px] lg:w-[204.468px] rounded-lg"
          style={{ backgroundImage: `url('${imgImage1}')` }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="flex flex-row items-center justify-center relative shrink-0 w-full py-12 sm:py-16 bg-[#020203]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      data-name="why-top-contractors-section"
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-4 sm:p-6 lg:p-[10px] relative w-full max-w-7xl mx-auto">
        <motion.div
          className="box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-[68px] items-start justify-start p-0 relative shrink-0 w-full"
          variants={staggerChildren}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Section Header */}
          <motion.div
            className="box-border content-stretch flex flex-col lg:flex-row items-start lg:items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-left w-full gap-6 lg:gap-8"
            variants={fadeInUp}
          >
            <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#ffffff] uppercase flex-1 text-center lg:text-left">
              <p className="block leading-[1.3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px]">
                Why Top Contractors Are Going Digital
              </p>
            </div>
            <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] flex-1 max-w-[498px] text-center lg:text-left">
              <p className="block leading-[1.4] text-sm sm:text-base lg:text-[18px]">
                Skeptical homeowners need proof, not promises. 
                Your digital profile showcases 5-star reviews, 
                GAF Master Elite® credentials, and neighborhood 
                projects instantly. It transforms that awkward 
                first meeting into a comfortable conversation 
                with a trusted professional.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
            variants={staggerChildren}
          >
            {/* Row 1: Link In Bio */}
            <motion.div
              className="bg-[#120b19] relative rounded-[15px] shrink-0 w-full"
              variants={fadeInUp}
              whileHover={{ scale: 1.01, y: -3 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280.5 276.32\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.25\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-102.6 12.083 -34.149 -102.31 1026.8 155.49)\\'><stop stop-color=\\'rgba(0,123,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,123,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
              }}
            >
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[38px] items-center lg:items-start justify-start px-4 sm:px-6 lg:px-[19px] py-4 sm:py-6 lg:py-[30px] relative w-full">
                  <Content />
                  <Images />
                </div>
              </div>
            </motion.div>

            {/* Row 2: AI Business Card Scanner + Customize Profile */}
            <motion.div
              className="box-border content-stretch flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch justify-start p-0 relative shrink-0 w-full"
              variants={staggerChildren}
            >
              {/* AI Business Card Scanner */}
              <motion.div
                className="flex-1 bg-[#120b19] min-h-[320px] lg:min-h-px relative rounded-[15px] shrink-0 w-full"
                variants={fadeInLeft}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 790 295.5\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.25\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-63.3 12.922 -21.068 -109.41 633.5 166.28)\\'><stop stop-color=\\'rgba(0,123,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,92,191,0.75)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,62,128,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,31,64,0.25)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
                }}
              >
                <div className="overflow-clip relative size-full">
                  <div className="box-border content-stretch flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[119px] items-start lg:items-start justify-start pb-4 sm:pb-6 lg:pb-0 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 relative size-full">
                    <motion.div
                      className="box-border content-stretch flex flex-col gap-3 sm:gap-4 lg:gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full lg:w-[334px] text-center lg:text-left"
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] w-full">
                        <p className="block leading-[36px] text-lg sm:text-xl lg:text-[24px]">
                          AI-Powered Business Card Scanner
                        </p>
                      </div>
                      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] w-full">
                        <p className="block leading-[1.6] text-sm sm:text-base lg:text-[15px]">
                          Snap a photo of any business card and
                          Contractors Rep saves the contact.
                          Perfect for insurance adjusters, 
                          material suppliers, and GC connections 
                          — no more lost leads or cluttered trucks.
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-[50.32%_13.93%] bg-no-repeat bg-size-[144.71%_147.77%] h-[200px] sm:h-[280px] lg:h-[380.869px] shrink-0 w-full max-w-[280px] lg:w-[219.25px] rounded-lg mx-auto lg:mx-0"
                      style={{
                        backgroundImage: `url('${imgAiPoweredBusinessCardScanner1}')`,
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        isInView ? { opacity: 1, scale: 1 } : {}
                      }
                      transition={{ duration: 0.6, delay: 0.5 }}
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Customize Profile */}
              <motion.div
                className="flex-1 bg-[#120b19] from-[#007bff40] h-auto min-h-[400px] lg:h-[615px] relative rounded-[15px] shrink-0 to-[#007bff00] w-full"
                variants={fadeInRight}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center relative size-full">
                  <div className="box-border content-stretch flex flex-col h-auto min-h-[400px] lg:h-[615px] items-center justify-between pb-4 sm:pb-6 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 relative w-full">
                    <motion.div
                      className="box-border content-stretch flex flex-col gap-3 items-center lg:items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-center lg:text-left w-full"
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] w-full">
                        <p className="block leading-[36px] text-lg sm:text-xl lg:text-[24px]">
                          customize your Profile
                        </p>
                      </div>
                      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] w-full max-w-[424px]">
                        <p className="block leading-[1.6] text-sm sm:text-base lg:text-[15px]">
                          Your Contractors Rep profile showcases
                          your GAF Master Elite® certification, 
                          local project photos, 5-star Google 
                          reviews, and service areas — all in a 
                          clean, mobile-friendly link. Fully 
                          branded and ready to build trust on day one.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="box-border content-stretch flex flex-row items-center justify-center pl-0 pr-0 sm:pr-[30px] lg:pr-[62px] py-0 relative shrink-0 w-full overflow-hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView ? { opacity: 1, scale: 1 } : {}
                      }
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <motion.div
                        className="bg-[49.55%_27.9%] bg-no-repeat bg-size-[144.58%_124.27%] h-[150px] sm:h-[200px] lg:h-[273.316px] mr-[-30px] sm:mr-[-40px] lg:mr-[-62px] rounded-tl-[12px] sm:rounded-tl-[18px] lg:rounded-tl-[22.042px] rounded-tr-[12px] sm:rounded-tr-[18px] lg:rounded-tr-[22.042px] shrink-0 w-[80px] sm:w-[100px] lg:w-[132.25px]"
                        style={{
                          backgroundImage: `url('${imgCustomizeYourProfile}')`,
                        }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.05, z: 10 }}
                      />
                      <motion.div
                        className="bg-[50%_27.27%] bg-no-repeat bg-size-[140.85%_124.8%] h-[180px] sm:h-[240px] lg:h-[322.004px] mr-[-30px] sm:mr-[-40px] lg:mr-[-62px] shrink-0 w-[90px] sm:w-[120px] lg:w-[155.808px]"
                        style={{
                          backgroundImage: `url('${imgCustomizeYourProfile1}')`,
                        }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        whileHover={{ scale: 1.05, z: 20 }}
                      />
                      <motion.div
                        className="bg-[49.55%_27.9%] bg-no-repeat bg-size-[144.58%_124.27%] h-[200px] sm:h-[280px] lg:h-[372px] mr-[-30px] sm:mr-[-40px] lg:mr-[-62px] rounded-tl-[15px] sm:rounded-tl-[22px] lg:rounded-tl-[30px] rounded-tr-[15px] sm:rounded-tr-[22px] lg:rounded-tr-[30px] shrink-0 w-[100px] sm:w-[140px] lg:w-[180px]"
                        style={{
                          backgroundImage: `url('${imgCustomizeYourProfile2}')`,
                        }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                        whileHover={{ scale: 1.05, z: 30 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Row 3: Profile Insights + Apple Wallet */}
            <motion.div
              className="basis-0 box-border content-stretch flex flex-col lg:flex-row gap-4 sm:gap-6 grow items-stretch justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
              variants={staggerChildren}
            >
              {/* Profile Insights */}
              <motion.div
                className="bg-[#120b19] box-border content-stretch flex flex-col from-[#007bff40] gap-2 h-auto min-h-[280px] lg:h-full items-center justify-start overflow-clip pb-4 sm:pb-6 lg:pb-0 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 relative rounded-[15px] shrink-0 to-[#007bff00] w-full lg:w-[383px] flex-1"
                variants={fadeInLeft}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="box-border content-stretch flex flex-col gap-3 sm:gap-4 lg:gap-[7px] items-center lg:items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-center lg:text-left w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] w-full">
                    <p className="block leading-[36px] text-lg sm:text-xl lg:text-[24px]">
                      Profile Insights
                    </p>
                  </div>
                  <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] w-full">
                    <p className="block leading-[1.6] text-sm sm:text-base lg:text-[15px]">
                      Track how often homeowners view your 
                      team's profiles, which credentials they 
                      check, and when they're most engaged. 
                      Help your sales reps follow up at the 
                      perfect moment and close faster.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[8px] sm:p-[10px] lg:p-[12px] relative rounded-[15px] shrink-0 w-full max-w-[280px] lg:max-w-none mx-auto lg:mx-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1 } : {}
                  }
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="bg-center bg-cover bg-no-repeat h-[100px] sm:h-[120px] lg:h-[135px] shrink-0 w-full max-w-[200px] sm:max-w-[220px] lg:w-[234px] rounded-lg mx-auto"
                    style={{
                      backgroundImage: `url('${imgImage2}')`,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Apple Wallet */}
              <motion.div
                className="bg-[#120b19] box-border content-stretch flex flex-col from-[#007bff40] gap-4 sm:gap-6 lg:gap-[15px] h-auto min-h-[280px] lg:h-full items-center justify-start overflow-clip pb-4 sm:pb-6 lg:pb-0 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 relative rounded-[15px] shrink-0 to-[#007bff00] w-full lg:w-[372.008px] flex-1"
                variants={fadeInRight}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-lg sm:text-xl lg:text-[24px] w-full">
                    <p className="block leading-[36px]">
                      Apple Wallet
                    </p>
                  </div>
                  <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-sm sm:text-base lg:text-[15px] w-full">
                    <p className="block leading-[1.6]">
                      Your Contractors Rep profile is always 
                      ready to share straight from your phone's 
                      wallet — perfect for job site encounters.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="box-border content-stretch flex flex-row gap-3 sm:gap-4 lg:gap-[23.254px] items-center justify-start p-0 relative shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1 } : {}
                  }
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div
                    className="bg-[51.49%_14.88%] bg-no-repeat bg-size-[149.44%_158.72%] h-[120px] sm:h-[150px] lg:h-[178.182px] rounded-tl-[12px] sm:rounded-tl-[15px] lg:rounded-tl-[17.024px] rounded-tr-[12px] sm:rounded-tr-[15px] lg:rounded-tr-[17.024px] shrink-0 w-[72px] sm:w-[90px] lg:w-[106.682px]"
                    style={{
                      backgroundImage: `url('${imgIPhone14Pro71}')`,
                    }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                  />
                  <motion.div
                    className="bg-[46.77%_47.86%] bg-no-repeat bg-size-[146.22%_101.79%] h-[100px] sm:h-[120px] lg:h-[140.086px] rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] shrink-0 w-[60px] sm:w-[75px] lg:w-[89.306px]"
                    style={{
                      backgroundImage: `url('${imgImage3}')`,
                    }}
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div
                    className="bg-[48.88%_22.73%] bg-no-repeat bg-size-[147.37%_154.55%] h-[80px] sm:h-[100px] lg:h-[119.088px] rounded-[6px] sm:rounded-[8px] lg:rounded-[10px] shrink-0 w-[50px] sm:w-[62px] lg:w-[74.306px]"
                    style={{
                      backgroundImage: `url('${imgImage4}')`,
                    }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Row 4: Custom QR Code */}
            <motion.div
              className="bg-[#120b19] relative rounded-[15px] shrink-0 w-full"
              variants={fadeInUp}
              whileHover={{ scale: 1.01, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[38px] items-center lg:items-start justify-start px-4 sm:px-6 lg:px-[19px] py-4 sm:py-6 lg:py-[30px] relative w-full">
                  <motion.div
                    className="flex flex-col gap-3 sm:gap-4 lg:gap-[7px] items-center lg:items-start justify-start text-center lg:text-left w-full lg:w-[365px]"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="capitalize font-['Poppins:Medium',_sans-serif] text-[#ffffff] w-full">
                      <p className="block leading-[36px] text-lg sm:text-xl lg:text-[24px]">
                        Custom QR Code
                      </p>
                    </div>
                    <div className="font-['Poppins:Regular',_sans-serif] text-[#a7a7a7] w-full">
                      <p className="block leading-[1.6] text-sm sm:text-base lg:text-[15px]">
                        Each Contractors Rep card includes a custom 
                        QR code you can personalize with your brand 
                        colors and logo.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex flex-wrap gap-4 items-center justify-center lg:justify-start p-0 w-full lg:w-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {/* QR Code Grid */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 items-center">
                      {/* Yellow QR */}
                      <motion.div
                        className="bg-yellow-400 h-[60px] sm:h-[80px] lg:h-[100px] w-[60px] sm:w-[80px] lg:w-[100px] rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-[40px] sm:w-[55px] lg:w-[70px] h-[40px] sm:h-[55px] lg:h-[70px] bg-black rounded-sm opacity-80"></div>
                      </motion.div>
                      
                      {/* Purple QR */}
                      <motion.div
                        className="bg-purple-500 h-[60px] sm:h-[80px] lg:h-[100px] w-[60px] sm:w-[80px] lg:w-[100px] rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-[40px] sm:w-[55px] lg:w-[70px] h-[40px] sm:h-[55px] lg:h-[70px] bg-white rounded-sm opacity-90"></div>
                      </motion.div>
                      
                      {/* Large Black QR */}
                      <motion.div
                        className="bg-black h-[120px] sm:h-[160px] lg:h-[200px] w-[120px] sm:w-[160px] lg:w-[200px] rounded-lg flex items-center justify-center row-span-2 col-span-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-[90px] sm:w-[130px] lg:w-[170px] h-[90px] sm:h-[130px] lg:h-[170px] bg-white rounded-sm opacity-90"></div>
                      </motion.div>
                      
                      {/* Orange QR */}
                      <motion.div
                        className="bg-orange-500 h-[60px] sm:h-[80px] lg:h-[100px] w-[60px] sm:w-[80px] lg:w-[100px] rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-[40px] sm:w-[55px] lg:w-[70px] h-[40px] sm:h-[55px] lg:h-[70px] bg-white rounded-sm opacity-90"></div>
                      </motion.div>
                      
                      {/* Green QR */}
                      <motion.div
                        className="bg-green-500 h-[60px] sm:h-[80px] lg:h-[100px] w-[60px] sm:w-[80px] lg:w-[100px] rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-[40px] sm:w-[55px] lg:w-[70px] h-[40px] sm:h-[55px] lg:h-[70px] bg-white rounded-sm opacity-90"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Row 5: Manage Leads + Offline Access + Multiple Profile */}
            <motion.div
              className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch justify-start w-full"
              variants={staggerChildren}
            >
              {/* Manage Leads */}
              <motion.div
                className="bg-[#120b19] flex flex-col gap-4 sm:gap-6 h-auto min-h-[280px] lg:h-full items-center justify-start pb-4 sm:pb-6 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 rounded-[15px] flex-shrink-0 w-full lg:w-[300px] flex-1"
                variants={fadeInLeft}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start justify-start text-center lg:text-left w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="font-['Poppins:Medium',_sans-serif] text-[#ffffff] w-full">
                    <p className="leading-[36px] text-lg sm:text-xl lg:text-[24px]">
                      Manage Leads
                    </p>
                  </div>
                  <div className="font-['Poppins:Regular',_sans-serif] text-[#a7a7a7] w-full">
                    <p className="leading-[1.6] text-sm sm:text-base lg:text-[15px]">
                      Keep track of leads captured or 
                      scanned. Contractors Rep captures the 
                      data.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="h-[120px] sm:h-[160px] lg:h-[200px] w-full max-w-[180px] mx-auto lg:mx-0 bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url('${imgIPhone14Pro31}')`,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                />
              </motion.div>

              {/* Offline Access */}
              <motion.div
                className="bg-[#120b19] flex flex-col gap-4 sm:gap-6 h-auto min-h-[280px] lg:h-full items-center justify-start pb-4 sm:pb-6 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 rounded-[15px] flex-shrink-0 w-full lg:w-[300px] flex-1"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start justify-start text-center lg:text-left w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="font-['Poppins:Medium',_sans-serif] text-[#ffffff] w-full">
                    <p className="leading-[36px] text-lg sm:text-xl lg:text-[24px]">
                      Offline Access
                    </p>
                  </div>
                  <div className="font-['Poppins:Regular',_sans-serif] text-[#a7a7a7] w-full">
                    <p className="leading-[1.6] text-sm sm:text-base lg:text-[15px]">
                      Customers can scan your contact info or 
                      open your profile from a scan — right on 
                      the spot.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="h-[120px] sm:h-[160px] lg:h-[200px] w-full max-w-[180px] mx-auto lg:mx-0 bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url('${imgGroup100001102421}')`,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>

              {/* Multiple Profile */}
              <motion.div
                className="bg-[#120b19] flex flex-col gap-4 sm:gap-6 h-auto min-h-[280px] lg:h-full items-center justify-start pb-4 sm:pb-6 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 rounded-[15px] flex-shrink-0 w-full lg:w-[300px] flex-1"
                variants={fadeInRight}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start justify-start text-center lg:text-left w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="font-['Poppins:Medium',_sans-serif] text-[#ffffff] w-full">
                    <p className="leading-[36px] text-lg sm:text-xl lg:text-[24px]">
                      Multiple Profile
                    </p>
                  </div>
                  <div className="font-['Poppins:Regular',_sans-serif] text-[#a7a7a7] w-full">
                    <p className="leading-[1.6] text-sm sm:text-base lg:text-[15px]">
                      For contracting sales or subcontracting 
                      crews. Or give every sales rep a profile that shows only 
                      their reviews and jobs.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="h-[120px] sm:h-[160px] lg:h-[200px] w-full max-w-[180px] mx-auto lg:mx-0 bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url('${imgRecapDevice59195646FigmaSiteDemoProfile311}')`,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                />
              </motion.div>
            </motion.div>

            {/* Row 6: Direct Links */}
            <motion.div
              className="bg-[#120b19] relative rounded-[15px] shrink-0 w-full"
              variants={fadeInUp}
              whileHover={{ scale: 1.01, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[38px] items-center lg:items-start justify-start px-4 sm:px-6 lg:px-[19px] py-4 sm:py-6 lg:py-[30px] relative w-full">
                  <motion.div
                    className="flex flex-col gap-3 sm:gap-4 lg:gap-[7px] items-center lg:items-start justify-start text-center lg:text-left w-full lg:w-[365px]"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="font-['Poppins:Medium',_sans-serif] text-[#ffffff] w-full">
                      <p className="block leading-[36px] text-lg sm:text-xl lg:text-[24px]">
                        Direct Links
                      </p>
                    </div>
                    <div className="font-['Poppins:Regular',_sans-serif] text-[#a7a7a7] w-full">
                      <p className="block leading-[1.6] text-sm sm:text-base lg:text-[15px]">
                        Skip the full profile. Use direct links to 
                        send people straight to your Google 
                        reviews, Google Form inquiry, or 
                        payment page.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="h-[200px] sm:h-[280px] lg:h-[350px] w-full max-w-[300px] lg:w-[400px] mx-auto lg:mx-0 bg-center bg-contain bg-no-repeat"
                    style={{
                      backgroundImage: `url('${imgRecapDevice59195646FigmaSiteDemoProfile311}')`,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}