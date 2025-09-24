"use client";

import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-2n7pfquzy0";
import {
  imgGroup,
  imgGroup1,
  imgGroup2,
  imgGroup3,
  imgGroup4,
  imgGroup5,
} from "../../imports/svg-awgtg";

function Group() {
  return (
    <div
      className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.314px_0px] mask-size-[8.282px_8.19px] ml-[3.79%] mt-[0.001%] relative size-[7.969px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Group">
          <path
            d={svgPaths.pd021480}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[79.214%] mt-0 place-items-start relative"
      data-name="Clip path group"
    >
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div
      className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.314px_-0.143px] mask-size-[8.282px_8.111px] ml-[3.79%] mt-[1.759%] relative size-[7.969px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Group">
          <path
            d={svgPaths.p24d23c80}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[79.214%] mt-[79.642%] place-items-start relative"
      data-name="Clip path group"
    >
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div
      className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.314px_-0.241px] mask-size-[8.282px_8.53px] ml-[3.79%] mt-[2.83%] relative size-[7.969px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Group">
          <path
            d={svgPaths.p1e3be400}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[79.214%] mt-[39.395%] place-items-start relative"
      data-name="Clip path group"
    >
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="[grid-area:1_/_1] h-[39.343px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.249px] mask-size-[30.879px_39.842px] ml-0 mt-[0.625%] relative w-[30.55px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup3}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 31 40"
      >
        <g id="Group">
          <path
            d={svgPaths.p391a5400}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[0.004%] place-items-start relative"
      data-name="Clip path group"
    >
      <Group3 />
    </div>
  );
}

function Group1000010984() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ClipPathGroup />
      <ClipPathGroup1 />
      <ClipPathGroup2 />
      <ClipPathGroup3 />
    </div>
  );
}

function GlobalBrandHubIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.137px] items-start justify-start overflow-clip p-[3.137px] relative shrink-0 size-12"
      data-name="Icons"
    >
      <Group1000010984 />
    </div>
  );
}

function FeatureHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 sm:gap-4 lg:gap-6 items-center justify-start p-0 relative shrink-0"
      data-name="Feature Header"
    >
      <GlobalBrandHubIcon />
      <div className="capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left">
        <p className="block leading-[1.4] text-base sm:text-lg lg:text-[22px]">Global Brand Hub</p>
      </div>
    </div>
  );
}

function FeatureContent() {
  return (
    <div
      className="flex-1 box-border content-stretch flex flex-col gap-4 sm:gap-6 items-start justify-start p-0 relative shrink-0"
      data-name="Feature Content"
    >
      <FeatureHeader />
      <div className="font-['Poppins:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left w-full">
        <p className="block leading-[1.6] text-sm sm:text-base lg:text-[16px]">
          Set your logo, color palette, fonts, and CTA language once. Apply it
          across all contractor profiles with a single click.
        </p>
      </div>
    </div>
  );
}

function FeatureItem() {
  return (
    <motion.div
      className="flex-1 bg-[#2c2c2c] h-auto min-h-[200px] sm:min-h-[240px] lg:min-h-[281px] relative rounded-[15px] shrink-0"
      data-name="Feature Item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none rounded-[15px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 sm:gap-6 lg:gap-8 items-start justify-start p-4 sm:p-6 lg:p-[32px] relative size-full">
          <FeatureContent />
        </div>
      </div>
    </motion.div>
  );
}

function Group4() {
  return (
    <div
      className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[42.082px_42.082px] ml-0 mt-0 relative size-[42.082px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup4}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 43 43"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p23ef9500}
            fill="var(--fill-0, #007BFF)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Clip path group"
    >
      <Group4 />
    </div>
  );
}

function SubdomainBrandingIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.164px] items-start justify-start overflow-clip p-[3.164px] relative shrink-0 size-[48.41px]"
      data-name="Icons"
    >
      <ClipPathGroup4 />
    </div>
  );
}

function FeatureHeader1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 sm:gap-4 lg:gap-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Feature Header"
    >
      <SubdomainBrandingIcon />
      <div className="capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left">
        <p className="block leading-[1.4] text-base sm:text-lg lg:text-[22px]">Subdomain Branding</p>
      </div>
    </div>
  );
}

function FeatureContent1() {
  return (
    <div
      className="flex-1 box-border content-stretch flex flex-col gap-4 sm:gap-6 items-start justify-start p-0 relative shrink-0"
      data-name="Feature Content"
    >
      <FeatureHeader1 />
      <div className="font-['Poppins:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left w-full">
        <p className="block leading-[1.6] text-sm sm:text-base lg:text-[16px]">{`Host all your contractor profiles under your own subdomain (e.g., team.bestroofing.com/mike). Your brand. Your domain. No visibility loss.`}</p>
      </div>
    </div>
  );
}

function FeatureItem1() {
  return (
    <motion.div
      className="flex-1 bg-[#2c2c2c] h-auto min-h-[200px] sm:min-h-[240px] lg:min-h-[281px] relative rounded-[15px] shrink-0"
      data-name="Feature Item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none rounded-[15px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 sm:gap-6 lg:gap-8 items-start justify-start p-4 sm:p-6 lg:p-[32px] relative size-full">
          <FeatureContent1 />
        </div>
      </div>
    </motion.div>
  );
}

function Group5() {
  return (
    <div
      className="[grid-area:1_/_1] h-[36.159px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.701px_-0.733px] mask-size-[41.725px_36.863px] ml-[1.679%] mt-[1.988%] relative w-[39.955px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup5}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 37"
      >
        <g id="Group">
          <path
            d={svgPaths.p3228600}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full"
      data-name="Clip path group"
    >
      <Group5 />
    </div>
  );
}

function ProfileLevelOverridesIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.137px] items-start justify-start overflow-clip p-[3.137px] relative shrink-0 size-12"
      data-name="Icons"
    >
      <ClipPathGroup5 />
    </div>
  );
}

function FeatureHeader2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 sm:gap-4 lg:gap-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Feature Header"
    >
      <ProfileLevelOverridesIcon />
      <div className="flex-1 capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left">
        <p className="block leading-[1.4] text-base sm:text-lg lg:text-[22px]">Profile-Level Overrides</p>
      </div>
    </div>
  );
}

function FeatureContent2() {
  return (
    <div
      className="flex-1 box-border content-stretch flex flex-col gap-4 sm:gap-6 items-start justify-start p-0 relative shrink-0"
      data-name="Feature Content"
    >
      <FeatureHeader2 />
      <div className="font-['Poppins:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left w-full">
        <p className="block leading-[1.6] text-sm sm:text-base lg:text-[16px]">
          Need some contractors to customize their design? You can override global settings
          at the profile level when needed.
        </p>
      </div>
    </div>
  );
}

function FeatureItem2() {
  return (
    <motion.div
      className="flex-1 bg-[#2c2c2c] h-auto min-h-[200px] sm:min-h-[240px] lg:min-h-[281px] relative rounded-[15px] shrink-0"
      data-name="Feature Item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none rounded-[15px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 sm:gap-6 lg:gap-8 items-start justify-start p-4 sm:p-6 lg:p-[32px] relative size-full">
          <FeatureContent2 />
        </div>
      </div>
    </motion.div>
  );
}

function FeaturesRow() {
  return (
    <div
      className="box-border content-stretch flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-3 items-stretch justify-start p-0 relative shrink-0 w-full"
      data-name="Features Row"
    >
      <FeatureItem />
      <FeatureItem1 />
      <FeatureItem2 />
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Features Container"
    >
      <FeaturesRow />
      <motion.div 
        className="capitalize font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#aaaaaa] text-[20px] text-center w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="font-['Poppins:Medium',_sans-serif] leading-[1.6]">
          <span className="text-[#e0e0e0]">
            Finally, your contractor team looks and feels like one unified brand.
          </span>{" "}
        </p>
      </motion.div>
    </div>
  );
}

export function BrandConsistencySection() {
  return (
    <section
      className="bg-[#020203] box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-[54px] items-center justify-start py-12 sm:py-16 lg:py-[120px] px-4 sm:px-6 lg:px-[60px] relative w-full"
      data-name="Brand Consistency Section"
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
            <p className="block leading-[1.2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px]">{`Keep Your Brand Consistent Across the Team `}</p>
          </motion.div>
          <FeaturesContainer />
        </div>
      </div>
    </section>
  );
}