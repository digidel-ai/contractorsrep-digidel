import svgPaths from "./svg-89j87e78f4";
import imgCustomizeYourProfile from "@/assets/119ce05ccdf3e8a8c87fd43c594082c5d3733a3a.png";
import imgPortfolioManagement1 from "@/assets/20d7187d551662fe5ca0122e00106baabbde5286.png";
import imgPortfolioManagement2 from "@/assets/049eb5035f09a92ded8b58b4f4ee3f7432a96537.png";
import imgScreenReplaceHere1 from "@/assets/5941e52236247a7f745f865a1fe0788272d652bd.png";
import imgIStock469932909 from "@/assets/0163f5904cd32b7a4ad66e8b47b0489ce42f5c2d.png";
import imgLens from "@/assets/4bdb0d0a8cd77b90cac321ec2741c7d4169ff2f2.png";
import imgImage from "@/assets/40ab0cb9eb7a0040f5ba1bff9a9ca4a60d1b0493.png";
import imgScreenReplaceHere3 from "@/assets/c973c2eb85f796a06fe58c9b800779d4aae0cf2e.png";
import imgLens1 from "@/assets/67830763f82fdf85511f01e79f2ade1854493d70.png";
import { imgScreenReplaceHere, imgScreenReplaceHere2 } from "./svg-lcm29";

function HeaderSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="Header Section"
    >
      <div className="capitalize font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#ffffff] text-[54px] w-full">
        <p className="block leading-[1.2]">Build Immediate Credibility</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#aaaaaa] text-[20px] w-full">
        <p className="leading-[1.6]">
          <span className="font-['Poppins:Bold',_sans-serif] not-italic text-[#ffffff]">
            Digital Team Profiles
          </span>
          <span>{` Give every rep their own branded digital profile page—fully mobile, lightning-fast, and built to convert. This personalized page can be sent to clients upon booking an appointment, proactively introducing the sales rep before they even arrive, fostering familiarity and comfort from the outset. `}</span>
        </p>
      </div>
    </div>
  );
}

function FeatureInfo() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow h-full items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
      data-name="Feature Info"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[20px] w-full">
        <p className="block leading-[1.4]">Headshot, Role, Bio, Contact Info</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#bebebe] text-[15px] tracking-[0.6px] w-full">
        <p className="block leading-[1.5]">
          A friendly face and a professional introduction, including direct
          phone, email, and links to professional social media
        </p>
      </div>
    </div>
  );
}

function FeatureImage() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.388px] grow h-[304px] items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Image"
    >
      <div
        className="bg-[49.24%_15.15%] bg-no-repeat bg-size-[144.58%_156.18%] h-[296px] rounded-tl-[30px] rounded-tr-[30px] shrink-0 w-[180px]"
        data-name="customize your Profile"
        style={{ backgroundImage: `url('${imgCustomizeYourProfile}')` }}
      />
    </div>
  );
}

function FeatureColumn() {
  return (
    <div
      className="basis-0 bg-[#120b19] grow h-[328px] min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="Feature Column"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 123, 255, 0.25) 0%, rgba(0, 123, 255, 0) 100%), linear-gradient(90deg, rgb(18, 11, 25) 0%, rgb(18, 11, 25) 100%)",
      }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 h-[328px] items-start justify-start pb-0 pt-6 px-6 relative w-full">
          <FeatureInfo />
          <FeatureImage />
        </div>
      </div>
    </div>
  );
}

function FeatureInfo1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
      data-name="Feature Info"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[20px] w-full">
        <p className="block leading-[1.4]">
          Past Project Gallery, Licenses, Certifications
        </p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#bebebe] text-[15px] tracking-[0.6px] w-full">
        <p className="block leading-[1.5]">{`Showcase successfully completed projects with high-quality images and videos. Display critical credentials like licenses, insurance, and industry certifications to build immediate trust. `}</p>
      </div>
    </div>
  );
}

function FeatureImage1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-[8.762px] grow h-[304px] items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Image"
    >
      <div
        className="bg-[0%_15.95%] bg-no-repeat bg-size-[100%_152.2%] h-[304px] shrink-0 w-[261px]"
        data-name="Portfolio management 1"
        style={{ backgroundImage: `url('${imgPortfolioManagement1}')` }}
      />
    </div>
  );
}

function FeatureColumn1() {
  return (
    <div
      className="basis-0 bg-[#120b19] grow h-[328px] min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="Feature Column"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 123, 255, 0.25) 0%, rgba(0, 123, 255, 0) 100%), linear-gradient(90deg, rgb(18, 11, 25) 0%, rgb(18, 11, 25) 100%)",
      }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-8 h-[328px] items-start justify-start pb-0 pt-6 px-6 relative w-full">
          <FeatureInfo1 />
          <FeatureImage1 />
        </div>
      </div>
    </div>
  );
}

function FeatureRow() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Feature Row"
    >
      <FeatureColumn />
      <FeatureColumn1 />
    </div>
  );
}

function FeatureInfo2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
      data-name="Feature Info"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[20px] w-full">
        <p className="block leading-[1.4]">{`Embedded Google Reviews and "About Me" Videos`}</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#bebebe] text-[15px] tracking-[0.6px] w-full">
        <p className="block leading-[1.5]">{`Feature glowing reviews from satisfied clients for authenticity. Include a short, personable video where the sales rep introduces themselves and your company's values.`}</p>
      </div>
    </div>
  );
}

function FeatureImage2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-[8.762px] grow h-[304px] items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Image"
    >
      <div
        className="bg-[0%_14.8%] bg-no-repeat bg-size-[100%_158.67%] h-[304px] shrink-0 w-[272px]"
        data-name="Portfolio management 1"
        style={{ backgroundImage: `url('${imgPortfolioManagement2}')` }}
      />
    </div>
  );
}

function FeatureColumn2() {
  return (
    <div
      className="bg-[#120b19] box-border content-stretch flex flex-row gap-8 h-full items-start justify-start overflow-clip pb-0 pt-6 px-6 relative rounded-[15px] shrink-0 w-[547px]"
      data-name="Feature Column"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 123, 255, 0.25) 0%, rgba(0, 123, 255, 0) 100%), linear-gradient(90deg, rgb(18, 11, 25) 0%, rgb(18, 11, 25) 100%)",
      }}
    >
      <FeatureInfo2 />
      <FeatureImage2 />
    </div>
  );
}

function FeatureInfo3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow h-full items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
      data-name="Feature Info"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[20px] w-full">
        <p className="block leading-[1.4]">Customer Testimonials</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#bebebe] text-[15px] tracking-[0.6px] w-full">
        <p className="block leading-[1.5]">{`Display customer testimonials complete with names and locations. `}</p>
      </div>
    </div>
  );
}

function Screen() {
  return (
    <div
      className="absolute contents left-[9.28px] top-[10.24px]"
      data-name="Screen"
    >
      <div
        className="absolute inset-[3.6%_4.98%_-83.13%_4.73%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[176.961px_509.84px]"
        data-name="Screen (Replace here)"
        style={{ maskImage: `url('${imgScreenReplaceHere}')` }}
      >
        <img
          className="block max-w-none size-full"
          height="509.84"
          loading="lazy"
          src={imgScreenReplaceHere1}
          width="176.961"
        />
      </div>
      <div
        className="absolute bg-[#ffffff] bg-size-[100%_261.42%,auto] h-[400.854px] left-[4.74px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.533px_3.528px] mask-size-[176.961px_509.84px] top-[6.71px] w-[185.23px]"
        data-name="iStock-469932909"
        style={{
          backgroundImage: `url('${imgIStock469932909}')`,
          maskImage: `url('${imgScreenReplaceHere}')`,
        }}
      />
    </div>
  );
}

function LeaveUsReviews() {
  return (
    <div
      className="absolute contents inset-[0.13%_1.56%_-86.5%_0.99%]"
      data-name="Leave us Reviews"
    >
      <div
        className="absolute bg-[#000000] inset-[0.29%_1.82%_-86.34%_1.26%] pointer-events-none rounded-[28.645px]"
        data-name="Screen Background"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#989892] border-[2.249px] border-solid inset-0 rounded-[28.645px]"
        />
        <div className="absolute inset-0 shadow-[0px_0px_0.173px_2.422px_inset_#3f3f3f]" />
      </div>
      <div
        className="absolute bg-[rgba(0,0,0,0)] inset-[0.13%_1.56%_-86.5%_0.99%] pointer-events-none rounded-[29.756px]"
        data-name="Stroke Body Outside"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#1b1c16] border-[0.346px] border-solid inset-0 rounded-[29.756px]"
        />
        <div className="absolute inset-0 shadow-[0px_0px_0.173px_0.865px_inset_#77796b]" />
      </div>
      <div
        className="absolute inset-[0.29%_1.82%_-86.34%_1.26%]"
        data-name="Stroke Body"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 190 529"
        >
          <g id="Stroke Body">
            <g filter="url(#filter0_i_38_9811)">
              <path d={svgPaths.p3ca12130} fill="black" fillOpacity="0.01" />
            </g>
            <path
              d={svgPaths.p916a280}
              stroke="url(#paint0_linear_38_9811)"
              strokeWidth="0.519001"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="528.377"
              id="filter0_i_38_9811"
              width="189.954"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                operator="erode"
                radius="0.865002"
                result="effect1_innerShadow_38_9811"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.0865002" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.686275 0 0 0 0 0.690196 0 0 0 0 0.670588 0 0 0 1 0"
              />
              <feBlend
                in2="shape"
                mode="normal"
                result="effect1_innerShadow_38_9811"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_38_9811"
              x1="94.9772"
              x2="94.9772"
              y1="0"
              y2="528.377"
            >
              <stop stopColor="#F4F5F0" />
              <stop offset="1" stopColor="#FBFBFB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Screen />
    </div>
  );
}

function Antennas() {
  return (
    <div
      className="absolute contents inset-[0.13%_1.51%_-86.54%_0.94%]"
      data-name="Antennas"
    >
      <div
        className="absolute bg-[rgba(154,169,177,0.5)] inset-[185.25%_78.24%_-86.54%_20.45%]"
        data-name="Bottom"
      />
      <div
        className="absolute bg-[rgba(154,169,177,0.5)] inset-[167.88%_97.59%_-68.94%_0.94%]"
        data-name="Left-Bottom"
      />
      <div
        className="absolute bg-[rgba(228,228,227,0.65)] inset-[19.04%_97.53%_79.44%_0.99%]"
        data-name="Left-Top"
      />
      <div
        className="absolute bg-[rgba(154,169,177,0.5)] inset-[167.88%_1.51%_-68.94%_97.02%]"
        data-name="Right-Bottom"
      />
      <div
        className="absolute bg-[rgba(228,228,227,0.65)] inset-[19.11%_1.51%_79.44%_97.02%]"
        data-name="Right"
      />
      <div
        className="absolute bg-[rgba(228,228,227,0.65)] inset-[0.13%_20.77%_98.61%_77.67%]"
        data-name="Top"
      />
    </div>
  );
}

function Notch() {
  return (
    <div
      className="absolute contents inset-[1.79%_43.26%_96.93%_42.5%]"
      data-name="Notch"
    >
      <div
        className="absolute bg-[#141414] inset-[1.79%_43.26%_96.93%_42.5%] pointer-events-none rounded-[5.012px]"
        data-name="Top Speaker"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#0e0e0e] border-[0.167px] border-solid inset-0 rounded-[5.012px]"
        />
        <div className="absolute inset-0 shadow-[-0.501px_0px_0px_0px_inset_#2a2a2a,0.501px_0px_0px_0px_inset_#2a2a2a,0px_0px_0.835px_0.167px_inset_#000000]" />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div
      className="absolute contents inset-[37.24%_0.91%_16.36%_0.1%]"
      data-name="Buttons"
    >
      <div
        className="absolute bg-[#c8c9c4] inset-[68.99%_98.84%_16.36%_0.18%] pointer-events-none rounded-[0.697px]"
        data-name="- Button"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#7d7e79] border-[0.261px] border-solid inset-0 rounded-[0.697px]"
        />
        <div className="absolute inset-0 shadow-[0px_-0.523px_0px_0px_inset_#f2f3ed,0px_0.523px_0px_0px_inset_#f2f3ed,-0.523px_1.393px_0.348px_0px_inset_#41423c,-0.523px_-1.393px_0.348px_0px_inset_#41423c,0.523px_0px_0px_0px_inset_#41423c,0.871px_0px_0.697px_0px_inset_rgba(218,219,214,0.66),0.871px_0px_0px_0px_inset_#dadbd6]" />
      </div>
      <div
        className="absolute bg-[#c8c9c4] inset-[51.06%_98.84%_34.13%_0.18%] pointer-events-none rounded-[0.641px]"
        data-name="+ Button"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#7d7e79] border-[0.128px] border-solid inset-0 rounded-[0.641px]"
        />
        <div className="absolute inset-0 shadow-[-0.32px_0px_0px_0px_inset_#f2f3ed,0px_-0.641px_0.32px_0px_inset_#f2f3ed,0px_0.641px_0px_0px_inset_#41423c,-0.641px_0px_0.641px_0px_inset_#41423c,0px_1.282px_0.16px_0px_inset_rgba(65,66,60,0.3),-0.481px_-1.282px_0.481px_0px_inset_rgba(218,219,214,0.2),0.16px_0px_0px_0px_inset_#dadbd6]" />
      </div>
      <div
        className="absolute bg-[#c8c9c4] inset-[37.24%_98.92%_54.78%_0.1%] pointer-events-none rounded-[0.641px]"
        data-name="Silence Button"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#7d7e79] border-[0.128px] border-solid inset-0 rounded-[0.641px]"
        />
        <div className="absolute inset-0 shadow-[-0.32px_0px_0px_0px_inset_#f2f3ed,0px_-0.641px_0.32px_0px_inset_#f2f3ed,0px_0.641px_0px_0px_inset_#41423c,-0.641px_0px_0.641px_0px_inset_#41423c,0px_1.282px_0.16px_0px_inset_rgba(65,66,60,0.3),-0.481px_-1.282px_0.481px_0px_inset_rgba(218,219,214,0.2),0.16px_0px_0px_0px_inset_#dadbd6]" />
      </div>
      <div
        className="absolute bg-[#c8c9c4] inset-[56%_0.91%_21.67%_98.36%] pointer-events-none rounded-[0.697px]"
        data-name="Power Button"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#7d7e79] border-[0.128px] border-solid inset-0 rounded-[0.697px] shadow-[0px_0.711px_0.711px_0px_rgba(0,0,0,0.25)]"
        />
        <div className="absolute inset-0 shadow-[-0.523px_0px_0.697px_0px_inset_rgba(65,66,60,0.66),0.697px_1.393px_0.348px_0px_inset_#41423c,0.697px_-1.393px_0.348px_0px_inset_#dadbd6,-0.697px_0px_0px_0px_inset_#dadbd6]" />
      </div>
    </div>
  );
}

function FrontCamera() {
  return (
    <div
      className="absolute contents left-[74.05px] top-[13.89px]"
      data-name="Front Camera"
    >
      <div
        className="absolute bg-neutral-950 h-[13.139px] left-[74.05px] rounded-[6.235px] top-[13.89px] w-[48.009px]"
        data-name="Rectangle"
      />
      <div
        className="absolute h-[13.139px] left-[108.71px] top-[13.89px] w-[13.348px]"
        data-name="Lens 1"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 14"
        >
          <ellipse
            cx="6.67394"
            cy="6.5693"
            fill="var(--fill-0, #0A0A0A)"
            id="Lens 1"
            rx="6.67394"
            ry="6.5693"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[7.89%_39.3%_88.77%_57.05%] opacity-70"
        data-name="Lens"
      >
        <div className="absolute inset-[-2.48%_-3.28%]">
          <img
            className="block max-w-none size-full"
            height="9.96"
            loading="lazy"
            src={imgLens}
            width="7.632"
          />
        </div>
      </div>
      <div className="absolute flex inset-[7.89%_41.28%_88.77%_58.72%] items-center justify-center">
        <div className="flex-none">
          <div className="relative size-full" data-name="Line">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.59px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 10 1"
              >
                <line
                  id="Line"
                  opacity="0.7"
                  stroke="var(--stroke-0, black)"
                  strokeWidth="0.587498"
                  x2="9.48965"
                  y1="0.706251"
                  y2="0.706251"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IPhone14Pro() {
  return (
    <div
      className="h-[284px] overflow-clip relative shadow-[0px_-4.623px_20.27px_0px_rgba(0,0,0,0.1),0px_-13.514px_14.225px_0px_rgba(255,255,255,0.1),0px_29.161px_44.453px_0px_rgba(0,0,0,0.15),0px_13.158px_13.158px_0px_rgba(0,0,0,0.25)] shrink-0 w-[196px]"
      data-name="iPhone 14 Pro"
    >
      <LeaveUsReviews />
      <Antennas />
      <Notch />
      <Buttons />
      <FrontCamera />
    </div>
  );
}

function FeatureColumn3() {
  return (
    <div
      className="bg-[#120b19] box-border content-stretch flex flex-row gap-8 h-full items-end justify-start overflow-clip pb-0 pt-6 px-6 relative rounded-[15px] shrink-0 w-[547px]"
      data-name="Feature Column"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 123, 255, 0.25) 0%, rgba(0, 123, 255, 0) 100%), linear-gradient(90deg, rgb(18, 11, 25) 0%, rgb(18, 11, 25) 100%)",
      }}
    >
      <FeatureInfo3 />
      <IPhone14Pro />
    </div>
  );
}

function FeatureRow1() {
  return (
    <div
      className="box-border content-stretch flex flex-row-reverse gap-8 items-end justify-center p-0 relative shrink-0 w-full"
      data-name="Feature Row"
    >
      <div className="flex flex-row items-end order-2 self-stretch">
        <FeatureColumn2 />
      </div>
      <div className="flex flex-row items-end order-1 self-stretch">
        <FeatureColumn3 />
      </div>
    </div>
  );
}

function FeatureInfo4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
      data-name="Feature Info"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[20px] w-full">
        <p className="block leading-[1.4]">Interactive Project Map</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#bebebe] text-[15px] tracking-[0.6px] w-full">
        <p className="block leading-[1.5]">{`A map highlighting the locations of past projects, demonstrating your company's experience in the homeowner's neighborhood. `}</p>
      </div>
    </div>
  );
}

function FeatureImage3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[5.831px] grow h-[304px] items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Image"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[316px] shrink-0 w-[216px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
    </div>
  );
}

function FeatureColumn4() {
  return (
    <div
      className="bg-[#120b19] box-border content-stretch flex flex-row gap-6 h-full items-start justify-start overflow-clip pb-0 pt-6 px-6 relative rounded-[15px] shrink-0 w-[547px]"
      data-name="Feature Column"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 123, 255, 0.25) 0%, rgba(0, 123, 255, 0) 100%), linear-gradient(90deg, rgb(18, 11, 25) 0%, rgb(18, 11, 25) 100%)",
      }}
    >
      <FeatureInfo4 />
      <FeatureImage3 />
    </div>
  );
}

function FeatureInfo5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
      data-name="Feature Info"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[20px] w-full">
        <p className="block leading-[1.4]">{`Direct Link to "Leave a Google Review"`}</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#bebebe] text-[15px] tracking-[0.6px] w-full">
        <p className="block leading-[1.5]">{`A clear and prominent call-to-action that takes the client directly to your Google review page. `}</p>
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <div
      className="absolute contents left-[9.78px] top-[7.75px]"
      data-name="Screen"
    >
      <div
        className="absolute inset-[2.55%_4.72%_-29.51%_4.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[176.961px_385.97px]"
        data-name="Screen (Replace here)"
        style={{ maskImage: `url('${imgScreenReplaceHere2}')` }}
      >
        <img
          className="block max-w-none size-full"
          height="385.97"
          loading="lazy"
          src={imgScreenReplaceHere3}
          width="176.961"
        />
      </div>
      <div
        className="absolute bg-[#ffffff] bg-size-[100%_261.42%,auto] h-[400.854px] left-[5.24px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.533px_1.039px] mask-size-[176.961px_385.97px] top-[6.71px] w-[185.23px]"
        data-name="iStock-469932909"
        style={{
          backgroundImage: `url('${imgIStock469932909}')`,
          maskImage: `url('${imgScreenReplaceHere2}')`,
        }}
      />
    </div>
  );
}

function LeaveUsReviews1() {
  return (
    <div
      className="absolute contents inset-[0.09%_1.3%_-31.9%_1.25%]"
      data-name="Leave us Reviews"
    >
      <div
        className="absolute bg-[#000000] inset-[0.21%_1.57%_-31.79%_1.52%] pointer-events-none rounded-[28.645px]"
        data-name="Screen Background"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#989892] border-[2.249px] border-solid inset-0 rounded-[28.645px]"
        />
        <div className="absolute inset-0 shadow-[0px_0px_0.173px_2.422px_inset_#3f3f3f]" />
      </div>
      <div
        className="absolute bg-[rgba(0,0,0,0)] inset-[0.09%_1.3%_-31.9%_1.25%] pointer-events-none rounded-[29.756px]"
        data-name="Stroke Body Outside"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#1b1c16] border-[0.346px] border-solid inset-0 rounded-[29.756px]"
        />
        <div className="absolute inset-0 shadow-[0px_0px_0.173px_0.865px_inset_#77796b]" />
      </div>
      <div
        className="absolute inset-[0.21%_1.57%_-31.79%_1.52%]"
        data-name="Stroke Body"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 190 400"
        >
          <g id="Stroke Body">
            <g filter="url(#filter0_i_38_3012)">
              <path d={svgPaths.p1eac5500} fill="black" fillOpacity="0.01" />
            </g>
            <path
              d={svgPaths.p4cd7b00}
              stroke="url(#paint0_linear_38_3012)"
              strokeWidth="0.519001"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.004"
              id="filter0_i_38_3012"
              width="189.954"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                operator="erode"
                radius="0.865002"
                result="effect1_innerShadow_38_3012"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.0865002" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.686275 0 0 0 0 0.690196 0 0 0 0 0.670588 0 0 0 1 0"
              />
              <feBlend
                in2="shape"
                mode="normal"
                result="effect1_innerShadow_38_3012"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_38_3012"
              x1="94.9772"
              x2="94.9772"
              y1="0"
              y2="400.004"
            >
              <stop stopColor="#F4F5F0" />
              <stop offset="1" stopColor="#FBFBFB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Screen1 />
    </div>
  );
}

function Antennas1() {
  return (
    <div
      className="absolute contents inset-[0.09%_1.25%_-31.93%_1.19%]"
      data-name="Antennas"
    >
      <div
        className="absolute bg-[rgba(154,169,177,0.5)] inset-[131.01%_77.99%_-31.93%_20.7%]"
        data-name="Bottom"
      />
      <div
        className="absolute bg-[rgba(154,169,177,0.5)] inset-[118.73%_97.34%_-19.48%_1.19%]"
        data-name="Left-Bottom"
      />
      <div
        className="absolute bg-[rgba(228,228,227,0.65)] inset-[13.46%_97.28%_85.46%_1.25%]"
        data-name="Left-Top"
      />
      <div
        className="absolute bg-[rgba(154,169,177,0.5)] inset-[118.73%_1.25%_-19.48%_97.28%]"
        data-name="Right-Bottom"
      />
      <div
        className="absolute bg-[rgba(228,228,227,0.65)] inset-[13.52%_1.25%_85.46%_97.28%]"
        data-name="Right"
      />
      <div
        className="absolute bg-[rgba(228,228,227,0.65)] inset-[0.09%_20.52%_99.01%_77.93%]"
        data-name="Top"
      />
    </div>
  );
}

function Notch1() {
  return (
    <div
      className="absolute contents inset-[1.27%_43%_97.83%_42.76%]"
      data-name="Notch"
    >
      <div
        className="absolute bg-[#141414] inset-[1.27%_43%_97.83%_42.76%] pointer-events-none rounded-[5.012px]"
        data-name="Top Speaker"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#0e0e0e] border-[0.167px] border-solid inset-0 rounded-[5.012px]"
        />
        <div className="absolute inset-0 shadow-[-0.501px_0px_0px_0px_inset_#2a2a2a,0.501px_0px_0px_0px_inset_#2a2a2a,0px_0px_0.835px_0.167px_inset_#000000]" />
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div
      className="absolute contents inset-[26.34%_0.65%_40.84%_0.35%]"
      data-name="Buttons"
    >
      <div
        className="absolute bg-[#c8c9c4] inset-[48.79%_98.59%_40.84%_0.43%] pointer-events-none rounded-[0.697px]"
        data-name="- Button"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#7d7e79] border-[0.261px] border-solid inset-0 rounded-[0.697px]"
        />
        <div className="absolute inset-0 shadow-[0px_-0.523px_0px_0px_inset_#f2f3ed,0px_0.523px_0px_0px_inset_#f2f3ed,-0.523px_1.393px_0.348px_0px_inset_#41423c,-0.523px_-1.393px_0.348px_0px_inset_#41423c,0.523px_0px_0px_0px_inset_#41423c,0.871px_0px_0.697px_0px_inset_rgba(218,219,214,0.66),0.871px_0px_0px_0px_inset_#dadbd6]" />
      </div>
      <div
        className="absolute bg-[#c8c9c4] inset-[36.12%_98.59%_53.41%_0.43%] pointer-events-none rounded-[0.641px]"
        data-name="+ Button"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#7d7e79] border-[0.128px] border-solid inset-0 rounded-[0.641px]"
        />
        <div className="absolute inset-0 shadow-[-0.32px_0px_0px_0px_inset_#f2f3ed,0px_-0.641px_0.32px_0px_inset_#f2f3ed,0px_0.641px_0px_0px_inset_#41423c,-0.641px_0px_0.641px_0px_inset_#41423c,0px_1.282px_0.16px_0px_inset_rgba(65,66,60,0.3),-0.481px_-1.282px_0.481px_0px_inset_rgba(218,219,214,0.2),0.16px_0px_0px_0px_inset_#dadbd6]" />
      </div>
      <div
        className="absolute bg-[#c8c9c4] inset-[26.34%_98.67%_68.02%_0.35%] pointer-events-none rounded-[0.641px]"
        data-name="Silence Button"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#7d7e79] border-[0.128px] border-solid inset-0 rounded-[0.641px]"
        />
        <div className="absolute inset-0 shadow-[-0.32px_0px_0px_0px_inset_#f2f3ed,0px_-0.641px_0.32px_0px_inset_#f2f3ed,0px_0.641px_0px_0px_inset_#41423c,-0.641px_0px_0.641px_0px_inset_#41423c,0px_1.282px_0.16px_0px_inset_rgba(65,66,60,0.3),-0.481px_-1.282px_0.481px_0px_inset_rgba(218,219,214,0.2),0.16px_0px_0px_0px_inset_#dadbd6]" />
      </div>
      <div
        className="absolute bg-[#c8c9c4] inset-[39.6%_0.65%_44.6%_98.61%] pointer-events-none rounded-[0.697px]"
        data-name="Power Button"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#7d7e79] border-[0.128px] border-solid inset-0 rounded-[0.697px] shadow-[0px_0.711px_0.711px_0px_rgba(0,0,0,0.25)]"
        />
        <div className="absolute inset-0 shadow-[-0.523px_0px_0.697px_0px_inset_rgba(65,66,60,0.66),0.697px_1.393px_0.348px_0px_inset_#41423c,0.697px_-1.393px_0.348px_0px_inset_#dadbd6,-0.697px_0px_0px_0px_inset_#dadbd6]" />
      </div>
    </div>
  );
}

function FrontCamera1() {
  return (
    <div
      className="absolute contents left-[74.55px] top-[13.89px]"
      data-name="Front Camera"
    >
      <div
        className="absolute bg-neutral-950 h-[13.139px] left-[74.55px] rounded-[6.235px] top-[13.89px] w-[48.009px]"
        data-name="Rectangle"
      />
      <div
        className="absolute h-[13.139px] left-[109.21px] top-[13.89px] w-[13.348px]"
        data-name="Lens 1"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 14"
        >
          <ellipse
            cx="6.67394"
            cy="6.5693"
            fill="var(--fill-0, #0A0A0A)"
            id="Lens 1"
            rx="6.67394"
            ry="6.5693"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[5.58%_39.04%_92.06%_57.3%] opacity-70"
        data-name="Lens"
      >
        <div className="absolute inset-[-3.27%_-3.28%]">
          <img
            className="block max-w-none size-full"
            height="7.654"
            loading="lazy"
            src={imgLens1}
            width="7.632"
          />
        </div>
      </div>
      <div className="absolute flex inset-[5.58%_41.02%_92.06%_58.98%] items-center justify-center">
        <div className="flex-none">
          <div className="relative size-full" data-name="Line">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.59px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 8 1"
              >
                <line
                  id="Line"
                  opacity="0.7"
                  stroke="var(--stroke-0, black)"
                  strokeWidth="0.587498"
                  x2="7.18407"
                  y1="0.706251"
                  y2="0.706251"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IPhone14Pro1() {
  return (
    <div
      className="h-[304px] overflow-clip relative shadow-[0px_-4.623px_20.27px_0px_rgba(0,0,0,0.1),0px_-13.514px_14.225px_0px_rgba(255,255,255,0.1),0px_29.161px_44.453px_0px_rgba(0,0,0,0.15),0px_13.158px_13.158px_0px_rgba(0,0,0,0.25)] shrink-0 w-[196px]"
      data-name="iPhone 14 Pro"
    >
      <LeaveUsReviews1 />
      <Antennas1 />
      <Notch1 />
      <Buttons1 />
      <FrontCamera1 />
    </div>
  );
}

function FeatureColumn5() {
  return (
    <div
      className="bg-[#120b19] box-border content-stretch flex flex-row gap-8 h-full items-start justify-start overflow-clip pb-0 pt-6 px-6 relative rounded-[15px] shrink-0 w-[547px]"
      data-name="Feature Column"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 123, 255, 0.25) 0%, rgba(0, 123, 255, 0) 100%), linear-gradient(90deg, rgb(18, 11, 25) 0%, rgb(18, 11, 25) 100%)",
      }}
    >
      <FeatureInfo5 />
      <IPhone14Pro1 />
    </div>
  );
}

function FeatureRow2() {
  return (
    <div
      className="box-border content-stretch flex flex-row-reverse gap-8 items-end justify-center p-0 relative shrink-0 w-full"
      data-name="Feature Row"
    >
      <div className="flex flex-row items-end order-2 self-stretch">
        <FeatureColumn4 />
      </div>
      <div className="flex flex-row items-end order-1 self-stretch">
        <FeatureColumn5 />
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Features Section"
    >
      <FeatureRow />
      <FeatureRow1 />
      <FeatureRow2 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-end justify-start p-0 relative shrink-0 w-[1150px]"
      data-name="Content Container"
    >
      <HeaderSection />
      <FeaturesSection />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#aaaaaa] text-[20px] text-left w-[1126px]">
        <p className="leading-[1.6]">
          <span className="font-['Poppins:SemiBold',_sans-serif] not-italic text-[#e0e0e0]">
            Live Preview Builder
          </span>
          <span>{` What you build is what they see. As you fill out each profile, a live mobile preview updates in real time, letting you see `}</span>
          <span className="font-['Poppins:SemiBold',_sans-serif] not-italic text-[#e0e0e0]">
            your brand instantly come to life
          </span>
          <span>{`. No more guessing how your brand shows up at the door. Now every rep leads with trust. `}</span>
        </p>
      </div>
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="relative size-full" data-name="Main Container">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative size-full">
          <ContentContainer />
        </div>
      </div>
    </div>
  );
}