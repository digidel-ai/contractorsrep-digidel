"use client";

import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-30rn9dn68u";
import imgQrCodeGenerator1 from "figma:asset/c2e24c41ac649157f17daed72235f6a6cefd822e.png";
import imgBuiltInReviewScripts1 from "figma:asset/dcfefc4d08bb5f665eb8f906eee27e9ee0740416.png";
import imgNfcSyncWithFieldTools1 from "figma:asset/ff0cc648e04263050dbb24c069e09d99b03af98e.png";

function QrCodeGeneratorHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 sm:gap-4 lg:gap-6 items-center justify-start p-0 relative shrink-0"
      data-name="QR Code Generator Header"
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
        data-name="QR Code Generator 1"
        style={{ backgroundImage: `url('${imgQrCodeGenerator1}')` }}
      />
      <div className="capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left">
        <p className="block leading-[1.4] text-base sm:text-lg lg:text-[20px]">QR Code Generator</p>
      </div>
    </div>
  );
}

function QrCodeGeneratorContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 sm:gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="QR Code Generator Container"
    >
      <QrCodeGeneratorHeader />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c2c2c2] text-left w-full">
        <p className="block leading-[1.6] text-sm sm:text-base lg:text-[16px]">{`Create branded QR codes that take customers straight to your Google review page. These can be placed on physical products, warranty paperwork, or thank-you cards. `}</p>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[33.375px]" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 34 34"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p2ca86800}
            fill="var(--fill-0, #1976D2)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function CustomizationItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full max-w-lg"
      data-name="Customization Item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-[33.375px] lg:h-[33.375px]">
        <Checkbox />
      </div>
      <div
        className="flex-1 box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0"
        data-name="Customization Description"
      >
        <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c2c2c2] text-left w-full">
          <p className="block leading-[1.6] text-sm sm:text-base lg:text-[16px]">{children}</p>
        </div>
      </div>
    </motion.div>
  );
}

function CustomizationsList() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Customizations List"
    >
      <CustomizationItem delay={0.2}>{`Choose your code style (dots, squares, etc.) `}</CustomizationItem>
      <CustomizationItem delay={0.3}>Match your brand colors</CustomizationItem>
      <CustomizationItem delay={0.4}>{`Add your logo to the center `}</CustomizationItem>
      <CustomizationItem delay={0.5}>Download as PNG or SVG</CustomizationItem>
    </div>
  );
}

function CustomizationsContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 sm:gap-6 lg:gap-[18px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Customizations Container"
    >
      <motion.div
        className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="block leading-[1.4] text-base sm:text-lg lg:text-[18px]">Customizations include:</p>
      </motion.div>
      <CustomizationsList />
    </div>
  );
}

function LeftFeatureContainer() {
  return (
    <motion.div
      className="backdrop-blur-[12.5px] backdrop-filter bg-[rgba(255,255,255,0.05)] box-border content-stretch flex flex-col h-auto min-h-[400px] lg:h-[522px] items-start justify-between p-4 sm:p-6 lg:p-[32px] relative rounded-[15px] shrink-0 w-full lg:w-[557px] flex-1"
      data-name="Left Feature Container"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <QrCodeGeneratorContainer />
      <CustomizationsContainer />
    </motion.div>
  );
}

function BuiltInReviewScriptsHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Built-in Review Scripts Header"
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-12"
        data-name="Built-in Review Scripts 1"
        style={{ backgroundImage: `url('${imgBuiltInReviewScripts1}')` }}
      />
      <div className="capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">
          Built-in Review Scripts
        </p>
      </div>
    </div>
  );
}

function BuiltInReviewScriptsContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Built-in Review Scripts Header"
    >
      <BuiltInReviewScriptsHeader />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c2c2c2] text-[16px] text-left w-full">
        <p className="block leading-[1.6]">{`Get proven scripts for what to say and when to ask for the review, all included on the same page. The ideal time to request a review is upon the successful completion of the final inspection, during what we call the "Golden Hour."`}</p>
      </div>
    </div>
  );
}

function BuiltInReviewScriptsContainer() {
  return (
    <motion.div
      className="backdrop-blur-[12.5px] backdrop-filter bg-[rgba(255,255,255,0.05)] h-auto min-h-[200px] lg:h-[255px] relative rounded-[15px] shrink-0 w-full"
      data-name="Built-in Review Scripts Container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 sm:gap-6 lg:gap-8 h-auto min-h-[200px] lg:h-[255px] items-start justify-start p-4 sm:p-6 lg:p-[32px] relative w-full">
          <BuiltInReviewScriptsContent />
        </div>
      </div>
    </motion.div>
  );
}

function NfcSyncWithFieldToolsHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="NFC Sync with Field Tools Header"
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-12"
        data-name="NFC Sync with Field Tools 1"
        style={{ backgroundImage: `url('${imgNfcSyncWithFieldTools1}')` }}
      />
      <div className="basis-0 capitalize font-['Poppins:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left">
        <p className="block leading-[1.4]">NFC Sync with Field Tools</p>
      </div>
    </div>
  );
}

function NfcSyncWithFieldToolsContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="NFC Sync with Field Tools Header"
    >
      <NfcSyncWithFieldToolsHeader />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c2c2c2] text-[16px] text-left w-full">
        <p className="block leading-[1.6]">{`Print the QR onto physical products like durable, weatherproof stickers for attic access panels or new warranty paperwork. Or, for a more tech-forward approach, use NFC-enabled review cards that can be tapped on a homeowner's smartphone to instantly open your Google review page.`}</p>
      </div>
    </div>
  );
}

function NfcSyncWithFieldToolsContainer() {
  return (
    <motion.div
      className="backdrop-blur-[12.5px] backdrop-filter bg-[rgba(255,255,255,0.05)] h-auto min-h-[200px] lg:h-[255px] relative rounded-[15px] shrink-0 w-full"
      data-name="NFC Sync with Field Tools Container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 sm:gap-6 lg:gap-8 h-auto min-h-[200px] lg:h-[255px] items-start justify-start p-4 sm:p-6 lg:p-[32px] relative w-full">
          <NfcSyncWithFieldToolsContent />
        </div>
      </div>
    </motion.div>
  );
}

function RightFeatureContainer() {
  return (
    <motion.div
      className="box-border content-stretch flex flex-col gap-4 sm:gap-6 lg:gap-3 items-start justify-center p-0 relative shrink-0 w-full lg:w-[557px] flex-1"
      data-name="Right Feature Container"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <BuiltInReviewScriptsContainer />
      <NfcSyncWithFieldToolsContainer />
    </motion.div>
  );
}

function FeaturesContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-3 items-stretch justify-start p-0 relative shrink-0 w-full"
      data-name="Features Container"
    >
      <LeftFeatureContainer />
      <RightFeatureContainer />
    </div>
  );
}

export function ReviewOpportunitySection() {
  return (
    <section
      className="bg-[#020203] box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-[54px] items-center justify-start py-12 sm:py-16 lg:py-[120px] px-4 sm:px-6 lg:px-[60px] relative w-full"
      data-name="Review Opportunity Section"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div
          className="box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-[54px] items-center justify-start p-0 relative w-full"
          data-name="Main Container"
        >
          <motion.div 
            className="capitalize font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-center w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="block leading-[1.2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px]">{`Turn Every Visit Into a Review Opportunity `}</p>
          </motion.div>
          <FeaturesContainer />
        </div>
      </div>
    </section>
  );
}