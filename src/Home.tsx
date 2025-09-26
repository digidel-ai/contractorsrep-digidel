"use client";

import { motion } from "framer-motion";

import { HeroSection } from "./components/sections/home/HeroSection";
import { ProblemSection } from "./components/sections/home/ProblemSection";
import { SolutionSection } from "./components/sections/home/SolutionSection";
import { TwoStageSection } from "./components/sections/home/TwoStageSection";
import { SocialProofSection } from "./components/sections/home/SocialProofSection";
import { CTASection } from "./components/sections/home/CTASection";

// Main Home Component
export default function Home() {
  return (
    <div className="bg-[#020203] text-white overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TwoStageSection />
      <SocialProofSection />
      <CTASection />
    </div>
  );
}