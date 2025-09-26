import React from 'react';
import { Check } from "lucide-react";
import { Product } from "../../../data/products";

interface ProductFeaturesProps {
  product: Product;
}

function ProductFeatures({ product }: ProductFeaturesProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Key Features</h3>
      <div className="grid grid-cols-1 gap-3">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff] flex-shrink-0" />
            <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ProductFeatures };
