import Link from 'next/link';
import React from 'react'

const Navbar = ({ projectsRef, skillsRef, creativeRef }) => {
    const handleScroll = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full'>

            <div className='md:px-4  gap-3 flex justify-center'>
                <div className='bg-[#444444] rounded-2xl flex justify-center items-center p-3 px-4'>
                    <div className='flex gap-3 md:gap-9'>
                        <img src="/iconssvg/Home.svg" alt="Home" onClick={() => handleScroll(profileRef)} className='cursor-pointer' />
                        <img src="/iconssvg/Code.svg" alt="Projects" onClick={() => handleScroll(projectsRef)} className='cursor-pointer' />
                        <img src="/iconssvg/Wrench.svg" alt="Skills" onClick={() => handleScroll(skillsRef)} className='cursor-pointer' />
                        <img src="/iconssvg/Palette.svg" alt="Creative" onClick={() => handleScroll(creativeRef)} className='cursor-pointer' />
                    </div>
                </div>
                <div className='flex bg-[#336FAC]  gap-2 md:gap-4 items-center justify-center p-2 md:p-3 md:px-4 rounded-2xl cursor-pointer' onClick={() => handleClick('mailto:tanishqkashla11@gmail.com')}>
                    <img src="/iconssvg/Luggage.svg" alt="Contact" style={{ height: '28px' }} />
                    <p>Hire Me !</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar