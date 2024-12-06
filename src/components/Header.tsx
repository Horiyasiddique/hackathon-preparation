"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function Header() {
  const currentPath = usePathname();

  return (
    <div>
      {/* Top Announcement Bar */}
      <div className="bg-black text-white font-normal flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-12 px-6 md:px-12 py-4 text-sm md:text-xl">
        <div className="text-center md:text-left">
          <p>
            Summer Sale For All Swim Suits and Free Express Delivery -50% Off!{" "}
            <span className="font-semibold cursor-pointer">Shop Now</span>
          </p>
        </div>
        <div className="text-center md:text-right">English</div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center py-5 px-6 md:px-12 border-b-2 border-slate-300">
        {/* Logo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Exclusive</h1>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <ul className="hidden md:flex justify-center gap-8 text-lg font-normal">
          {["Home", "Contact", "About", "Sign Up"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item === "Home" ? "" : item}`}
                className={`${
                  currentPath === `/${item === "Home" ? "" : item}`
                    ? "border-b-2 border-black"
                    : "border-b-2 border-transparent"
                } hover:border-black`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search, Heart, Cart Icons */}
        <div className="hidden md:flex justify-between items-center gap-6">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-[300px] px-3 py-2 bg-slate-100 text-slate-700 rounded-md"
          />
          <CiHeart className="text-3xl text-black cursor-pointer" />
          <AiOutlineShoppingCart className="text-3xl text-black cursor-pointer" />
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger className="block md:hidden">
            <Menu className="text-3xl text-black cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-bold">Exclusive</h1>
              <ul className="flex flex-col gap-4">
                {["Home", "Contact", "About", "Sign Up"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === "Home" ? "" : item}`}
                      className={`${
                        currentPath === `/${item === "Home" ? "" : item}`
                          ? "text-black font-semibold"
                          : "text-slate-600"
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 mt-4">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full px-3 py-2 bg-slate-100 text-slate-700 rounded-md"
                />
                <div className="flex justify-between items-center gap-6">
                  <CiHeart className="text-3xl text-black cursor-pointer" />
                  <AiOutlineShoppingCart className="text-3xl text-black cursor-pointer" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header;
