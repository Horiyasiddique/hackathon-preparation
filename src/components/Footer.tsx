import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import Image from "next/image";
import QRCode from "../../public/Qrcode 1.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-auto py-8 px-14 md:flex justify-between items-center bg-black text-white">
      <div className="">
        <h1 className="text-2xl text-white font-medium mb-4">Exclusive</h1>
        <h2 className="text-xl text-white font-normal mb-4">Subsribe</h2>
        <p className="text-[16px] text-white font-thin">Get 10% off on your first order</p>
        <div className="flex justify-between items-center py-2 px-4 border-2 border-white mt-3 text-slate-500">
          <p>Enter Your Email</p>
          <LuSendHorizontal />
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-white font-medium mb-4">Support</h1>
        <p className="text-[16px] text-white font-thin">111 Bijoy, Sarani, Dhaka,</p>
        <p className="text-[16px] text-white font-thin">DH 1515 Bangladesh</p>

        <h4 className="text-[16px] text-white font-normal mt-3">exclusive@gmail.com</h4>

        <h4 className="text-[16px] text-white font-normal mt-3">+08815-88888-9999</h4>
      </div>
      <div>
        <h4 className="text-2xl text-white font-medium mb-4"> Account</h4>
        <ul className="text-[17px] text-white font-normal">
          <li className="mb-2">My Account</li>
          <li className="mb-2">Login / Register</li>
          <li className="mb-2">Card</li>
          <li className="mb-2">Whishlist</li>
          <li className="mb-2">Shop</li>
        </ul>
      </div>
      <div>
        <h4 className="text-2xl text-white font-medium mb-4">Quick Link</h4>
        <ul className="text-[17px] text-white font-normal">
          <li className="mb-2">Privacy Policy</li>
          <li className="mb-2">Terms Of Use</li>
          <li className="mb-2">FAQ</li>
          <li className="mb-2">Contact</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl text-white font-medium mb-4">Download App</h1>
        <p className="text-[16px] text-slate-300 font-thin mb-4">Save $3 with new app users only</p>
        <div className="flex justify-center items-center gap-6">
          <div>
            <Image src={QRCode} alt="QR code image "></Image>
          </div>
          
           <div className="flex flex-col items-center gap-6">
          {/* button 1 */}
          <button className="bg-black text-white rounded-xl flex justify-center items-center border-2 border-white py-2 px-2">
            <div className="flex">
              <div className="text-2xl">
                <FaApple />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Download on the</p>
                <h2 className="text-xl">App store</h2>
              </div>
            </div>
          </button>

          {/* button 2 */}
          <button className="bg-black text-white rounded-xl  flex justify-center items-center border-2 border-white py-2 px-2">
            <div className="flex">
              <div className="text-2xl">
                <IoLogoGooglePlaystore />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Download on the</p>
                <h2 className="text-xl">App store</h2>
              </div>
            </div>
          </button>
        </div>
        </div>
      <div className="flex justify-center items-center text-3xl gap-4 mt-7 font-semibold">
      <CgFacebook />
      <CiTwitter />
      <FaInstagram />
      <FaLinkedinIn />
      </div>
      </div>
    </div>
  );
}

export default Footer;
