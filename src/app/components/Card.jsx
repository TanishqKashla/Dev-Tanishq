import Image from 'next/image'
import React from 'react'

const Card = ({src, title, desc, link}) => {
  return (
      <div>
          <Image
              src={src}
              alt='Project 1'
              quality={100}
              width={900}
              height={500}
          />
          <h5 className='text-2xl pt-2'>{ title}</h5>
          <p className='text-lg font-roboto lightgray'>{ desc}</p>
    </div>
  )
}

export default Card