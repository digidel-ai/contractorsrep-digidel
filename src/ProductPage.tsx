"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Button } from "./components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react"; // Only these two remain for the breadcrumbs and not found page
import { Product, products } from "../data/products";
import { relatedProducts } from "../data/relatedProducts";
import { testimonials } from "../data/testimonials";
import { ProductImageGallery } from "./components/sections/product-page/ProductImageGallery";
import { ProductInfo } from "./components/sections/product-page/ProductInfo";
import { ProductFeatures } from "./components/sections/product-page/ProductFeatures";
import { ProductPurchaseSection } from "./components/sections/product-page/ProductPurchaseSection";
import { ProductDetailsTabs } from "./components/sections/product-page/ProductDetailsTabs";
import { RelatedProductsSection } from "./components/sections/product-page/RelatedProductsSection";

interface ProductPageProps {
  productId: string;
  onNavigate: (pageId: string, productId?: string) => void;
}

export default function ProductPage({ productId, onNavigate }: ProductPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = products.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="bg-[#020203] min-h-screen">
        <Header currentPage={"products"} onNavigate={onNavigate} />
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
            <Button onClick={() => onNavigate("products")} className="bg-[#007bff] hover:bg-[#0056b3]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#020203] min-h-screen">
      <Header currentPage={"products"} onNavigate={onNavigate} />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-6 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
            <button 
              onClick={() => onNavigate("home")}
              className="hover:text-[#007bff] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <button 
              onClick={() => onNavigate("products")}
              className="hover:text-[#007bff] transition-colors"
            >
              Products
            </button>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-white truncate">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Product Images */}
            <ProductImageGallery 
              product={product}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
            />

            {/* Product Info */}
            <ProductInfo product={product} />

            {/* Key Features */}
            <ProductFeatures product={product} />

            {/* Purchase Section */}
            <ProductPurchaseSection product={product} />

          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <ProductDetailsTabs product={product} testimonials={testimonials} />

      {/* Related Products */}
      <RelatedProductsSection productId={productId} onNavigate={onNavigate} />

      <Footer />
    </div>
  );
}