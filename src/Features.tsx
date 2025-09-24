"use client";

import { Header } from "./components/layout/Header";
import { FeaturesHeroSection } from "./components/sections/FeaturesHeroSection";
import { BuildCredibilitySection } from "./components/sections/BuildCredibilitySection";
import { BrandConsistencySection } from "./components/sections/BrandConsistencySection";
import { ReviewOpportunitySection } from "./components/sections/ReviewOpportunitySection";
import { UpcomingFeaturesSection } from "./components/sections/UpcomingFeaturesSection";
import { Footer } from "./components/layout/Footer";

export default function Features() {
  return (
    <div
      className="bg-[#020203] relative min-h-screen w-full"
      data-name="features-page"
    >
      <Header />
      <FeaturesHeroSection />
      <BuildCredibilitySection />
      <BrandConsistencySection />
      <ReviewOpportunitySection />
      <UpcomingFeaturesSection />
      <Footer />
    </div>
  );
}