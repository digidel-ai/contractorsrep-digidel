import imgGenerateAnImageOfRoofingContractorWearingCapAndPoloTShirtStandingAndHappyFace from "figma:asset/c0a43bec4e30bd43870af1fe29af2234383ab05c.png";
import imgFrame100001559411 from "figma:asset/19dab61f9a80f86a4a7abfaed02b957584f0918a.png";
import { imgGenerateAnImageOfRoofingContractorWearingCapAndPoloTShirtStandingAndHappyFace1 } from "./svg-1udkp";

function Frame1000015596() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[33px] items-start justify-start not-italic p-0 relative shrink-0 text-left w-[541px]">
      <div className="capitalize font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#ffffff] text-[54px] w-full">
        <p className="block leading-[1.2]">
          Everything You Need to Build Trust, Close Faster, and
          Grow Smarter
        </p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#f0f0f0] text-[0px] w-full">
        <p className="leading-[1.4] text-[20px]">
          <span>{`Contractor’s Rep isn’t just another software tool. It’s your full-stack credibility engine—purpose-built for contractor sales teams who operate in the real world. From rep profiles to review generation, from brand control to future-ready analytics, this platform does one thing well: Help you close more deals by building trust faster. `}</span>
          <span className="font-['Poppins:Bold',_sans-serif] not-italic">{`Help you close more deals by building trust faster. `}</span>
        </p>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative"
      data-name="Mask group"
    >
      <div
        className="[grid-area:1_/_1] bg-[78.21%_14.42%] bg-no-repeat bg-size-[99.74%_108.49%] h-[227.315px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[82.199px_-1.167px] mask-size-[125.924px_125.922px] ml-[-82.199px] mt-[1.167px] w-[247.255px]"
        data-name="Generate an image of Roofing Contractor Wearing Cap and Polo T Shirt standing and happy face"
        style={{
          backgroundImage: `url('${imgGenerateAnImageOfRoofingContractorWearingCapAndPoloTShirtStandingAndHappyFace}')`,
          maskImage: `url('${imgGenerateAnImageOfRoofingContractorWearingCapAndPoloTShirtStandingAndHappyFace1}')`,
        }}
      />
    </div>
  );
}

function Group1000011001() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[332.891px] mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] ml-[0.001px] mt-0 relative size-[125.922px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 126 126"
        >
          <circle
            cx="62.9609"
            cy="62.9609"
            fill="var(--fill-0, #0065D0)"
            id="Ellipse 2478"
            r="62.9609"
          />
        </svg>
      </div>
      <MaskGroup />
    </div>
  );
}

function HeroImage2() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Hero_Image2"
    >
      <div
        className="[grid-area:1_/_1] bg-[99.87%_27.14%] bg-no-repeat bg-size-[100.07%_116.64%] h-[478.801px] ml-0 mt-[30.123px] w-[518.787px]"
        data-name="Frame 1000015594 (1) 1"
        style={{
          backgroundImage: `url('${imgFrame100001559411}')`,
        }}
      />
      <Group1000011001 />
    </div>
  );
}

function Frame1000015592() {
  return (
    <div className="box-border content-stretch flex flex-row gap-16 items-center justify-center leading-[0] p-0 relative shrink-0">
      <Frame1000015596 />
      <HeroImage2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2.5 py-16 relative size-full">
          <Frame1000015592 />
        </div>
      </div>
    </div>
  );
}