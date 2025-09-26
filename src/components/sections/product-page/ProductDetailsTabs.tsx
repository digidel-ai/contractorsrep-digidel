import React from 'react';
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Star, Zap, Users } from "lucide-react";
import { Product } from "@/data/products.ts";
import { testimonials } from "@/data/testimonials.ts";

interface ProductDetailsTabsProps {
  product: Product;
  testimonials: typeof testimonials;
}

function ProductDetailsTabs({ product, testimonials }: ProductDetailsTabsProps) {
  return (
    <section className="pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="benefits" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-[#1a1a1a] border border-gray-700">
            <TabsTrigger value="benefits" className="data-[state=active]:bg-[#007bff] data-[state=active]:text-white text-xs sm:text-sm">Benefits</TabsTrigger>
            <TabsTrigger value="specifications" className="data-[state=active]:bg-[#007bff] data-[state=active]:text-white text-xs sm:text-sm">Specs</TabsTrigger>
            <TabsTrigger value="use-cases" className="data-[state=active]:bg-[#007bff] data-[state=active]:text-white text-xs sm:text-sm">Use Cases</TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-[#007bff] data-[state=active]:text-white text-xs sm:text-sm">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="benefits" className="mt-6 sm:mt-8">
            <div className="bg-[#0f0f0f] border border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Why Contractors Choose This Product</h3>
              <div className="space-y-3 sm:space-y-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff] mt-1 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6 sm:mt-8">
            <div className="bg-[#0f0f0f] border border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 border-b border-gray-700 last:border-b-0 gap-1 sm:gap-0">
                    <span className="text-gray-400 font-medium text-sm sm:text-base">{key}:</span>
                    <span className="text-white text-sm sm:text-base">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="use-cases" className="mt-6 sm:mt-8">
            <div className="bg-[#0f0f0f] border border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Perfect For These Situations</h3>
              <div className="space-y-3 sm:space-y-4">
                {product.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff] mt-1 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed text-sm sm:text-base">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0f0f0f] border border-gray-700 rounded-xl p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#007bff] to-[#00d4ff] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company} • {testimonial.location}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">"{testimonial.review}"</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export { ProductDetailsTabs };
