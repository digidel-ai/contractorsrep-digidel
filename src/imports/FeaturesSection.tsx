import imgImage from "figma:asset/97207fb373898ac94f119bce57d1fa8731b1411e.png";
import imgImage1 from "figma:asset/0930d4edd7562b7b8f10e4cd51567d839e105a95.png";
import imgImage2 from "figma:asset/b7136c60eb0b4b737be2c84f8c9812be5e854069.png";
import imgImage3 from "figma:asset/80882817c01b4c6e5c7f42b79a90f445305013de.png";
import imgImage4 from "figma:asset/40ab0cb9eb7a0040f5ba1bff9a9ca4a60d1b0493.png";
import imgImage5 from "figma:asset/69a16cc0d2f6df8d447d2b212ac56b8b1685f346.png";

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
        className="bg-[50%_31.24%] bg-no-repeat bg-size-[260.47%_138.6%] h-[304px] shrink-0 w-[181px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
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
      className="basis-0 box-border content-stretch flex flex-col gap-[6.388px] grow h-[304px] items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Image"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[217px] shrink-0 w-[205px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage1}')` }}
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
      className="basis-0 box-border content-stretch flex flex-row gap-[8.762px] grow h-[304px] items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Image"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[198px] shrink-0 w-48"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage2}')` }}
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

function FeatureImage3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-[8.762px] grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Image"
    >
      <div
        className="basis-0 bg-center bg-cover bg-no-repeat grow h-[283.986px] min-h-px min-w-px shrink-0"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage3}')` }}
      />
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
      <FeatureImage3 />
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

function FeatureImage4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[5.831px] grow h-[304px] items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Image"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[316px] shrink-0 w-[216px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage4}')` }}
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
      <FeatureImage4 />
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

function FeatureImage5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-[8.762px] grow h-[304px] items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Image"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[298px] shrink-0 w-[252px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage5}')` }}
      />
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
      <FeatureImage5 />
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

export default function FeaturesSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-0 relative size-full"
      data-name="Features Section"
    >
      <FeatureRow />
      <FeatureRow1 />
      <FeatureRow2 />
    </div>
  );
}