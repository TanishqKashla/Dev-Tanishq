import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className='bg-[#89CFF0]  md:w-[353.33px] pb-3 md:h-[560px] text-[#1B1B1B] md:fixed'>

            <div className='flex justify-center h-3/5  overflow-hidden items-center relative '>
                <div className='overflow-hidden relative h-[250px]  md:h-full aspect-square mt-3'>

                    <Image
                        src='/imagepng/pfp.png'
                        alt='Profile Image'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        quality={100}

                        className=' z-10 transition-transform duration-500 transform grayscale hover:grayscale-0'
                    />
                </div>
                <Image
                    src='/iconssvg/Star.svg'
                    alt='Frame'
                    quality={100}
                    width={800}
                    height={800}
                    className='absolute -top-32 -left-16  custom-svg-size'
                />

            </div>
            <div className='flex flex-col pt-5 items-center '>
                <h2 className='text-4xl md:text-[40px]'>Tanishq Kashla</h2>
                <div className='font-roboto text-base md:text-xl flex flex-col items-center'>
                    <p>Web Developer | Designer </p>
                    <p>  Delhi, India</p>
                </div>
                <div className='flex pt-5 gap-4'>
                    <a href="https://www.linkedin.com/in/tanishqkashla/" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/in.svg" alt="linkedin" />
                    </a>
                    <a href="https://github.com/TanishqKashla" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/github.svg" alt="linkedin" />
                    </a>
                    {/* <a href="mailto:tanishqkashla11@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/mail.svg" alt="email" />
                    </a> */}
                    <a href="https://www.instagram.com/iam_taniiishq/" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/insta.svg" alt="instagram" />
                    </a>
                    <a href="https://drive.google.com/file/d/1GDX1JT8Awo6R4oXEXhfQ9jJXwCX4tNT5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/download.svg" alt="download" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard