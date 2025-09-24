"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function WaitlistFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contractorTypes = [
    "Roofing", "Plumbing", "Electrical", "HVAC", 
    "Landscaping", "Remodeling / Renovation", "Other"
  ];

  const revenueRanges = [
    "Under $500K", "$500K–$1M", "$1M–$5M", "$5M+"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Successfully joined the waitlist!");
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0a0a0b] to-[#020203]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">You're on the list!</h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
                We'll reach out with your early access invite as soon as Contractor's Rep is ready to launch.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0a0a0b] to-[#020203]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Form Header */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Tell Us About Your Business — <span className="text-[#00d4ff]">Secure Your Spot</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Fill in the details below so we can tailor your Contractor's Rep onboarding when it's ready. Spaces for early access are limited.
            </p>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-800/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Row 1: Company Name & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-white">
                  Contractor Company Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  required
                  className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#007bff] transition-colors"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city" className="text-white">
                  City <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="city"
                  name="city"
                  required
                  className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#007bff] transition-colors"
                  placeholder="Enter your city"
                />
              </div>
            </div>

            {/* Row 2: Contractor Type & Revenue */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="contractorType" className="text-white">
                  Type of Contractor <span className="text-red-400">*</span>
                </Label>
                <Select name="contractorType" required>
                  <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#007bff]">
                    <SelectValue placeholder="Select contractor type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-gray-700">
                    {contractorTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()} className="text-white focus:bg-[#007bff] focus:text-white">
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="revenue" className="text-white">
                  Annual Revenue Range <span className="text-red-400">*</span>
                </Label>
                <Select name="revenue" required>
                  <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#007bff]">
                    <SelectValue placeholder="Select revenue range" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-gray-700">
                    {revenueRanges.map((range) => (
                      <SelectItem key={range} value={range.toLowerCase()} className="text-white focus:bg-[#007bff] focus:text-white">
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 3: Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Phone Number <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#007bff] transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#007bff] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Row 4: Website */}
            <div className="space-y-2">
              <Label htmlFor="website" className="text-white">
                Website <span className="text-gray-500">(Optional)</span>
              </Label>
              <Input
                id="website"
                name="website"
                type="url"
                className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#007bff] transition-colors"
                placeholder="https://yourwebsite.com"
              />
            </div>

            {/* Submit Button */}
            <motion.div
              className="pt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#007bff] to-[#00d4ff] hover:from-[#0056b3] hover:to-[#007bff] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Securing Your Spot...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Secure My Early Access
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}