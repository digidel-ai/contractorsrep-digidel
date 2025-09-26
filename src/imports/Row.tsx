import imgIPhone14Pro31 from "@/assets/9498a9aa432ab15ef5c03a6e188e10559c6011e0.png";
import imgImage from "@/assets/541fc283baf36ee53bfe8dbb36a820b4c3ee3561.png";
import imgRecapDevice59195646FigmaSiteDemoProfile311 from "@/assets/7165ed5df6ee84caee824c88d7ebd04c40bf9eb2.png";
import imgGroup100001102421 from "@/assets/8912769fac2a9912a07b1b7b64fe1abb112de2dc.png";
import imgGroup100001102422 from "@/assets/2ca5456cbd9d21ddba2d736dbab8c4b874453464.png";

function Content() {
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

function Container() {
  return (
    <div
      className="bg-[#120b19] box-border content-stretch flex flex-col from-[#007bff40] gap-[5px] h-full items-center justify-start pb-0 pt-8 px-8 relative rounded-[15px] shrink-0 to-[#007bff00] w-[383px]"
      data-name="Container"
    >
      <Content />
      <div
        className="bg-[49.37%_10.84%] bg-no-repeat bg-size-[140.51%_200.21%] h-[171px] shrink-0 w-[137px]"
        data-name="iPhone 14 Pro (3) 1"
        style={{ backgroundImage: `url('${imgIPhone14Pro31}')` }}
      />
    </div>
  );
}

function Content1() {
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

function Container1() {
  return (
    <div
      className="bg-[#120b19] box-border content-stretch flex flex-col from-[#007bff40] gap-4 h-full items-center justify-start pb-0 pt-8 px-8 relative rounded-[15px] shrink-0 to-[#007bff00] w-[383px]"
      data-name="Container"
    >
      <Content1 />
      <div
        className="bg-[-45.35%_8.5%] bg-no-repeat bg-size-[100.12%_237.54%] h-40 shrink-0 w-[214px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container />
      <Container1 />
    </div>
  );
}

function Content2() {
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

function Content3() {
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
          <Content2 />
          <div
            className="bg-center bg-cover bg-no-repeat h-[247px] shrink-0 w-80"
            data-name="recap-device-59195646.figma.site_demo-profile (3) 1 1"
            style={{
              backgroundImage: `url('${imgRecapDevice59195646FigmaSiteDemoProfile311}')`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start p-0 relative shrink-0 w-[790px]"
      data-name="Container"
    >
      <Container2 />
      <Content3 />
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

function Content5() {
  return (
    <div
      className="bg-[#120b19] box-border content-stretch flex flex-col from-[#007bff40] gap-[77px] h-full items-center justify-start overflow-clip pb-0 pt-8 px-8 relative rounded-[15px] shrink-0 to-[#007bff00] w-[474px]"
      data-name="Content"
    >
      <Content4 />
      <div
        className="bg-[50%_27.27%] bg-no-repeat bg-size-[140.85%_124.8%] h-[547px] shrink-0 w-[273px]"
        data-name="Group 1000011024 (2) 1"
        style={{ backgroundImage: `url('${imgGroup100001102421}')` }}
      />
      <div
        className="bg-[50%_27.27%] bg-no-repeat bg-size-[140.85%_124.8%] h-[547px] shrink-0 w-[273px]"
        data-name="Group 1000011024 (2) 2"
        style={{ backgroundImage: `url('${imgGroup100001102422}')` }}
      />
    </div>
  );
}

export default function Row() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative size-full"
      data-name="Row"
    >
      <Container3 />
      <Content5 />
    </div>
  );
}