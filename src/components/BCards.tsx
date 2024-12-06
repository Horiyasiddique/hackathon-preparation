import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
interface cardsProps {
  name: string;
  image: StaticImageData,
  
}

function BCards({ name, image}: cardsProps) {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-slate-500 py-4 px-8 rounded-lg">
      <Image src={image} alt="images"></Image>
      <h1>{name}</h1>
    </div>
  );
}

export default BCards;
