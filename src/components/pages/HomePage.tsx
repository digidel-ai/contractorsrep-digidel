import React from 'react';
import { HeroSection } from "../sections/HeroSection";
import { WhyTopContractorsSection } from "../sections/WhyTopContractorsSection";
import { HowItWorksSection } from "../sections/HowItWorksSection";
import { ProductCarouselSection } from "../sections/ProductCarouselSection";
import { FairLeadAttributionSection } from "../sections/FairLeadAttributionSection";
import { SectionWrapper } from "../shared/SectionWrapper";

interface HomePageProps {
  onNavigate: (pageId: string, productId?: string) => void;
}

function HomePage({
  onNavigate,
}: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />

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
        <WhyTopContractorsSection />
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
            toColor: "#020203",
            height: "md",
            flip: true,
          },
        }}
      >
        <HowItWorksSection />
      </SectionWrapper>

      <SectionWrapper
        background="dark"
        paddingY="xl"
        separator={{
          bottom: {
            variant: "geometric",
            fromColor: "#020203",
            toColor: "#0a0a0b",
            height: "lg",
          },
        }}
      >
        <ProductCarouselSection onNavigate={onNavigate} />
      </SectionWrapper>

      <SectionWrapper
        background="darker"
        separator={{
          bottom: {
            variant: "gradient",
            fromColor: "#0a0a0b",
            toColor: "#020203",
            height: "md",
          },
        }}
      >
        <FairLeadAttributionSection />
      </SectionWrapper>
    </>
  );
}

export { HomePage };
