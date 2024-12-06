import Hero from "@/components/Hero";
import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Cards from "@/components/Cards";
import BCards from "@/components/BCards";
import CCards from "@/components/CCards";
import image1 from "../../public/image1.png";
import image2 from "../../public/image2.png";
import image3 from "../../public/image3.png";
import image4 from "../../public/image4.png";
import image5 from "../../public/image5.png";
import image6 from "../../public/image6.png";
import image7 from "../../public/image7.png";
import image8 from "../../public/image8.png";
import image9 from "../../public/image9.png";
import image10 from "../../public/image10.png";
import image11 from "../../public/image11.png";
import image12 from "../../public/image12.png";
import image13 from "../../public/image13.png";
import image14 from "../../public/image14.png";
import image15 from "../../public/image15.png";
import image16 from "../../public/image16.png";
import image17 from "../../public/image17.png";
import image18 from "../../public/image18.png";
import image19 from "../../public/image19.png";
import image20 from "../../public/image20.png";
import image21 from "../../public/image21.png";
import image22 from "../../public/image22.png";
import image23 from "../../public/image23.png";
import image24 from "../../public/image24.png";
import image25 from "../../public/image25.png";
import image26 from "../../public/Services.png";
import image27 from "../../public/headphones.png";
import image28 from "../../public/guarantee.png";

import metaImage from "../../public/meta.png";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* 3rd sections Today's Flash Sales starts here....*/}
      <div className="w-screen h-auto py-12 px-4 md:px-14 flex flex-col gap-12 border-b-2 border-slate-400">
        {/* Today's Section */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 md:w-5 md:h-12 bg-[#DB4444] rounded-md"></div>
          <h1 className="text-lg md:text-xl font-semibold text-[#DB4444]">
            Today&apos;s
          </h1>
        </div>

        {/* Flash Sales Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Heading and Timer */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-semibold">Flash Sales</h1>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium">Days</h3>
                <h2 className="text-2xl md:text-4xl font-semibold">
                  03 <span className="text-[#DB4444]"> : </span>
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium">Hours</h3>
                <h2 className="text-2xl md:text-4xl font-semibold">
                  23 <span className="text-[#DB4444]"> : </span>
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium">Minutes</h3>
                <h2 className="text-2xl md:text-4xl font-semibold">
                  19 <span className="text-[#DB4444]"> : </span>
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium">Seconds</h3>
                <h2 className="text-2xl md:text-4xl font-semibold">
                  56 <span className="text-[#DB4444]"> : </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-2 items-center">
            <HiArrowSmallLeft className="text-black text-2xl md:text-4xl bg-slate-300 rounded-full text-center p-2" />
            <HiArrowSmallRight className="text-black text-2xl md:text-4xl bg-slate-300 rounded-full text-center p-2" />
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex justify-between items-center flex-wrap">
          <Cards
            image={image1}
            name="HAVIT HV-G92 GAMEPAD"
            newPrice="$120"
            oldPrice="$160"
            rating={1}
          />
          <Cards
            image={image2}
            name="AK-900 Wired Keyboard"
            newPrice="$960"
            oldPrice="$1160"
            rating={4}
          />
          <Cards
            image={image3}
            name="IPS LCD Gaming Monitor"
            newPrice="$370"
            oldPrice="$400"
            rating={5}
          />
          <Cards
            image={image4}
            name="S-Series Comfort Chair"
            newPrice="$375"
            oldPrice="$400"
            rating={3}
          />
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center items-center">
          <button className="py-3 px-6 bg-[#DB4444] text-white text-[17px] rounded-md">
            View All Products
          </button>
        </div>
      </div>

      {/* 4th section Browse By Category starts here.... */}

      <div className="w-screen h-auto py-12 px-4 md:px-14 flex flex-col gap-12 border-b-2 border-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-5 h-12 bg-[#DB4444] rounded-md"></div>
          <h1 className="text-xl font-semibold text-[#DB4444]">Categories</h1>
        </div>

        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-semibold text-center md:text-left">
              Browse By Category
            </h1>
          </div>
          <div className="flex gap-2 items-center mt-4 md:mt-0">
            <HiArrowSmallLeft className="text-black text-4xl bg-slate-300 rounded-full text-center p-2" />
            <HiArrowSmallRight className="text-black text-4xl bg-slate-300 rounded-full text-center p-2" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <BCards image={image6} name="Phones" />
          <BCards image={image7} name="Computer" />
          <BCards image={image8} name="Smart Watch" />
          <div className="bg-[#DB4444]">
            <BCards image={image9} name="Camera" />
          </div>
          <BCards image={image5} name="HeadPhones" />
          <BCards image={image10} name="Gaming" />
        </div>
      </div>

      {/* 5th section Best Selling Products starts here ... */}
      <div className="w-screen h-auto py-12 px-14 flex flex-col  gap-12 border-b-2 border-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-5 h-12 bg-[#DB4444] rounded-md"></div>
          <h1 className="text-xl font-semibold text-[#DB4444]">This Month</h1>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-[750px]">
            <h1 className="text-4xl font-semibold">Best Selling Products</h1>

            <button className="py-3 px-6 bg-[#DB4444] text-white text-[17px] rounded-md">
              View All
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <Cards
            image={image11}
            name="The North Coat"
            newPrice="$120"
            oldPrice="$160"
            rating={1}
          />
          <Cards
            image={image12}
            name="Gucci Duffle Bag"
            newPrice="$960"
            oldPrice="$1160"
            rating={4}
          />
          <Cards
            image={image13}
            name="RGB Liquid CPU Cooler"
            newPrice="$370"
            oldPrice="$400"
            rating={5}
          />
          <Cards
            image={image14}
            name="Small Bookshelf"
            newPrice="$375"
            oldPrice="$400"
            rating={3}
          />
        </div>
      </div>

      {/* 6th section enhance youre music experience [hero section] starts here....*/}
      <div className="w-auto h-auto flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-14 bg-black m-6 rounded-lg">
        {/* Left Section */}
        <div className="flex flex-col gap-5 mb-6 md:mb-0">
          <h1 className="text-[17px] text-green-400 font-bold">Categories</h1>
          <div className="text-3xl md:text-5xl text-white font-medium text-center md:text-left">
            <h2 className="mb-2">Enhance Your</h2>
            <h2>Music Experience</h2>
          </div>
          <div className="flex justify-center md:justify-start items-center flex-wrap gap-4 md:gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex flex-col justify-center items-center">
              <h2 className="text-[15px] md:text-[17px] font-medium">24</h2>
              <p className="text-[12px] md:text-[14px] font-light">Hours</p>
            </div>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex flex-col justify-center items-center">
              <h2 className="text-[15px] md:text-[17px] font-medium">05</h2>
              <p className="text-[12px] md:text-[14px] font-light">Days</p>
            </div>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex flex-col justify-center items-center">
              <h2 className="text-[15px] md:text-[17px] font-medium">59</h2>
              <p className="text-[12px] md:text-[14px] font-light">Minutes</p>
            </div>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex flex-col justify-center items-center">
              <h2 className="text-[15px] md:text-[17px] font-medium">34</h2>
              <p className="text-[12px] md:text-[14px] font-light">Seconds</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="bg-green-400 text-white text-lg md:text-xl font-medium rounded-lg py-2 px-5 md:py-3 md:px-6">
              Buy Now!
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <Image
            src={metaImage}
            alt="Hero Section Image"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>

      {/* 7th section Our Products starts here ...... */}
      <div className="w-screen h-auto py-12 px-14 flex flex-col  gap-12 border-b-2 border-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-5 h-12 bg-[#DB4444] rounded-md"></div>
          <h1 className="text-xl font-semibold text-[#DB4444]">Our Products</h1>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-8 ">
            <h1 className="text-4xl font-semibold">Explore Our Products</h1>
          </div>
          <div className="flex gap-2 items-center">
            <HiArrowSmallLeft className="text-black text-4xl bg-slate-300 rounded-full text-center p-2" />
            <HiArrowSmallRight className="text-black text-4xl bg-slate-300 rounded-full text-center p-2" />
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <Cards
            image={image15}
            name="Breed Dry dog Food"
            newPrice="$120"
            rating={1}
          />
          <Cards
            image={image16}
            name="Canon ES DSLR Camera"
            newPrice="$960"
            rating={4}
          />
          <Cards
            image={image17}
            name="ASUS FHD Gaming Laptop"
            newPrice="$370"
            rating={5}
          />
          <Cards
            image={image18}
            name="Kids Electric Car"
            newPrice="$375"
            rating={3}
          />
          <Cards
            image={image19}
            name="JR.Zoom Soccer Cleats"
            newPrice="$120"
            rating={1}
          />
          <Cards
            image={image20}
            name="GP11 Shooter USB Gamepad"
            newPrice="$960"
            rating={4}
          />
          <Cards
            image={image21}
            name="Quilten Satin Jacket"
            newPrice="$120"
            rating={1}
          />
          <Cards
            image={image14}
            name="AK-900 Wired Keyboard"
            newPrice="$960"
            rating={4}
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="py-3 px-6 bg-[#DB4444] text-white text-[17px] rounded-md">
            View All Products
          </button>
        </div>
      </div>

      {/* 8th Section New Arrival Section starts here ....... */}
      <div className="w-screen h-auto py-12 px-14 flex flex-col  gap-12">
        <div className="flex items-center gap-3">
          <div className="w-5 h-12 bg-[#DB4444] rounded-md"></div>
          <h1 className="text-xl font-semibold text-[#DB4444]">Featured</h1>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-8 ">
            <h1 className="text-4xl font-semibold">New Arrivals</h1>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-7">
          <div>
            <Image src={image22} alt="image"></Image>
          </div>
          <div className="flex flex-col items-center justify-center gap-7">
            <div>
              <Image src={image23} alt="image"></Image>
            </div>
            <div className="flex items-center justify-center gap-7">
              <div>
                {" "}
                <Image src={image24} alt="image"></Image>
              </div>
              <div>
                {" "}
                <Image src={image25} alt="image"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9th Section starts here...... */}
      <div className="flex justify-around items-center w-screen h-auto py-24 px-7 flex-wrap">
        <CCards
          image={image26}
          name="FREE AND FAST DELIVERY"
          desc="Free delivery for all orders over $140"
        />
        <CCards
          image={image27}
          name="24/7 CUSTOMER SERVICE"
          desc="Friendly 24/7 cutomer support"
        />
        <CCards
          image={image28}
          name="MONEY BACK GUARANTEE"
          desc="We return money within 30 days"
        />
      </div>
    </div>
  );
}
