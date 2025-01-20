import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className='bg-[#89CFF0] w-[353.33px] h-[560px] text-[#1B1B1B] fixed'>
            <div className='flex justify-center h-3/5 overflow-hidden items-center relative '>
                <Image
                    src='/imagepng/pfp.png'
                    alt='Profile Image'
                    quality={100}
                    width={300}
                    height={300}
                    className='z-10'
                />
                <Image
                    src='/iconssvg/Star.svg'
                    alt='Frame'
                    quality={100}
                    width={800}
                    height={800}
                    className='absolute -top-32 -left-16 z-0 custom-svg-size'
                />

            </div>
            <div className='flex flex-col pt-5 items-center '>
                <h2 className='text-[40px]'>Tanishq Kashla</h2>
                <div className='font-roboto text-xl flex flex-col items-center'>
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
                    <a href="mailto:tanishqkashla11@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/mail.svg" alt="email" />
                    </a>
                    <a href="https://www.instagram.com/iam_taniiishq/" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/insta.svg" alt="instagram" />
                    </a>
                    <a href="/path/to/download/file" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/download.svg" alt="download" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard