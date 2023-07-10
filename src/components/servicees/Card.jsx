import React from 'react'

const Card = ({header, description, image}) => {
  return (
    <div className='bg-[#f5f6f7] w-[26rem] px-6 sm:px-1 md:px-2 md:py-2 py-4 h-[12rem] relative rounded-xl md:w-[18rem] md:h-[10rem] sm:w-[11.5rem] sm:h-[13rem]'>
        <div>
            <p className='font-semibold text-[1.8rem] sm:text-[1.4rem]'>{header}</p>
            <p className='font-normal text-[1rem] text-gray-500 w-[12.2rem] md:text-[0.8rem] md:font-light md:w-[15rem] sm:w-[9.4rem]'>{description}</p>
        </div>
        <div className=''>
            <img src={image} alt='' className='rounded-b-xl absolute right-0 bottom-0 md:h-[5rem] sm:h-[3.5rem]'/>
        </div>
    </div>
  )
}

export default Card