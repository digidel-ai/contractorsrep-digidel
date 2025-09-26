import { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Products from "./Products";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./components/shared/LoadingSpinner";
const ProductPage = lazy(() => import("./ProductPage"));
import Waitlist from "./Waitlist";
import { ProductionTicker } from "./components/layout/ProductionTicker";
import { getRouteFromPath, getPathFromRoute } from "@/utils/router.ts";
import { HomePage } from "./components/pages/HomePage";
import { FeaturesPage } from "./components/pages/FeaturesPage";
import { ComingSoonPage } from "./components/pages/ComingSoonPage";

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