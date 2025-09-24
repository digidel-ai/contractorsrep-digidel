"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { WhyTopContractorsSection } from "./components/sections/WhyTopContractorsSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection";
import { ProductCarouselSection } from "./components/sections/ProductCarouselSection";
import { FairLeadAttributionSection } from "./components/sections/FairLeadAttributionSection";
import { SectionWrapper } from "./components/shared/SectionWrapper";
import { FeaturesHeroSection } from "./components/sections/FeaturesHeroSection";
import { BuildCredibilitySection } from "./components/sections/BuildCredibilitySection";
import { BrandConsistencySection } from "./components/sections/BrandConsistencySection";
import { ReviewOpportunitySection } from "./components/sections/ReviewOpportunitySection";
import { UpcomingFeaturesSection } from "./components/sections/UpcomingFeaturesSection";
import { Footer } from "./components/layout/Footer";
import Products from "./Products";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./components/shared/LoadingSpinner";
const ProductPage = lazy(() => import("./ProductPage"));
import Waitlist from "./Waitlist";
import { ProductionTicker } from "./components/layout/ProductionTicker";

function HomePage({
  onNavigate,
}: {
  onNavigate: (pageId: string, productId?: string) => void;
}) {
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

function ComingSoonPage({ pageName }: { pageName: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020203]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4 capitalize">
          {pageName}
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Coming Soon
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#007bff] to-[#00d4ff] mx-auto"></div>
      </div>
    </div>
  );
}

// URL route mapping
const getRouteFromPath = (pathname: string): { page: string; productId?: string } => {
  if (pathname === "/" || pathname === "") return { page: "home" };
  if (pathname === "/features") return { page: "features" };
  if (pathname === "/products") return { page: "products" };
  if (pathname === "/waitlist") return { page: "waitlist" };
  if (pathname === "/solutions") return { page: "solutions" };
  if (pathname === "/pricing") return { page: "pricing" };
  if (pathname === "/resources") return { page: "resources" };
  if (pathname.startsWith("/product/")) {
    const productId = pathname.split("/product/")[1];
    return { page: "product", productId };
  }
  return { page: "home" }; // Default fallback
};

const getPathFromRoute = (page: string, productId?: string): string => {
  switch (page) {
    case "home": return "/";
    case "features": return "/features";
    case "products": return "/products";
    case "product": return productId ? `/product/${productId}` : "/products";
    case "waitlist": return "/waitlist";
    case "solutions": return "/solutions";
    case "pricing": return "/pricing";
    case "resources": return "/resources";
    default: return "/";
  }
};

export default function Router() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentProductId, setCurrentProductId] = useState<
    string | null
  >(null);

  // Initialize from URL on mount
  useEffect(() => {
    const initializeFromURL = () => {
      const pathname = window.location.pathname;
      const route = getRouteFromPath(pathname);
      setCurrentPage(route.page);
      if (route.productId) {
        setCurrentProductId(route.productId);
      }
    };

    initializeFromURL();

    // Handle browser back/forward buttons
    const handlePopState = () => {
      initializeFromURL();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Update document title based on current page
  useEffect(() => {
    const updateTitle = () => {
      const baseTitle = "Contractor's Rep";
      switch (currentPage) {
        case "home":
          document.title = `${baseTitle} - Digital Credibility Suite for Roofing Contractors`;
          break;
        case "features":
          document.title = `Features - ${baseTitle}`;
          break;
        case "products":
          document.title = `Shop Products - ${baseTitle}`;
          break;
        case "product":
          document.title = `Product Details - ${baseTitle}`;
          break;
        case "waitlist":
          document.title = `Join Waitlist - ${baseTitle}`;
          break;
        case "solutions":
          document.title = `Solutions - ${baseTitle}`;
          break;
        case "pricing":
          document.title = `Pricing - ${baseTitle}`;
          break;
        case "resources":
          document.title = `Resources - ${baseTitle}`;
          break;
        default:
          document.title = baseTitle;
      }
    };

    updateTitle();
  }, [currentPage]);

  const handleNavigate = (
    pageId: string,
    productId?: string,
  ) => {
    setCurrentPage(pageId);
    if (productId) {
      setCurrentProductId(productId);
    } else {
      setCurrentProductId(null);
    }

    // Update URL
    const newPath = getPathFromRoute(pageId, productId);
    window.history.pushState(null, "", newPath);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "features":
        return <FeaturesPage />;
      case "products":
        return <Products onNavigate={handleNavigate} />;
      case "product":
        return currentProductId ? (
          <Suspense fallback={<div className="py-24 flex items-center justify-center"><LoadingSpinner variant='spinner' size='lg' /></div>}>
            <ProductPage
              productId={currentProductId}
              onNavigate={handleNavigate}
            />
          </Suspense>
        ) : (
          <Products onNavigate={handleNavigate} />
        );
      case "waitlist":
        return <Waitlist />;
      case "solutions":
        return <ComingSoonPage pageName="Solutions" />;
      case "pricing":
        return <ComingSoonPage pageName="Pricing" />;
      case "resources":
        return <ComingSoonPage pageName="Resources" />;
      default:
        return <HomePage />;
    }
  };

  const renderPage = () => {
    if (
      currentPage === "products" ||
      currentPage === "product" ||
      currentPage === "waitlist"
    ) {
      return renderCurrentPage();
    }
    return (
      <>
        {renderCurrentPage()}
        <Footer />
      </>
    );
  };

  return (
    <div
      className="bg-[#020203] relative min-h-screen w-full"
      data-name="contractors-rep-website"
    >
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      {(currentPage === "home" ||
        currentPage === "features") && (
        <ProductionTicker onNavigate={handleNavigate} />
      )}
      {renderPage()}
    </div>
  );
}