import React from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyTopContractorsSection } from "@/components/sections/WhyTopContractorsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ProductCarouselSection } from "@/components/sections/ProductCarouselSection";
import { FairLeadAttributionSection } from "@/components/sections/FairLeadAttributionSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

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
