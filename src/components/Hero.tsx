import Image from "next/image";
import heroImage from "../../public/hero-section-image.png.png";

function Hero() {
  return (
    <div className="w-screen h-auto flex flex-col md:flex-row justify-center items-center px-5 py-10 gap-10">
      {/* HERO SECTION LIST COLUMN [COLUMN 1] */}
      <div className="w-full md:w-[30%] border-b-2 md:border-b-0 md:border-r-2 border-slate-400 pb-5 md:pb-0 md:pl-9">
        <ul className="flex flex-col items-start gap-2">
          <li className="font-normal text-black">Women&apos;s Fashion</li>
          <li className="font-normal text-black">Men&apos;s Fashion</li>
          <li className="font-normal text-black">Electronics</li>
          <li className="font-normal text-black">Home & Lifestyle</li>
          <li className="font-normal text-black">Medicine</li>
          <li className="font-normal text-black">Sports & Outdoor</li>
          <li className="font-normal text-black">Baby&apos;s & Toys</li>
          <li className="font-normal text-black">Groceries & Pets</li>
          <li className="font-normal text-black">Health & Beauty</li>
        </ul>
      </div>

      {/* HERO SECTION Image COLUMN [COLUMN 2] */}
      <div className="w-full md:w-[60%] flex justify-center">
        <Image
          src={heroImage}
          alt="Image for Hero Section Mobile Phone"
          className="w-full max-w-md md:max-w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
