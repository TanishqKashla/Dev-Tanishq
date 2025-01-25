import ProfileCard from '@/app/components/ProfileCard'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
      <div className='bg-red-200 mt-10 flex'>
          <ProfileCard />
          <div className='w-full md:ml-[380px] pt-5  aspect-square overflow-hidden relative'>
              <Image
                src='/imagepng/projects/1.png'
                alt='Background'
                layout='fill'
                objectFit='cover'
                objectPosition='center'

                className='absolute'

                quality={100}
              />
          </div>
    </div>
  )
}

export default page