import svgPaths from "./svg-2n7pfquzy0";
import {
  imgGroup,
  imgGroup1,
  imgGroup2,
  imgGroup3,
  imgGroup4,
  imgGroup5,
} from "./svg-awgtg";

function Group() {
  return (
    <div
      className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.314px_0px] mask-size-[8.282px_8.19px] ml-[3.79%] mt-[0.001%] relative size-[7.969px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Group">
          <path
            d={svgPaths.pd021480}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[79.214%] mt-0 place-items-start relative"
      data-name="Clip path group"
    >
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div
      className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.314px_-0.143px] mask-size-[8.282px_8.111px] ml-[3.79%] mt-[1.759%] relative size-[7.969px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Group">
          <path
            d={svgPaths.p24d23c80}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[79.214%] mt-[79.642%] place-items-start relative"
      data-name="Clip path group"
    >
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div
      className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.314px_-0.241px] mask-size-[8.282px_8.53px] ml-[3.79%] mt-[2.83%] relative size-[7.969px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Group">
          <path
            d={svgPaths.p1e3be400}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[79.214%] mt-[39.395%] place-items-start relative"
      data-name="Clip path group"
    >
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="[grid-area:1_/_1] h-[39.343px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.249px] mask-size-[30.879px_39.842px] ml-0 mt-[0.625%] relative w-[30.55px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup3}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 31 40"
      >
        <g id="Group">
          <path
            d={svgPaths.p391a5400}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[0.004%] place-items-start relative"
      data-name="Clip path group"
    >
      <Group3 />
    </div>
  );
}

function Group1000010984() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ClipPathGroup />
      <ClipPathGroup1 />
      <ClipPathGroup2 />
      <ClipPathGroup3 />
    </div>
  );
}

function Icons() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.137px] items-start justify-start overflow-clip p-[3.137px] relative shrink-0 size-12"
      data-name="Icons"
    >
      <Group1000010984 />
    </div>
  );
}

function FeatureHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0"
      data-name="Feature Header"
    >
      <Icons />
      <div className="capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[22px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Global Brand Hub</p>
      </div>
    </div>
  );
}

function FeatureContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Content"
    >
      <FeatureHeader />
      <div
        className="font-['Poppins:Light',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.6]">
          Set your logo, color palette, fonts, and CTA language once. Apply it
          across all rep pages with a single click.
        </p>
      </div>
    </div>
  );
}

function FeatureItem() {
  return (
    <div
      className="basis-0 bg-[#2c2c2c] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="Feature Item"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none rounded-[15px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-[32px] relative size-full">
          <FeatureContent />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div
      className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[42.082px_42.082px] ml-0 mt-0 relative size-[42.082px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup4}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 43 43"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p23ef9500}
            fill="var(--fill-0, #007BFF)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Clip path group"
    >
      <Group4 />
    </div>
  );
}

function Icons1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.164px] items-start justify-start overflow-clip p-[3.164px] relative shrink-0 size-[48.41px]"
      data-name="Icons"
    >
      <ClipPathGroup4 />
    </div>
  );
}

function FeatureHeader1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Feature Header"
    >
      <Icons1 />
      <div className="capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[22px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Subdomain Branding</p>
      </div>
    </div>
  );
}

function FeatureContent1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Content"
    >
      <FeatureHeader1 />
      <div className="font-['Poppins:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
        <p className="block leading-[1.6]">{`Host all your rep profiles under your own subdomain (e.g., team.bestroofer.com/john). Your brand. Your domain. No visibility loss. `}</p>
      </div>
    </div>
  );
}

function FeatureItem1() {
  return (
    <div
      className="basis-0 bg-[#2c2c2c] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="Feature Item"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none rounded-[15px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-[32px] relative size-full">
          <FeatureContent1 />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div
      className="[grid-area:1_/_1] h-[36.159px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.701px_-0.733px] mask-size-[41.725px_36.863px] ml-[1.679%] mt-[1.988%] relative w-[39.955px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup5}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 37"
      >
        <g id="Group">
          <path
            d={svgPaths.p3228600}
            fill="var(--fill-0, #007BFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full"
      data-name="Clip path group"
    >
      <Group5 />
    </div>
  );
}

function Icons2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.137px] items-start justify-start overflow-clip p-[3.137px] relative shrink-0 size-12"
      data-name="Icons"
    >
      <ClipPathGroup5 />
    </div>
  );
}

function FeatureHeader2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Feature Header"
    >
      <Icons2 />
      <div className="basis-0 capitalize font-['Poppins:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[22px] text-left">
        <p className="block leading-[1.4]">Profile-Level Overrides</p>
      </div>
    </div>
  );
}

function FeatureContent2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Content"
    >
      <FeatureHeader2 />
      <div className="font-['Poppins:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
        <p className="block leading-[1.6]">
          Need some reps to tweak their design? You can override global settings
          at the profile level when needed.
        </p>
      </div>
    </div>
  );
}

function FeatureItem2() {
  return (
    <div
      className="basis-0 bg-[#2c2c2c] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="Feature Item"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none rounded-[15px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-[32px] relative size-full">
          <FeatureContent2 />
        </div>
      </div>
    </div>
  );
}

function FeaturesRow() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 h-[281px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Features Row"
    >
      <FeatureItem />
      <FeatureItem1 />
      <FeatureItem2 />
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Features Container"
    >
      <FeaturesRow />
      <div className="capitalize font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#aaaaaa] text-[20px] text-center w-full">
        <p className="font-['Poppins:Medium',_sans-serif] leading-[1.6]">
          <span className="text-[#e0e0e0]">
            Finally, your sales team looks and feels like one unified brand.
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default function MainContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[54px] items-center justify-start p-0 relative size-full"
      data-name="Main Container"
    >
      <div className="capitalize font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[54px] text-center w-[884px]">
        <p className="block leading-[1.2]">{`Keep Your Brand Consistent Across the Team `}</p>
      </div>
      <FeaturesContainer />
    </div>
  );
}