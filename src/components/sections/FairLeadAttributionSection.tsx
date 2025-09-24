"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { staggerChildren, fadeInLeft, fadeInRight, fadeInUp } from "../../utils/animations";
import imgGroup10000109811 from "figma:asset/7bc0e0b06c8a7b1e754fc34be87c90dc8b31bbe6.png";
import imgGroup10000109813 from "figma:asset/6df1f95e6241bf1fcdc11e22b201396bba19bf39.png";
import imgGroup10000109812 from "figma:asset/afe39ee5d93dc4369793bcf173f890f7d2d9b8c4.png";

export function FairLeadAttributionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  const carouselData = [
    {
      id: 0,
      image: imgGroup10000109811,
      title: "Homeowner lands on rep's profile",
      description: "Customer discovers your digital profile through NFC tap, QR scan, or shared link"
    },
    {
      id: 1,
      image: imgGroup10000109813,
      title: "Views credentials and local projects",
      description: "Reviews GAF Master Elite® certification, neighborhood work photos, and 5-star Google reviews"
    },
    {
      id: 2,
      image: imgGroup10000109812,
      title: "Submits lead or contacts directly",
      description: "Fills out quote form or calls directly - automatically attributed to your profile"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % carouselData.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <motion.div
      ref={ref}
      className="relative shrink-0 w-full bg-[#020203]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      data-name="fair-lead-attribution"
    >
      <div className="flex flex-col items-center justify-center relative w-full">
        <div className="flex flex-col gap-2.5 items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-[50px] w-full max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[100px] items-center justify-center w-full"
            variants={staggerChildren}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {/* Left Content */}
            <motion.div
              className="flex flex-col gap-3 sm:gap-4 items-start justify-start w-full lg:w-[440px] order-1 lg:order-1"
              variants={fadeInLeft}
            >
              <motion.div
                className="flex flex-col gap-4 items-start justify-start w-full text-center lg:text-left"
                variants={staggerChildren}
              >
                <motion.div
                  className="font-['Poppins:SemiBold',_sans-serif] text-[#ffffff] tracking-[-0.3914px] uppercase w-full"
                  variants={fadeInUp}
                >
                  <p className="leading-[1.1]">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[92.059px] block sm:inline">Fair Lead </span>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[39.143px] block sm:inline">Attribution, Finally!</span>
                  </p>
                </motion.div>
                <motion.div
                  className="font-['Poppins:Medium',_sans-serif] text-[#e0e0e0] w-full"
                  variants={fadeInUp}
                >
                  <p className="leading-[1.4] text-base sm:text-lg lg:text-xl xl:text-[22px]">Know Exactly Who Closed The Lead</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="font-['Poppins:Regular',_sans-serif] text-[#e0e0e0] w-full text-center lg:text-left"
                variants={fadeInUp}
              >
                <p className="leading-[1.6] text-sm sm:text-base lg:text-[16px]">
                  When a homeowner fills out a quote form, taps a rep's NFC card, or calls after viewing a digital profile, that lead is instantly logged and attributed to the right sales rep inside your dashboard. Perfect for commission tracking, performance metrics, and rewarding your top performers.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="flex flex-col gap-6 sm:gap-8 lg:gap-[42px] items-center justify-start w-full lg:w-auto order-2 lg:order-2"
              variants={fadeInRight}
            >
              {/* Carousel */}
              <motion.div
                className="flex flex-row gap-3 sm:gap-4 lg:gap-[28.421px] items-center justify-center w-full overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="bg-[47.25%_28.75%] bg-no-repeat bg-size-[141.41%_123.16%] h-[120px] sm:h-[180px] lg:h-[238.541px] rounded-tl-[8px] sm:rounded-tl-[12px] lg:rounded-tl-[16.118px] rounded-tr-[8px] sm:rounded-tr-[12px] lg:rounded-tr-[16.118px] w-[60px] sm:w-[90px] lg:w-[117.121px] hidden sm:block"
                  style={{
                    backgroundImage: `url('${carouselData[(activeStep - 1 + carouselData.length) % carouselData.length].image}')`
                  }}
                  animate={{ y: [0, -5, 0], opacity: [0.2, 0.25, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ opacity: 0.4, scale: 1.02 }}
                />
                <motion.div
                  className="relative h-[200px] sm:h-[280px] lg:h-[357.172px] rounded-tl-[12px] sm:rounded-tl-[18px] lg:rounded-tl-[24.133px] rounded-tr-[12px] sm:rounded-tr-[18px] lg:rounded-tr-[24.133px] w-[120px] sm:w-[140px] lg:w-[175.368px] overflow-hidden mx-auto"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      className="bg-[47.25%_28.75%] bg-no-repeat bg-size-[141.41%_123.16%] h-full w-full absolute inset-0"
                      style={{ backgroundImage: `url('${carouselData[activeStep].image}')` }}
                      initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -8, 0] }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                      transition={{
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.5 },
                        rotateY: { duration: 0.5 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className="bg-[47.25%_28.75%] bg-no-repeat bg-size-[141.41%_123.16%] h-[120px] sm:h-[180px] lg:h-[238.541px] rounded-tl-[8px] sm:rounded-tl-[12px] lg:rounded-tl-[16.118px] rounded-tr-[8px] sm:rounded-tr-[12px] lg:rounded-tr-[16.118px] w-[60px] sm:w-[90px] lg:w-[117.121px] hidden sm:block"
                  style={{
                    backgroundImage: `url('${carouselData[(activeStep + 1) % carouselData.length].image}')`
                  }}
                  animate={{ y: [0, -5, 0], opacity: [0.2, 0.25, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  whileHover={{ opacity: 0.4, scale: 1.02 }}
                />
              </motion.div>

              {/* Step Indicator & Description */}
              <motion.div className="flex flex-col gap-6 items-center justify-start w-full" variants={staggerChildren}>
                <motion.div
                  className="flex items-center justify-between w-full max-w-[320px] mx-auto h-[40px] px-4 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="absolute top-[18px] left-0 right-0 h-[2px]">
                    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 2">
                      <defs>
                        <linearGradient id="paint0_linear_progress" x1="0" x2="100" y1="1" y2="1">
                          <stop offset="0.2" stopColor="#B1B1B1" />
                          <stop offset="0.947115" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                      <motion.line
                        stroke="url(#paint0_linear_progress)"
                        strokeWidth="2"
                        x1="0"
                        x2="100"
                        y1="1"
                        y2="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: (activeStep + 1) / carouselData.length }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>

                  {carouselData.map((_, index) => (
                    <motion.div
                      key={index}
                      className="relative cursor-pointer z-10"
                      animate={{ scale: index === activeStep ? [1, 1.15, 1.1] : 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      onClick={() => setActiveStep(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="relative w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]">
                        <motion.div
                          className="absolute inset-0 rounded-full border-2"
                          animate={{
                            backgroundColor: index <= activeStep ? '#007BFF' : '#2C2C2C',
                            borderColor: index === activeStep ? '#ffffff' : 'transparent',
                            boxShadow: index === activeStep ? '0 0 20px rgba(0, 123, 255, 0.5)' : 'none'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center font-['Poppins:Medium',_sans-serif] text-xs sm:text-sm lg:text-[16px]">
                          <motion.p
                            animate={{
                              color: index <= activeStep ? '#ffffff' : '#888888',
                              fontWeight: index === activeStep ? 600 : 400
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {index + 1}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    className="font-['Poppins:Regular',_sans-serif] text-[#e0e0e0] text-center w-full px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-base sm:text-lg lg:text-[20px]">{carouselData[activeStep].title}</p>
                    <p className="text-sm sm:text-base text-[#b0b0b0] mt-2">{carouselData[activeStep].description}</p>
                  </motion.div>
                </AnimatePresence>

                {/* Nav Arrows */}
                <motion.div
                  className="bg-[rgba(255,255,255,0.1)] h-[31.5px] rounded-[22.5px] backdrop-blur-sm px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.15)", scale: 1.05 }}
                >
                  <div className="flex flex-row items-center justify-center gap-6 h-full px-4">
                    <motion.div
                      className="p-2 cursor-pointer"
                      whileHover={{ scale: 1.3, x: -2 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={prevStep}
                    >
                      <svg className="h-[10.5px] w-[5.25px]" fill="none" viewBox="0 0 8 13">
                        <motion.path d="M1 1L6.25 6.25L1 11.5" stroke="#BDBDBD" strokeWidth="1.5" />
                      </svg>
                    </motion.div>
                    <motion.div
                      className="p-2 cursor-pointer"
                      whileHover={{ scale: 1.3, x: 2 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={nextStep}
                    >
                      <svg className="h-[10.5px] w-[5.25px]" fill="none" viewBox="0 0 8 13">
                        <motion.path d="M1 1L6.25 6.25L1 11.5" stroke="#BDBDBD" strokeWidth="1.5" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}