"use client";

import { WaitlistHeroSection } from "./components/sections/WaitlistHeroSection";
import { WaitlistFormSection } from "./components/sections/WaitlistFormSection";

export default function Waitlist() {
  return (
    <div className="w-full">
      <WaitlistHeroSection />
      <WaitlistFormSection />
    </div>
  );
}