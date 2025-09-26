import React from 'react';
import { useState } from "react";
import { motion } from "motion/react";
import { Product } from "../../../data/products.ts";

interface ProductImageGalleryProps {
  product: Product;
  selectedImageIndex: number;
  setSelectedImageIndex: (index: number) => void;
}

function ProductImageGallery({ product, selectedImageIndex, setSelectedImageIndex }: ProductImageGalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main Image */}
      <div className="mb-4 sm:mb-6">
        <div className="aspect-square rounded-xl overflow-hidden bg-[#2a2a2a] p-4 sm:p-6 lg:p-8">
          <img
            src={product.gallery[selectedImageIndex]}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
        {product.gallery.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-[#2a2a2a] p-1 sm:p-2 border-2 transition-colors flex-shrink-0 ${
              selectedImageIndex === index ? 'border-[#007bff]' : 'border-transparent hover:border-gray-600'
            }`}
          >
            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export { ProductImageGallery };
