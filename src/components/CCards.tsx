import React from 'react'
import { StaticImageData } from 'next/image'
import Image  from 'next/image'


interface structure{
    image: StaticImageData,
    name: string,
    desc: string
}
function CCards({image,name,desc}:structure) {
  return (
    <div className='flex justify-center items-center flex-col gap-3'>
      <div>
        <Image src={image} alt='Image'></Image>
      </div>
      <div className='text-[17px] text-black font-medium'>
        {name}
      </div>
      <div className='text-[12px] text-slate-500 font-normal'>
        {desc}
      </div>
    </div>
  )
}

export default CCards
