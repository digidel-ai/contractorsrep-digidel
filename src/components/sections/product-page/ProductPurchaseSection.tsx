import React from 'react';
import { useState } from "react";
import { Button } from "../../ui/button";
import { ShoppingCart, Heart, Share2, Truck, Shield, Clock } from "lucide-react";
import { Product } from "../../../data/products.ts";

interface ProductPurchaseSectionProps {
  product: Product;
}

function ProductPurchaseSection({ product }: ProductPurchaseSectionProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="border border-gray-700 rounded-xl p-4 sm:p-6 bg-[#0f0f0f]">
      {/* Quantity Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        <label className="text-white font-medium text-sm sm:text-base">Quantity:</label>
        <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-[#1a1a1a] w-full sm:w-auto">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors text-sm sm:text-base"
          >
            −
          </button>
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-[#0f0f0f] text-white min-w-[60px] sm:min-w-[80px] text-center text-sm sm:text-base">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors text-sm sm:text-base"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        size="lg"
        className="w-full bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white hover:from-[#0056b3] hover:to-[#007bff] shadow-lg hover:shadow-[#007bff]/25 transition-all duration-300 mb-4"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Add to Cart - ${(product.price * quantity).toFixed(2)}
      </Button>

      {/* Secondary Actions */}
      <div className="flex gap-3">
        <Button variant="outline" size="sm" className="flex-1 border-gray-600 text-gray-300 hover:bg-[#1a1a1a]">
          <Heart className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button variant="outline" size="sm" className="flex-1 border-gray-600 text-gray-300 hover:bg-[#1a1a1a]">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <Truck className="w-6 h-6 text-[#007bff] mb-2" />
            <span className="text-sm text-gray-300">Free Shipping</span>
            <span className="text-xs text-gray-500">On orders $75+</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-6 h-6 text-[#007bff] mb-2" />
            <span className="text-sm text-gray-300">1-Year Warranty</span>
            <span className="text-xs text-gray-500">Quality guaranteed</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-6 h-6 text-[#007bff] mb-2" />
            <span className="text-sm text-gray-300">Fast Setup</span>
            <span className="text-xs text-gray-500">Ready in 24hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductPurchaseSection };
