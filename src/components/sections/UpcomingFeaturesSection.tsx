"use client";

import { motion } from "motion/react";
import svgPaths from "../../imports/svg-gipu0vdokr";
import imgMockrocketCapture41 from "figma:asset/792d5334f8eb1181f768efed8219c88033211dc2.png";
import imgEllipse30 from "figma:asset/222372149199408681118fee3923c283ddef5880.png";
import imgRectangle from "figma:asset/8dbc5e85b4d118407bf9987c1d7b5ba4d3481f12.png";

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[22.25px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 23 23"
      >
        <g>
          <path
            d={svgPaths.p3483fa00}
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <motion.div 
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-[22.25px] lg:h-[22.25px] mt-1">
        <CheckIcon />
      </div>
      <div className="flex-1 box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0">
        <div className="font-['Inter:Light',_sans-serif] font-light leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left w-full">
          <p className="leading-[1.6] text-sm sm:text-base lg:text-[16px]">
            <span className="font-['Poppins:SemiBold',_sans-serif]">
              {title}
            </span>
            <span className="font-['Poppins:Light',_sans-serif]">{` ${description}`}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function UpcomingFeaturesList() {
  const features = [
    { title: "Advanced Analytics", description: "Track lead conversion, project ROI, referral sources" },
    { title: "CRM Integrations", description: "JobNimbus, HubSpot, BuilderTrend, CompanyCam" },
    { title: "Material Ordering", description: "Direct supplier integration in dashboard" },
    { title: "Team Management", description: "Role-based access and crew permissions" }
  ];

  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      {features.map((feature, index) => (
        <FeatureItem 
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

function WaitlistButton() {
  return (
    <motion.div
      className="bg-[#1a1a1a] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors w-full sm:w-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-left uppercase">
        <p className="block leading-[18px] text-sm sm:text-base lg:text-[18px]">Join the waitlist</p>
      </div>
    </motion.div>
  );
}

function BlueCard() {
  return (
    <motion.div 
      className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#004a99] h-auto min-h-[400px] lg:h-full items-start justify-between overflow-clip p-4 sm:p-6 lg:pb-[54px] lg:pt-8 lg:px-8 relative rounded-[15px] shrink-0 to-[#007bff] w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-1 box-border content-stretch flex flex-col gap-4 sm:gap-6 items-start justify-center p-0 relative shrink-0 w-full">
        <motion.div 
          className="capitalize font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="block leading-[1.2] text-2xl sm:text-3xl lg:text-4xl xl:text-[42px]">We're Just Getting Started</p>
        </motion.div>
        <UpcomingFeaturesList />
      </div>
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center p-0 relative shrink-0 w-full">
        <div className="capitalize font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left">
          <p className="block leading-[1.2] text-base sm:text-lg lg:text-[20px]">{`Want early access to new features? `}</p>
        </div>
        <WaitlistButton />
      </div>
    </motion.div>
  );
}

function QrCode() {
  return (
    <div className="relative shrink-0 size-[45.952px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 46 46"
      >
        <g>
          <g clipPath="url(#clip0_38_9849)">
            <rect
              fill="white"
              height="45.9524"
              rx="3.92756"
              width="45.9524"
            />
            <g opacity="0.03"></g>
            <g>
              {/* QR code paths - simplified for brevity */}
              <path d={svgPaths.p15b36380} fill="black" />
              <path d={svgPaths.p3a7535f0} fill="black" />
              <path d={svgPaths.p13c80c80} fill="black" />
              {/* ... many more paths from the original */}
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_38_9849">
            <rect fill="white" height="45.9524" rx="3.92756" width="45.9524" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="backdrop-blur-[5.976px] backdrop-filter bg-[rgba(0,123,255,0.2)] h-[113.945px] mb-[-23.108px] relative rounded-[19.92px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[1.136px] border-[rgba(0,123,255,0.5)] border-solid inset-[-1.136px] pointer-events-none rounded-[21.0561px]"
      />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9.562px] h-[113.945px] items-center justify-start px-[19.124px] py-[12.749px] relative w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
            <div className="relative shrink-0 size-[59.761px]">
              <img
                className="block max-w-none size-full rounded-full"
                height="59.761"
                src={imgEllipse30}
                width="59.761"
              />
            </div>
            <div className="box-border capitalize content-stretch flex flex-col gap-[3.187px] items-start justify-start leading-[0] p-0 relative shrink-0 w-[113.148px]">
              <div className="font-['SF_Pro:Semibold',_sans-serif] font-[590] relative shrink-0 text-[#ffffff] text-[14.343px] text-center text-nowrap tracking-[-0.1434px]">
                <p className="block leading-[1.2] whitespace-pre">Mike Rodriguez</p>
              </div>
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold min-w-full not-italic relative shrink-0 text-[#d9d9d9] text-[9.562px] text-left">
                <p className="block leading-[1.4]">Elite Roofing & Construction</p>
              </div>
            </div>
            <QrCode />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_3.187px_19.92px_0px_inset_rgba(0,123,255,0.25)]" />
    </div>
  );
}

function ActionButtons() {
  const buttons = [
    { icon: "👤", label: "Edit Profile" },
    { icon: "✓", label: "Activate Device" },
    { icon: "🔗", label: "Direct Link" }
  ];

  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between mb-[-23.108px] p-0 relative shrink-0 w-[252.591px]">
      {buttons.map((button, index) => (
        <motion.div 
          key={index}
          className="box-border content-stretch flex flex-col gap-[10.359px] items-center justify-start p-0 relative shrink-0 w-[78.354px]"
          whileHover={{ scale: 1.1 }}
        >
          <div className="bg-[#2c2c2c] box-border content-stretch flex flex-row gap-[7.968px] items-center justify-center p-0 relative rounded-[39.841px] shrink-0 size-[35.857px]">
            <span className="text-[#dddddd] text-[16px]">{button.icon}</span>
          </div>
          <div className="capitalize font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#d9d9d9] text-[9.562px] text-center">
            <p className="block leading-[1.4]">{button.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MockupPhone() {
  return (
    <motion.div 
      className="bg-[#000000] h-[186.941px] overflow-clip relative rounded-[33.213px] shrink-0 w-[313.15px]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute box-border content-stretch flex flex-col gap-[32.669px] items-center justify-start left-[15.14px] p-0 top-[18.2px] w-[282.87px]">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-[23.108px] pt-0 px-0 relative shrink-0 w-full">
          <ProfileCard />
          <ActionButtons />
        </div>
      </div>
      {/* Share button */}
      <div className="absolute backdrop-blur-[5.279px] backdrop-filter bg-[rgba(0,123,255,0.2)] left-[236.66px] rounded-[42.231px] size-[42.231px] top-[66.81px]">
        <div className="box-border content-stretch flex flex-row gap-[8.446px] items-center justify-center overflow-clip px-[16.893px] py-[11.262px] relative size-[42.231px]">
          <div className="relative shrink-0 size-[23.108px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p18fe98c0} fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ToolsVisualization() {
  return (
    <motion.div 
      className="box-border content-stretch flex flex-row gap-[51px] h-[239px] items-center justify-end p-0 relative shadow-[-30px_0px_24px_0px_rgba(0,0,0,0.25)] shrink-0 w-[684px]"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Business card mockup */}
      <div className="h-[244.826px] relative shrink-0 w-[224.898px]">
        <div className="absolute box-border content-stretch flex flex-col gap-[6.44px] h-[292.395px] items-start justify-end left-[19px] p-0 top-[-48.42px] w-[264.701px]">
          <div className="backdrop-blur-[4.745px] backdrop-filter bg-[rgba(255,255,255,0.9)] h-[110.113px] relative rounded-[9.411px] w-[176.934px]">
            <div className="absolute box-border content-stretch flex flex-col gap-[0.941px] items-start justify-start left-[-9.41px] p-0 top-[8.47px] w-[195.757px]">
              <div className="capitalize font-['SF_Pro:Bold',_sans-serif] font-bold ml-[57.421px] mt-[26.351px] relative text-[#282828] text-[11.705px] text-center text-nowrap tracking-[-0.117px] translate-x-[-50%]">
                <p className="block leading-[1.2] whitespace-pre">Mike Rodriguez</p>
              </div>
              <div className="font-['Inter:Black',_sans-serif] font-black ml-[17.881px] mt-0 not-italic relative text-[#000000] text-[11.294px] text-left text-nowrap uppercase">
                <p className="block leading-[1.4] whitespace-pre">Elite Roofing</p>
              </div>
              <div className="bg-[#007bff] h-[5.647px] ml-0 mt-[15.999px] rounded-[23.528px] shadow-[0px_1.741px_7.834px_0px_#007bff] w-[195.757px]" />
            </div>
          </div>
        </div>
      </div>
      
      <MockupPhone />
      
      {/* Mobile device mockup */}
      <div className="h-[259.06px] relative shrink-0 w-[194.532px]">
        <div className="absolute bg-[50%_26.47%] bg-no-repeat bg-size-[220.47%_147.71%] inset-0" style={{ backgroundImage: `url('${imgRectangle}')` }} />
        <div className="absolute bg-[#007bff] box-border content-stretch flex flex-row inset-[83.71%_6%_10.24%_5.91%] items-center justify-between p-[3.563px] rounded-[8.909px]">
          <div className="box-border content-stretch flex flex-row gap-[4.276px] items-center justify-start p-0 relative shrink-0">
            <span className="text-[#d9d9d9] text-[8px]">📱</span>
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[5.702px] text-center text-nowrap">
              <p className="block leading-[1.4] whitespace-pre">Share QR to phone</p>
            </div>
          </div>
          <span className="text-white text-[8px]">📋</span>
        </div>
      </div>
    </motion.div>
  );
}

function StartTrialButton() {
  return (
    <motion.div
      className="bg-[#007bff] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-8 py-3 relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#0056b3] transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap uppercase">
        <p className="block leading-[18px] whitespace-pre">Start Your Free Trial</p>
      </div>
    </motion.div>
  );
}

function MainCard() {
  return (
    <motion.div 
      className="flex-1 bg-gradient-to-b from-[#004a99] h-auto min-h-[400px] lg:h-[561px] relative rounded-[15px] shrink-0 to-[#007bff] w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 sm:gap-6 h-auto min-h-[400px] lg:h-[561px] items-start justify-center p-4 sm:p-6 lg:pb-0 lg:pt-8 lg:px-8 relative w-full">
          <div className="flex-1 box-border content-stretch flex flex-col items-start justify-between p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
              <motion.div
                className="capitalize font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="block leading-[1.2] text-2xl sm:text-3xl lg:text-4xl xl:text-[42px]">The Tools Are Here. The Brand Is Yours.</p>
              </motion.div>
              <motion.div
                className="capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-left w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="block leading-[1.4] text-base sm:text-lg lg:text-[20px]">{`Ready to unify your team, build instant trust with homeowners, and finally grow your review base the smart way? `}</p>
              </motion.div>
              <StartTrialButton />
            </div>
            <div className="hidden lg:block">
              <ToolsVisualization />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function UpcomingFeaturesSection() {
  return (
    <section className="bg-[#020203] py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="box-border content-stretch flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch justify-start p-0 relative w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-row items-stretch self-stretch w-full lg:w-auto lg:flex-1">
            <BlueCard />
          </div>
          <div className="flex flex-row items-stretch self-stretch w-full lg:flex-1">
            <MainCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}