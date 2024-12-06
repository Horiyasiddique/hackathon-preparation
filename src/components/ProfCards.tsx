import React from "react";
import { StaticImageData } from "next/image";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
interface structure {
  image: StaticImageData;
  name: string;
  role: string;
}
function ProfCards({ image, name, role }: structure) {
  return (
    <div className="flex flex-col gap-2 ">
      <Image src={image} alt="Our Teammates Pictures"></Image>
      <h1 className="text-3xl font-semibold">{name}</h1>
      <h4 className="text-sm text-slate-700">{role}</h4>
      <div className="flex items-center gap-2 text-xl ">
        <CiTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
    </div>
  );
}

export default ProfCards;
