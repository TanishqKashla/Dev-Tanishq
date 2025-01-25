import Image from 'next/image'
import React from 'react'

const Card = ({ src, title, desc, link }) => {
  return (
    <div className='overflow-hidden cursor-pointer'>
      <div className='overflow-hidden'>
        <Image
          src={src}
          alt='Project 1'
          quality={100}
          width={900}
          height={500}
          className='transition-transform duration-500 transform hover:scale-110'
        />
      </div>
      <h5 className='text-base md:text-2xl pt-2'>{title}</h5>
      <p className='text-sm md:text-lg font-roboto lightgray'>{desc}</p>
    </div>
  )
}

export default Card