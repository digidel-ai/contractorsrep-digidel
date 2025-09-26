import svgPaths from "./svg-kjbvrnzwdq";
import imgTapOnMockup from "@/assets/1fcfa02f1e44091bd03898996b14dce413c48ba3.png";
import imgImage from "@/assets/98ce7e5c25f4caff1dfd2939d6feaf68f7c16386.png";
import imgImage1 from "@/assets/1d203ae6ac3213055934e22f8c22b284db243f9a.png";
import imgImage2 from "@/assets/ad52f92efb8ae162f62c1d26fae1891b205bfe28.png";
import imgImage3 from "@/assets/de33324ee36582695c8101ca8c8a5f582eda26ab.png";
import imgImage4 from "@/assets/fddd1a4dcec5f3089677b85fefd4062e477304a4.png";
import imgImage5 from "@/assets/7b03b9b6187f32867325babd1eeb451e85a4fdc9.png";
import imgImage6 from "@/assets/efeb3ba2a8ea6a94d56f01d45d211994495ace61.png";
import imgProfileImage from "@/assets/ce65c4b4d2b54bc5cc3d427c6da9ee88970e08a6.png";
import imgImage7 from "@/assets/a840d89415f3f8b0a258e89fa8df80fc8461f8d4.png";
import imgImage8 from "@/assets/b7dd875360fc26189984e396ea40793d75b70c64.png";
import imgImage9 from "@/assets/1334658241fa2b008158e94a65ba20f674cee33d.png";
import imgImage10 from "@/assets/971b9a376930833357d3f892c8af37dfb5534279.png";
import imgImage11 from "@/assets/0d0f04f95aa729d4d816b4338e1ae96b89505b62.png";
import imgFeatureImage from "@/assets/3d1ff6019ec51df9d8feac6b3166cc854eefde51.png";
import imgProductImage from "@/assets/aeaf6f5a5c089b0cfd40159506428a720047059c.png";
import imgGroup10000101731 from "@/assets/5a7a899735703494107ddb91eebd3e737a9d063b.png";
import imgGroup10000101981 from "@/assets/3e1c51261420c2818088efc2ef344742c26b2612.png";
import imgFrame10000153731 from "@/assets/93c345e59514ca51eccc4a2c5c48495a0727ff88.png";
import imgGroup10000109811 from "@/assets/6f72213081739dca12f784d76c7cf925663fc24a.png";

function LogoContainer() {
  return (
    <div
      className="absolute contents left-[1282px] top-[3524.5px]"
      data-name="Logo Container"
    >
      <div
        className="absolute font-['SF_Pro:Bold',_sans-serif] font-bold leading-[0] left-[1282px] text-[#ffffff] text-[31.6166px] text-left text-nowrap top-[3524.5px] tracking-[-0.316166px] uppercase"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
          Contractors Rep
        </p>
      </div>
      <div
        className="absolute h-[39px] top-[3524.5px] translate-x-[-50%] w-[26px]"
        data-name="Logo Icon"
        style={{ left: "calc(50% + 631px)" }}
      >
        <div className="absolute border-2 border-[#007bff] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div
      className="absolute bg-[#007bff] left-[1067px] rounded-[5px] top-[3523px]"
      data-name="Link"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-8 py-3 relative">
          <div className="flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Book a Demo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000015374() {
  return (
    <div className="h-[7088px] overflow-clip relative shrink-0 w-[1790px]">
      <LogoContainer />
      <Link />
    </div>
  );
}

function Header() {
  return (
    <div
      className="backdrop-blur-[15px] backdrop-filter bg-[#2c2c2c] bg-[rgba(0,0,0,0.41)] h-[147px] shrink-0 sticky top-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[147px] items-center justify-between px-[100px] py-0 relative w-full">
          <Frame1000015374 />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[543px]"
      data-name="Text Container"
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#ffffff] text-[54px] uppercase w-full">
        <p className="block leading-[1.2]">
          Sales Reps Love This NFC-Powered Business Card
        </p>
      </div>
      <div className="capitalize font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#f0f0f0] text-[20px] w-full">
        <p className="block leading-[1.4]">
          Because It Sells Your Brand Not Just The Job
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <TextContainer />
      <div
        className="bg-center bg-cover bg-no-repeat h-[627px] shrink-0 w-[632px]"
        data-name="Tap On Mockup"
        style={{ backgroundImage: `url('${imgTapOnMockup}')` }}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-[657px] items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Hero Section"
    >
      <Container />
    </div>
  );
}

function Top() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="Top"
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#ffffff] text-[54px] uppercase w-[688px]">
        <p className="block leading-[1.3]">
          Why Top Contractors Are Going Digital
        </p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[18px] w-[498px]">
        <p className="block leading-[1.4]">
          A paper card can’t show your reviews. Or your best jobs. Or how easy
          it is to work with you. But this can. Your digital profile gives
          homeowners everything they need to trust you in seconds. It’s simple,
          professional, and made for that moment at the kitchen table when the
          real decision gets made.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[365px]"
      data-name="Content"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Link In Bio</p>
      </div>
      <div
        className="font-['Poppins:Regular',_sans-serif] min-w-full relative shrink-0 text-[#a7a7a7] text-[15px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.6]">
          Your Contractors Rep profile link works everywhere: drop it in texts,
          emails, DMs, or on your social pages. One tap sends homeowners to your
          reviews, photos, and quote request form — no digging around.
        </p>
      </div>
    </div>
  );
}

function Images() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-[6.051px] items-start justify-start p-0 relative shrink-0"
      data-name="Images"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[215.309px] shrink-0 w-[203.46px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[215.309px] shrink-0 w-[203.46px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[215.309px] shrink-0 w-[203.46px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage2}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[216.318px] shrink-0 w-[204.468px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage3}')` }}
      />
    </div>
  );
}

function Row() {
  return (
    <div
      className="bg-[#120b19] relative rounded-[15px] shrink-0 w-full"
      data-name="Row"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1280.5 276.32\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.25\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-102.6 12.083 -34.149 -102.31 1026.8 155.49)\\\'><stop stop-color=\\\'rgba(0,123,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,123,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[38px] items-start justify-start px-[19px] py-[30px] relative w-full">
          <Content />
          <Images />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[334px]"
      data-name="Content"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] w-full">
        <p className="block leading-[36px]">AI-Powered Business Card Scanner</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[15px] w-full">
        <p className="block leading-[1.6]">
          Snap a photo of any business card and Contractors Rep saves the
          contact. Great for GCs, vendors, and supplier connections — no more
          lost numbers or cluttered trucks.
        </p>
      </div>
    </div>
  );
}

function BusinessCard() {
  return (
    <div
      className="basis-0 bg-[#120b19] grow min-h-px min-w-px relative rounded-[15px] shrink-0 w-full"
      data-name="Business Card"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 790 295.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.25\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-63.3 12.922 -21.068 -109.41 633.5 166.28)\\\'><stop stop-color=\\\'rgba(0,123,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,92,191,0.75)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(0,62,128,0.5)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(0,31,64,0.25)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[66px] items-start justify-start pb-0 pt-8 px-8 relative size-full">
          <Content1 />
          <div
            className="[background-size:100%_111.61%] bg-[0%_-1.6%] bg-no-repeat h-[266px] shrink-0 w-[367px]"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage4}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="Content"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] w-full">
        <p className="block leading-[36px]">Profile Insights</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[15px] w-full">
        <p className="block leading-[1.6]">
          See how often your team’s cards get tapped, which links are clicked,
          and when. Help your reps follow up smarter and close faster.
        </p>
      </div>
    </div>
  );
}

function MessagesIcon() {
  return (
    <div
      className="absolute left-0 top-0"
      data-name="Messages Icon"
      style={{ right: "calc(100% - 12px)", bottom: "calc(100% - 11.3654px)" }}
    />
  );
}

function Messages() {
  return (
    <div
      className="absolute contents left-[100.25px] top-[192.864px]"
      data-name="Messages"
    >
      <MessagesIcon />
    </div>
  );
}

function Youtube() {
  return (
    <div
      className="absolute left-[271px] size-3.5 top-[280.182px]"
      data-name="Youtube"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Youtube"></g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute contents left-[100.25px] top-[192.864px]"
      data-name="Container"
    >
      <div className="absolute left-[137.25px] size-4 top-[202.182px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <circle
            cx="8"
            cy="8"
            fill="var(--fill-0, white)"
            id="Ellipse 73"
            r="8"
          />
        </svg>
      </div>
      <Messages />
      <Youtube />
    </div>
  );
}

function GoogleMaps() {
  return (
    <div
      className="absolute left-[100px] size-3.5 top-[276.182px]"
      data-name="GoogleMaps"
    >
      <div className="absolute bottom-[-3.125%] left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 15"
        >
          <g filter="url(#filter0_d_27_305)" id="GoogleMaps">
            <path d={svgPaths.p211e8800} fill="var(--fill-0, white)" id="bg" />
            <g id="maps">
              <path
                d={svgPaths.p128bb080}
                fill="var(--fill-0, #4285F5)"
                id="Intersect"
              />
              <path
                d={svgPaths.pfd8dc00}
                fill="var(--fill-0, #F9BB0E)"
                id="Intersect_2"
              />
              <path
                d={svgPaths.p1ad76f00}
                fill="var(--fill-0, #E74335)"
                id="Subtract"
              />
              <path
                d={svgPaths.pf3600}
                fill="var(--fill-0, #1A73E6)"
                id="Subtract_2"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="15.75"
              id="filter0_d_27_305"
              width="15.75"
              x="-0.875"
              y="-0.4375"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.4375" />
              <feGaussianBlur stdDeviation="0.4375" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_27_305"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_27_305"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute contents left-[100px] top-[276.182px]"
      data-name="Container"
    >
      <GoogleMaps />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="bg-[#120b19] bg-gradient-to-t from-[#007bff40] h-full relative rounded-[15px] shrink-0 to-[#007bff00] w-[383px]"
      data-name="Content"
    >
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 h-full items-center justify-start pb-0 pt-8 px-8 relative w-[383px]">
          <Content2 />
          <div
            className="bg-center bg-cover bg-no-repeat h-[135px] shrink-0 w-[234px]"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage5}')` }}
          />
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="Content"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] w-full">
        <p className="block leading-[36px]">Apple Wallet</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[15px] w-full">
        <p className="block leading-[1.6]">{`Your Contractors Rep card works straight from your phone’s wallet. `}</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div
      className="bg-[#120b19] bg-gradient-to-t from-[#007bff40] h-full relative rounded-[15px] shrink-0 to-[#007bff00] w-[372.008px]"
      data-name="Content"
    >
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] h-full items-center justify-start pb-0 pt-8 px-8 relative w-[372.008px]">
          <Content4 />
          <div
            className="bg-center bg-cover bg-no-repeat h-[158px] shrink-0 w-[252px]"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage6}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Content3 />
      <Content5 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start p-0 relative shrink-0 w-[790px]"
      data-name="Container"
    >
      <BusinessCard />
      <Container3 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
      data-name="Text Container"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] text-nowrap">
        <p className="block leading-[36px] whitespace-pre">
          customize your Profile
        </p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[15px] w-[424px]">
        <p className="block leading-[1.6]">
          Your Contractors Rep profile showcases your best jobs, 5-star reviews,
          service areas, and social proof — all in a clean, mobile-friendly
          link. Fully branded and ready to use on day one.
        </p>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div
      className="basis-0 bg-[#120b19] bg-gradient-to-t from-[#007bff40] grow h-[615px] min-h-px min-w-px relative rounded-[15px] shrink-0 to-[#007bff00]"
      data-name="Profile Card"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[615px] items-center justify-between pb-6 pt-8 px-8 relative w-full">
          <TextContainer1 />
          <div
            className="bg-center bg-cover bg-no-repeat h-[395px] shrink-0 w-[206px]"
            data-name="Profile Image"
            style={{ backgroundImage: `url('${imgProfileImage}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <div className="flex flex-row items-center self-stretch">
        <Container4 />
      </div>
      <ProfileCard />
    </div>
  );
}

function Content6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[361px]"
      data-name="Content"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] w-full">
        <p className="block leading-[36px]">Custom QR Code</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[15px] w-full">
        <p className="block leading-[1.6]">
          Each Contractors Rep card includes a custom QR code you can
          personalize with your brand colors and logo.
        </p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div
      className="bg-[#120b19] relative rounded-[15px] shrink-0 w-full"
      data-name="Row"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1280.5 292\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.25\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-102.6 12.769 -34.149 -108.12 1026.8 164.31)\\\'><stop stop-color=\\\'rgba(0,123,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,123,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between pb-0 pt-8 px-[30px] relative w-full">
          <Content6 />
          <div
            className="bg-center bg-cover bg-no-repeat h-[260px] shrink-0 w-[714px]"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage7}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="Content"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] w-full">
        <p className="block leading-[36px]">manage leads</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[15px] w-full">
        <p className="block leading-[1.6]">
          Every time your card gets tapped or scanned, Contractors Rep captures
          the info.
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="bg-[#120b19] bg-gradient-to-t from-[#007bff40] h-full relative rounded-[15px] shrink-0 to-[#007bff00] w-[383px]"
      data-name="Container"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[5px] h-full items-center justify-start pb-0 pt-8 px-8 relative w-[383px]">
          <Content7 />
          <div
            className="[background-size:253.97%_186.75%] bg-[50%_18.08%] bg-no-repeat h-[182px] shrink-0 w-[150px]"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage8}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="Content"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] w-full">
        <p className="block leading-[36px]">Offline Access</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[15px] w-full">
        <p className="block leading-[1.6]">
          Customers can save your contact info or open your profile from a scan
          — right on the spot.
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="bg-[#120b19] bg-gradient-to-t from-[#007bff40] h-full relative rounded-[15px] shrink-0 to-[#007bff00] w-[383px]"
      data-name="Container"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 h-full items-center justify-start pb-0 pt-8 px-8 relative w-[383px]">
          <Content8 />
          <div
            className="bg-center bg-cover bg-no-repeat h-40 shrink-0 w-[120px]"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage9}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container5 />
      <Container6 />
    </div>
  );
}

function Content9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[278px]"
      data-name="Content"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] w-full">
        <p className="block leading-[36px]">Direct Links</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[15px] w-full">
        <p className="block leading-[1.6]">
          Skip the full profile. Use direct links to send people straight to
          your Google reviews, quote form, photo gallery, or payment page.
        </p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div
      className="basis-0 bg-[#120b19] grow min-h-px min-w-px relative rounded-[15px] shrink-0 w-full"
      data-name="Content"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 790 322.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.25\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-63.3 14.102 -21.068 -119.41 633.5 181.48)\\\'><stop stop-color=\\\'rgba(0,123,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,123,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between px-5 py-[45px] relative size-full">
          <Content9 />
          <div
            className="bg-center bg-cover bg-no-repeat h-[246px] shrink-0 w-[412px]"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage10}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start p-0 relative shrink-0 w-[790px]"
      data-name="Container"
    >
      <Container7 />
      <Content10 />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="Content"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[24px] w-full">
        <p className="block leading-[36px]">Multiple profile</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#a7a7a7] text-[15px] w-full">
        <p className="block leading-[1.6]">
          Switch between your roofing, solar, or subcontracting crews. Or give
          every sales rep a profile that shows only their reviews and jobs.
        </p>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div
      className="bg-[#120b19] bg-gradient-to-t from-[#007bff40] h-full relative rounded-[15px] shrink-0 to-[#007bff00] w-[474px]"
      data-name="Content"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[77px] h-full items-center justify-start pb-0 pt-8 px-8 relative w-[474px]">
          <Content11 />
          <div
            className="[background-size:235.85%_143.13%] bg-[50%_40.71%] bg-no-repeat h-[417px] shrink-0 w-[337.42px]"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage11}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 h-[669px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Container8 />
      <Content12 />
    </div>
  );
}

function Bottom() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Bottom"
    >
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[68px] items-start justify-start p-0 relative shrink-0 w-[1280.5px]"
      data-name="Container"
    >
      <Top />
      <Bottom />
    </div>
  );
}

function DigitalSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Digital Section">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-xl shrink-0 w-full"
      data-name="Feature"
    >
      <div className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[600px] items-center justify-start leading-[0] not-italic p-[24px] relative size-full text-left">
          <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[25px] w-[179px]">
            <p className="block leading-[1.3]">Brand Your Hub</p>
          </div>
          <div className="basis-0 font-['Poppins:Regular',_sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#e4e4e4] text-[16px]">
            <p className="block leading-[1.6]">{`Sign up and customize your company's look — logo, colors, font — all in one place.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-xl shrink-0 w-full"
      data-name="Feature"
    >
      <div className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[600px] items-center justify-start leading-[0] not-italic p-[24px] relative size-full text-left">
          <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[25px] w-[179px]">
            <p className="block leading-[1.3]">Create Rep Pages</p>
          </div>
          <div className="basis-0 font-['Poppins:Regular',_sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#e4e4e4] text-[16px]">
            <p className="block leading-[1.6]">
              Build digital profiles for your team with contact info, project
              photos, and certifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-xl shrink-0 w-full"
      data-name="Feature"
    >
      <div className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[600px] items-center justify-start leading-[0] not-italic p-[24px] relative size-full text-left">
          <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[25px] w-[179px]">
            <p className="block leading-[1.3]">Share Profiles. Build Trust.</p>
          </div>
          <div className="basis-0 font-['Poppins:Regular',_sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#e4e4e4] text-[16px]">
            <p className="block leading-[1.6]">
              Send links before appointments so homeowners know who’s showing up
              and why they can trust them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature3() {
  return (
    <div
      className="basis-0 bg-[#2c2c2c] grow min-h-px min-w-px relative rounded-xl shrink-0 w-full"
      data-name="Feature"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[125px] items-center justify-start p-[24px] relative size-full">
          <div className="capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[25px] text-left w-[179px]">
            <p className="block leading-[1.3]">Deploy Tools in the Field</p>
          </div>
          <div
            className="bg-center bg-cover bg-no-repeat h-[172px] shrink-0 w-[348px]"
            data-name="Feature Image"
            style={{ backgroundImage: `url('${imgFeatureImage}')` }}
          />
          <div className="basis-0 font-['Poppins:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e4e4e4] text-[16px] text-left">
            <p className="block leading-[1.6]">
              Order NFC cards, review kits, and job site stands to make every
              visit a marketing opportunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 h-[508px] items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Features Container"
    >
      <Feature />
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[54px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content Container"
    >
      <div className="capitalize font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[64px] text-left text-nowrap tracking-[-0.64px]">
        <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">{`How It Works `}</p>
      </div>
      <FeaturesContainer />
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="How it Works Section">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[100px] relative w-full">
          <ContentContainer />
        </div>
      </div>
    </div>
  );
}

function ProductImageContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-[213px] items-center justify-center p-0 relative rounded-[25px] shrink-0 w-[380px]"
      data-name="Product Image Container"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[209px] shrink-0 w-[245px]"
        data-name="Product Image"
        style={{ backgroundImage: `url('${imgProductImage}')` }}
      />
    </div>
  );
}

function ProductHeaderContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-left text-nowrap w-full"
      data-name="Product Header Container"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[20px]">
        <p className="block leading-[1.1] text-nowrap whitespace-pre">
          Job Site Stand
        </p>
      </div>
      <div className="font-['Poppins:Bold',_sans-serif] relative shrink-0 text-[24px] tracking-[0.6px]">
        <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
          $129.99
        </p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="Link">
      <div className="absolute border border-[#007bff] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-8 py-4 relative w-full">
          <div className="flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfo() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Product Info"
    >
      <ProductHeaderContainer />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[16px] text-left w-full">
        <p className="block leading-[1.6]">
          Branded, weatherproof stand with QR code for walk-by leads.
        </p>
      </div>
      <Link1 />
    </div>
  );
}

function DivDigitalProfileRightBlokLowerBlok() {
  return (
    <div
      className="basis-0 bg-[#2c2c2c] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="div.digitalProfile-rightBlok-lowerBlok"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between p-[24px] relative size-full">
          <ProductImageContainer />
          <ProductInfo />
        </div>
      </div>
    </div>
  );
}

function ProductImageContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-[213px] items-center justify-center p-0 relative rounded-[25px] shrink-0 w-[380px]"
      data-name="Product Image Container"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[219px] shrink-0 w-[379px]"
        data-name="Group 1000010173 1"
        style={{ backgroundImage: `url('${imgGroup10000101731}')` }}
      />
    </div>
  );
}

function ProductHeaderContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-left text-nowrap w-full"
      data-name="Product Header Container"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[20px]">
        <p className="block leading-[1.1] text-nowrap whitespace-pre">
          NFC Metal Card
        </p>
      </div>
      <div className="font-['Poppins:Bold',_sans-serif] relative shrink-0 text-[24px] tracking-[0.6px]">
        <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">{`$49.99 `}</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div
      className="bg-[#007bff] relative rounded-xl shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-8 py-4 relative w-full">
          <div className="flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfo1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Product Info"
    >
      <ProductHeaderContainer1 />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[16px] text-left w-full">
        <p className="block leading-[1.6]">
          The ultimate first impression. Tap to share your profile instantly.
        </p>
      </div>
      <Link2 />
    </div>
  );
}

function DivDigitalProfileRightBlokLowerBlok1() {
  return (
    <div
      className="basis-0 bg-[#2c2c2c] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="div.digitalProfile-rightBlok-lowerBlok"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between p-[24px] relative size-full">
          <ProductImageContainer1 />
          <ProductInfo1 />
        </div>
      </div>
    </div>
  );
}

function ProductImageContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-[213px] items-center justify-center p-0 relative rounded-[25px] shrink-0 w-[380px]"
      data-name="Product Image Container"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[165px] shrink-0 w-[374px]"
        data-name="Group 1000010198 1"
        style={{ backgroundImage: `url('${imgGroup10000101981}')` }}
      />
    </div>
  );
}

function ProductHeaderContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Product Header Container"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[20px] w-[205px]">
        <p className="block leading-[1.1]">Branded Fridge Magnet (QR Code)</p>
      </div>
      <div className="font-['Poppins:Bold',_sans-serif] relative shrink-0 text-[24px] text-nowrap tracking-[0.6px]">
        <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">{`$9.99 `}</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="Link">
      <div className="absolute border border-[#007bff] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-8 py-4 relative w-full">
          <div className="flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfo2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Product Info"
    >
      <ProductHeaderContainer2 />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[16px] text-left w-full">
        <p className="block leading-[1.6]">
          Stay top-of-mind — and on the fridge. Great for repeat business and
          referrals.
        </p>
      </div>
      <Link3 />
    </div>
  );
}

function ProductContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-11 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Product Container"
    >
      <ProductImageContainer2 />
      <ProductInfo2 />
    </div>
  );
}

function DivDigitalProfileRightBlokLowerBlok2() {
  return (
    <div
      className="basis-0 bg-[#2c2c2c] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="div.digitalProfile-rightBlok-lowerBlok"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[24px] relative size-full">
          <ProductContainer />
        </div>
      </div>
    </div>
  );
}

function ProductImageContainer3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-[213px] items-center justify-center p-0 relative rounded-[25px] shrink-0 w-[380px]"
      data-name="Product Image Container"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[197px] shrink-0 w-[315px]"
        data-name="Frame 1000015373 1"
        style={{ backgroundImage: `url('${imgFrame10000153731}')` }}
      />
    </div>
  );
}

function ProductHeaderContainer3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Product Header Container"
    >
      <div className="basis-0 capitalize font-['Poppins:Medium',_sans-serif] grow min-h-px min-w-px relative shrink-0 text-[20px]">
        <p className="block leading-[1.1]">Google Review Stickers</p>
      </div>
      <div className="font-['Poppins:Bold',_sans-serif] relative shrink-0 text-[24px] text-nowrap tracking-[0.6px]">
        <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">{`$24.99 `}</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="Link">
      <div className="absolute border border-[#007bff] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-8 py-4 relative w-full">
          <div className="flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfo3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Product Info"
    >
      <ProductHeaderContainer3 />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[16px] text-left w-full">
        <p className="block leading-[1.6]">
          Place on thank-you folders, attic access panels, or warranty docs.
        </p>
      </div>
      <Link4 />
    </div>
  );
}

function ProductContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-11 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Product Container"
    >
      <ProductImageContainer3 />
      <ProductInfo3 />
    </div>
  );
}

function DivDigitalProfileRightBlokLowerBlok3() {
  return (
    <div
      className="basis-0 bg-[#2c2c2c] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="div.digitalProfile-rightBlok-lowerBlok"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[24px] relative size-full">
          <ProductContainer1 />
        </div>
      </div>
    </div>
  );
}

function ProductHeaderContainer4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-left text-nowrap tracking-[0.6px] w-full"
      data-name="Product Header Container"
    >
      <div className="capitalize font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[20px]">
        <p className="adjustLetterSpacing block leading-[1.1] text-nowrap whitespace-pre">
          NFC Review Activator
        </p>
      </div>
      <div className="font-['Poppins:Bold',_sans-serif] relative shrink-0 text-[24px]">
        <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">{`$39.99 `}</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-xl shrink-0 w-full" data-name="Link">
      <div className="absolute border border-[#007bff] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-8 py-4 relative w-full">
          <div className="flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfo4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-end justify-start p-0 relative shrink-0 w-full"
      data-name="Product Info"
    >
      <ProductHeaderContainer4 />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[16px] text-left tracking-[0.6px] w-full">
        <p className="block leading-[1.6]">
          Tap this puck-style tool to open your Google Review link on any phone.
        </p>
      </div>
      <Link5 />
    </div>
  );
}

function ProductContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-11 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Product Container"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[209px] shrink-0 w-[245px]"
        data-name="Product Image"
        style={{ backgroundImage: `url('${imgProductImage}')` }}
      />
      <ProductInfo4 />
    </div>
  );
}

function DivContent() {
  return (
    <div
      className="absolute h-[103px] left-8 top-5 w-[323px]"
      data-name="div.content"
    />
  );
}

function DivDigitalProfileRightBlokLowerBlok4() {
  return (
    <div
      className="basis-0 bg-[#2c2c2c] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0"
      data-name="div.digitalProfile-rightBlok-lowerBlok"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[24px] relative size-full">
          <ProductContainer2 />
          <DivContent />
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-center justify-center p-0 relative shrink-0 w-[2161px]"
      data-name="Product List"
    >
      <div className="flex flex-row items-center self-stretch">
        <DivDigitalProfileRightBlokLowerBlok />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <DivDigitalProfileRightBlokLowerBlok1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <DivDigitalProfileRightBlokLowerBlok2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <DivDigitalProfileRightBlokLowerBlok3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <DivDigitalProfileRightBlokLowerBlok4 />
      </div>
    </div>
  );
}

function PaginationDotsContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pagination Dots Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[10.5px] relative w-[5.25px]">
            <div className="absolute bottom-[-5.051%] left-[-10.101%] right-[-20.203%] top-[-5.051%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 8 13"
              >
                <path
                  d="M1 1L6.25 6.25L1 11.5"
                  id="Vector 52"
                  stroke="var(--stroke-0, #BDBDBD)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10.5px] relative shrink-0 w-[5.25px]">
        <div className="absolute bottom-[-5.051%] left-[-10.101%] right-[-20.203%] top-[-5.051%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 13"
          >
            <path
              d="M1 1L6.25 6.25L1 11.5"
              id="Vector 51"
              stroke="var(--stroke-0, #BDBDBD)"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PaginationContainer() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] h-8 relative rounded-[22.5px] shrink-0 w-[107px]"
      data-name="Pagination Container"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] h-8 items-center justify-center p-[18px] relative w-[107px]">
          <PaginationDotsContainer />
        </div>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[42px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Content Container"
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[54px] text-center uppercase w-[836px]">
        <p className="block leading-[1.2]">
          Put Your Brand in Their Hands (And Homes)
        </p>
      </div>
      <ProductList />
      <PaginationContainer />
    </div>
  );
}

function ProductSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Product Section">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2.5 py-[50px] relative w-full">
          <ContentContainer1 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#ffffff] text-[0px] tracking-[-0.476837px] uppercase w-[536px]">
        <p className="leading-[1.1]">
          <span className="text-[112.145px]">{`Fair Lead `}</span>
          <span className="adjustLetterSpacing text-[47.6837px]">
            Attribution, Finally!
          </span>
        </p>
      </div>
      <div
        className="font-['Poppins:Medium',_sans-serif] min-w-full relative shrink-0 text-[#e0e0e0] text-[25px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.4]">Know Exactly Who Closed The Lead</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[536px]"
      data-name="Container"
    >
      <Container10 />
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#e0e0e0] text-[16px] w-full">
        <p className="block leading-[1.6]">{`When a homeowner fills out a form, taps a rep’s card, or calls a number on a specific digital profile, that lead is instantly logged and attributed to the right team member inside your dashboard. It’s simple, automatic, and makes commission tracking effortless. `}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative"
      data-name="Container"
    >
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-11">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            fill="var(--fill-0, #007BFF)"
            id="Ellipse 31"
            r="22"
          />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] ml-[19px] mt-[9px] not-italic relative text-[#e0e0e0] text-[20px] text-left text-nowrap tracking-[0.6px]">
        <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
          1
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[182px] mt-0 place-items-start relative"
      data-name="Container"
    >
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-11">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            fill="var(--fill-0, #2C2C2C)"
            id="Ellipse 32"
            r="22"
          />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] ml-4 mt-2 not-italic relative text-[#e0e0e0] text-[20px] text-left text-nowrap tracking-[0.6px]">
        <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
          2
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[364px] mt-0 place-items-start relative"
      data-name="Container"
    >
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-11">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            fill="var(--fill-0, #2C2C2C)"
            id="Ellipse 32"
            r="22"
          />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] ml-4 mt-2 not-italic relative text-[#e0e0e0] text-[20px] text-left text-nowrap tracking-[0.6px]">
        <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
          3
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Container"
    >
      <div className="[grid-area:1_/_1] h-0 ml-[14.995px] mt-[22.995px] relative w-[392px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 392 2"
          >
            <line
              id="Line 388"
              stroke="url(#paint0_linear_27_297)"
              strokeWidth="2"
              x2="392"
              y1="1"
              y2="1"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_27_297"
                x1="0"
                x2="392"
                y1="2.5"
                y2="2.5"
              >
                <stop offset="0.2" stopColor="#B1B1B1" />
                <stop offset="0.947115" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[27px] items-start justify-start leading-[0] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="font-['Poppins:Regular',_sans-serif] min-w-full not-italic relative shrink-0 text-[#e0e0e0] text-[20px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.4]">Homeowner lands on rep’s profile</p>
      </div>
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-9 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[10.5px] relative w-[5.25px]">
            <div className="absolute bottom-[-5.051%] left-[-10.101%] right-[-20.203%] top-[-5.051%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 8 13"
              >
                <path
                  d="M1 1L6.25 6.25L1 11.5"
                  id="Vector 52"
                  stroke="var(--stroke-0, #BDBDBD)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10.5px] relative shrink-0 w-[5.25px]">
        <div className="absolute bottom-[-5.051%] left-[-10.101%] right-[-20.203%] top-[-5.051%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 13"
          >
            <path
              d="M1 1L6.25 6.25L1 11.5"
              id="Vector 51"
              stroke="var(--stroke-0, #BDBDBD)"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] h-[31.5px] relative rounded-[22.5px] shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] h-[31.5px] items-center justify-center p-[18px] relative">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[27px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[42px] items-center justify-start p-0 relative shrink-0 w-[408px]"
      data-name="Container"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[452px] shrink-0 w-[233px]"
        data-name="Group 1000010981 1"
        style={{ backgroundImage: `url('${imgGroup10000109811}')` }}
      />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-16 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container11 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2.5 py-[50px] relative w-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Body"
    >
      <HeroSection />
      <DigitalSection />
      <HowItWorksSection />
      <ProductSection />
      <Container22 />
    </div>
  );
}

function FooterLogoContainer() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Footer Logo Container"
    >
      <div
        className="[grid-area:1_/_1] font-['SF_Pro:Bold',_sans-serif] font-bold leading-[0] ml-0 mt-0 relative text-[#ffffff] text-[31.6166px] text-left text-nowrap tracking-[-0.316166px] uppercase"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
          Contractors Rep
        </p>
      </div>
      <div
        className="[grid-area:1_/_1] h-[39px] ml-[231px] mt-[0.003px] relative w-[26px]"
        data-name="Footer Logo Icon"
      >
        <div className="absolute border-2 border-[#007bff] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function FooterColumn() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-center justify-center leading-[0] p-0 relative shrink-0 w-[413px]"
      data-name="Footer Column"
    >
      <FooterLogoContainer />
      <div
        className="font-['Poppins:Light',_sans-serif] min-w-full not-italic relative shrink-0 text-[#e0e0e0] text-[16px] text-center tracking-[0.6px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.6]">{`Introducing "Roofer's Rep," a new, cutting-edge service designed exclusively for roofing contractors to enhance brand presence, streamline the sales process, and build immediate trust with homeowners. `}</p>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Urbanist:Regular',_sans-serif] font-normal gap-2.5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#808080] text-[14px] text-left tracking-[0.6px] w-full"
      data-name="Footer Links"
    >
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Fully Customise Card</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Premium Smart Cards</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Standees and Review cards</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Become an Affiliate</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Bundle</p>
      </div>
    </div>
  );
}

function FooterColumn1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[18px] grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Footer Column"
    >
      <div className="font-['Urbanist:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-left tracking-[0.6px] w-full">
        <p className="block leading-[30px]">Platform</p>
      </div>
      <FooterLinks />
    </div>
  );
}

function FooterColumn2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[18px] grow h-full items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left tracking-[0.6px]"
      data-name="Footer Column"
    >
      <div className="font-['Urbanist:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#ffffff] text-[20px] w-full">
        <p className="block leading-[30px]">Products</p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] w-full">
        <p className="block leading-[22px]">Privacy Policy</p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] w-full">
        <p className="block leading-[22px]">Refund Policy</p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] w-full">
        <p className="block leading-[22px]">Terms of use</p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] w-full">
        <p className="block leading-[22px]">Compatibility</p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] w-full">
        <p className="block leading-[22px]">Contact Us</p>
      </div>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Urbanist:Regular',_sans-serif] font-normal gap-2.5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#808080] text-[14px] text-left tracking-[0.6px] w-full"
      data-name="Footer Links"
    >
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Privacy Policy</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Refund Policy</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Terms of use</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Compatibility</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">Contact Us</p>
      </div>
    </div>
  );
}

function FooterColumn3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[18px] grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Footer Column"
    >
      <div className="font-['Urbanist:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-left tracking-[0.6px] w-full">
        <p className="block leading-[30px]">Company</p>
      </div>
      <FooterLinks1 />
    </div>
  );
}

function FooterColumn4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-3.5 grow h-full items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left tracking-[0.6px]"
      data-name="Footer Column"
    >
      <div
        className="font-['Urbanist:SemiBold',_sans-serif] font-semibold min-w-full relative shrink-0 text-[#ffffff] text-[20px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[30px]">Legal</p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] text-nowrap">
        <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
          Privacy Policy
        </p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] text-nowrap">
        <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
          Refund Policy
        </p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] text-nowrap">
        <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
          Terms of use
        </p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] text-nowrap">
        <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
          Compatibility
        </p>
      </div>
      <div className="font-['Urbanist:Regular',_sans-serif] font-normal relative shrink-0 text-[#808080] text-[14px] text-nowrap">
        <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
          Contact Us
        </p>
      </div>
    </div>
  );
}

function FooterColumn5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[51px] items-center justify-start p-0 relative shrink-0 w-[792px]"
      data-name="Footer Column"
    >
      <div className="flex flex-row items-center self-stretch">
        <FooterColumn1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <FooterColumn2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <FooterColumn3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <FooterColumn4 />
      </div>
    </div>
  );
}

function DivFooterBlocksWrapperGridGrid1ColGrid2ColGrid4ColTablet() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[51px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="div.footer__blocks-wrapper.grid.grid--1-col.grid--2-col.grid--4-col-tablet"
    >
      <FooterColumn />
      <FooterColumn5 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#2c2c2c] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[54px] items-center justify-start px-[100px] py-[54px] relative w-full">
          <DivFooterBlocksWrapperGridGrid1ColGrid2ColGrid4ColTablet />
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#808080] text-[12px] text-center tracking-[0.6px] w-full">
            <p className="block leading-[18px]">
              © 2025, Rogue Move Digital Agency . ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Homepage() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-end justify-start left-0 overflow-clip p-0 top-0 w-[1440px]"
      data-name="Homepage"
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default function Frame1000015375() {
  return (
    <div className="relative size-full">
      <Homepage />
    </div>
  );
}