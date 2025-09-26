import React from 'react';
import { motion } from "motion/react";
import { relatedProducts } from "../../../data/relatedProducts.ts";
import { Product } from "../../../data/products.ts";

interface RelatedProductsSectionProps {
  productId: string;
  onNavigate: (pageId: string, productId?: string) => void;
}

function RelatedProductsSection({ productId, onNavigate }: RelatedProductsSectionProps) {
  return (
    <section className="pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts
            .filter(p => p.id !== productId)
            .slice(0, 3)
            .map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#0f0f0f] border border-gray-700 rounded-xl overflow-hidden hover:border-[#007bff] transition-all duration-300 group cursor-pointer"
                onClick={() => onNavigate("product", relatedProduct.id)}
              >
                <div className="aspect-square bg-[#2a2a2a] p-6">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#007bff] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-2xl font-bold text-[#007bff]">${relatedProduct.price}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

export { RelatedProductsSection };
