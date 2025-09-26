import React from 'react';
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Product } from "../../../data/products";

interface ProductInfoProps {
  product: Product;
}

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Product Title and Badges */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
          <span className="text-[#007bff] text-xs sm:text-sm font-medium">{product.category}</span>
          {product.isPopular && (
            <Badge className="bg-[#007bff] text-white text-xs">Popular</Badge>
          )}
          {product.isNew && (
            <Badge className="bg-green-600 text-white text-xs">New</Badge>
          )}
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">{product.name}</h1>
        
        {/* Rating */}
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  i < Math.floor(product.rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-white font-medium text-sm sm:text-base">{product.rating}</span>
          <span className="text-gray-400 text-sm sm:text-base">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">${product.price}</span>
          {product.originalPrice && (
            <span className="text-lg sm:text-xl text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
          {product.detailedDescription}
        </p>
      </div>
    </motion.div>
  );
}

export { ProductInfo };
