import React from 'react'
import Image  from 'next/image'
import { StaticImageData } from 'next/image'

interface cards{
    image: StaticImageData,
    name: string,
    newPrice: string,
    oldPrice?: string,
    rating: number

}
function Cards({image,name,newPrice,oldPrice,rating}:cards) {
    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`text-yellow-400 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ));
      };
  return (
    <div className=''>
        <div>
            <Image src={image} alt="product Image"></Image>
            <h2 className=' font-medium'>{name}</h2>
            <div className='flex gap-4'>
                <p className='text-[#DB4444] font-bold'>{newPrice}</p>
                <p className='font-semibold text-slate-500 line-through'>{oldPrice}</p>
            </div>


        </div>
        {/* Display Stars */}
        <div className="mt-2">{renderStars()}</div>
      </div>
      
   
  )
}

export default Cards
