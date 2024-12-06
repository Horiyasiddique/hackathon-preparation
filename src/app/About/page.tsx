import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/about-image.png";
import house from "../../../public/house-icon.png";
import sale from "../../../public/sale-icon.png";
import bag from "../../../public/bag-icon.png";
import dollars from "../../../public/dollars-icon.png";
import BCards from "@/components/BCards";
import CCards from "@/components/CCards";
import image26 from "../../../public/Services.png";
import image27 from "../../../public/headphones.png";
import image28 from "../../../public/guarantee.png";
import ProfCards from "@/components/ProfCards";
import boyPic from "../../../public/men.png";
import menPic from "../../../public/men2.png";
import girlPic from "../../../public/women.png";

function page() {
    return (
      <div className="w-screen min-h-screen p-7">
        <h1 className="text-slate-600 font-medium text-lg sm:text-xl">
          Home / <span className="text-black">About</span>
        </h1>
  
        <div className="md:flex justify-between items-center w-full h-full gap-8">
          {/* Left Content */}
          <div className="flex flex-col gap-8 w-full md:w-[50%] h-full">
            <h1 className="text-3xl sm:text-5xl text-black font-semibold">
              Our Story
            </h1>
            <div>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                facilis recusandae provident illo commodi pariatur qui id tempore,
                reprehenderit natus tenetur impedit ipsa placeat alias est
                perferendis vitae earum harum!
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ab
                quam tempore qui inventore voluptas iusto omnis quaerat fuga
                facilis!
              </p>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-full md:w-[50%] h-auto">
            <Image
              src={aboutImage}
              alt="About Picture of 2 girls with Shopping Bags in their hands"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
  
        {/* BCards Section */}
        <div className="flex justify-center items-center flex-wrap gap-8 py-16">
          <BCards image={house} name="10.5k" />
          <div className="bg-[#DB4444]">
            <BCards image={dollars} name="33k" />
          </div>
          <BCards image={sale} name="45.5k" />
          <BCards image={bag} name="25k" />
        </div>
  
        {/* ProfCards Section */}
        <div className="py-5 flex flex-wrap justify-center gap-8 items-center">
          <ProfCards image={boyPic} name="Tom Cruise" role="Founder & Chairmen" />
          <ProfCards image={girlPic} name="Emma Watson" role="Managing Director" />
          <ProfCards image={menPic} name="Will Smith" role="Product Designer" />
        </div>
  
        {/* CCards Section */}
        <div className="flex flex-wrap justify-center gap-10 items-center py-24">
          <CCards
            image={image26}
            name="FREE AND FAST DELIVERY"
            desc="Free delivery for all orders over $140"
          />
          <CCards
            image={image27}
            name="24/7 CUSTOMER SERVICE"
            desc="Friendly 24/7 customer support"
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
  
  export default page;
  