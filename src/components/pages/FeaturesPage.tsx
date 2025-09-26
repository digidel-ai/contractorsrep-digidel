import React from 'react';
import { FeaturesHeroSection } from "../sections/FeaturesHeroSection";
import { BuildCredibilitySection } from "../sections/BuildCredibilitySection";
import { BrandConsistencySection } from "../sections/BrandConsistencySection";
import { ReviewOpportunitySection } from "../sections/ReviewOpportunitySection";
import { UpcomingFeaturesSection } from "../sections/UpcomingFeaturesSection";
import { SectionWrapper } from "../shared/SectionWrapper";

function FeaturesPage() {
  return (
    <>
      <FeaturesHeroSection />

      <SectionWrapper
        background="darker"
        separator={{
          top: {
            variant: "wave",
            fromColor: "#020203",
            toColor: "#0a0a0b",
            height: "md",
          },
        }}
      >
        <BuildCredibilitySection />
      </SectionWrapper>

      <SectionWrapper
        background="gradient"
        separator={{
          top: {
            variant: "diagonal",
            fromColor: "#0a0a0b",
            toColor: "#1a1a1a",
            height: "sm",
          },
          bottom: {
            variant: "curve",
            fromColor: "#1a1a1a",
            toColor: "#0a0a0b",
            height: "md",
            flip: true,
          },
        }}
      >
        <BrandConsistencySection />
      </SectionWrapper>

      <SectionWrapper
        background="darker"
        separator={{
          bottom: {
            variant: "wave",
            fromColor: "#0a0a0b",
            toColor: "#020203",
            height: "md",
            flip: true,
          },
        }}
      >
        <ReviewOpportunitySection />
      </SectionWrapper>

      <SectionWrapper background="dark">
        <UpcomingFeaturesSection />
      </SectionWrapper>
    </>
  );
}

export { FeaturesPage };
