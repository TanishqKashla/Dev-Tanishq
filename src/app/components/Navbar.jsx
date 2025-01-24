import React from 'react'

const Navbar = ({projectsRef, skillsRef, creativeRef }) => {
    const handleScroll = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='md:p-4 my-4 gap-4 flex justify-center '>
            <div className='bg-[#444444] rounded-2xl flex justify-center items-center p-3 px-4'>
                <div className='flex gap-4 md:gap-9'>
                    <img src="/iconssvg/Home.svg" alt="Home" onClick={() => handleScroll(profileRef)} className='cursor-pointer'/>
                    <img src="/iconssvg/Code.svg" alt="Projects" onClick={() => handleScroll(projectsRef)} className='cursor-pointer' />
                    <img src="/iconssvg/Wrench.svg" alt="Skills" onClick={() => handleScroll(skillsRef)} className='cursor-pointer' />
                    <img src="/iconssvg/Palette.svg" alt="Creative" onClick={() => handleScroll(creativeRef)} className='cursor-pointer' />
                </div>
            </div>
            <div className='flex bg-[#336FAC] gap-4 items-center justify-center p-3 px-4 rounded-2xl'>
                <img src="/iconssvg/Luggage.svg" alt="Contact" style={{ height: '28px' }} />
                <p>Get in Touch !</p>
            </div>
        </div>
    )
}

export default Navbar