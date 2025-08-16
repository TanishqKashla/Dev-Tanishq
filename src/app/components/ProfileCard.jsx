'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProfileCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='bg-[#89CFF0]  md:w-[353.33px] pb-3 md:h-[560px] text-[#1B1B1B] md:fixed'>

            <motion.div
                className='flex justify-center h-3/5  overflow-hidden items-center relative '
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <div className='overflow-hidden relative h-[250px]  md:h-full aspect-square mt-3'>

                    <Image
                        src='/imagepng/pfp.png'
                        alt='Profile Image'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        quality={100}
                        className='cursor-hover z-10 transition-transform duration-500 transform grayscale hover:grayscale-0'
                    />
                </div>
                <motion.div
                    className='absolute -top-32 -left-16 custom-svg-size'
                    animate={isHovered ? { scale: 1.5, rotate: 360 } : { scale: 1, rotate: 0 }}
                    transition={
                        isHovered
                            ? {
                                scale: { duration: 0.3, ease: "easeInOut" },
                                rotate: { repeat: Infinity, duration: 15, ease: "linear" }
                            }
                            : {
                                scale: { duration: 0.3, ease: "easeInOut" },
                                rotate: { duration: 0.3, ease: "easeInOut" }
                            }
                    }
                >
                    <Image
                        src='/iconssvg/Star.svg'
                        alt='Frame'
                        quality={100}
                        width={800}
                        height={800}
                    />
                </motion.div>
            </motion.div>
            <div className='flex flex-col pt-5 items-center '>
                <h2 data-cursor="2" className='text-4xl md:text-[40px]'>Tanishq Kashla</h2>
                <div className='font-roboto text-base md:text-xl flex flex-col items-center'>
                    <p>Web Developer | Designer </p>
                    <p>  Delhi, India</p>
                </div>
                <div className='flex pt-5 gap-4'>
                    <a data-cursor="2" href="https://www.linkedin.com/in/tanishqkashla/" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/in.svg" alt="linkedin" />
                    </a>
                    <a data-cursor="2" href="https://github.com/TanishqKashla" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/github.svg" alt="linkedin" />
                    </a>
                    {/* <a href="mailto:tanishqkashla11@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/mail.svg" alt="email" />
                    </a> */}
                    <a data-cursor="2" href="https://www.instagram.com/iam_taniiishq/" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/insta.svg" alt="instagram" />
                    </a>
                    <a data-cursor="2" href="https://drive.google.com/file/d/1W5g_jEuO3IWQb01tUl9qlPLQLnJ_7rRP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img src="/iconssvg/download.svg" alt="download" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard