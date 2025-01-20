import React from 'react'

const Navbar = () => {
    return (
        <div className='p-4 gap-4 flex justify-center '>
            <div className='bg-[#444444] rounded-2xl flex justify-center items-center p-3 px-4'>
                <div className='flex gap-9'>

                    <img src="/iconssvg/Home.svg" alt="Logo" />
                    <img src="/iconssvg/Code.svg" alt="Logo" />
                    <img src="/iconssvg/Wrench.svg" alt="Logo" />
                    <img src="/iconssvg/Palette.svg" alt="Logo" />
                </div>
            </div>
            <div className='flex bg-[#336FAC] gap-4 items-center p-3 px-4  rounded-2xl'>
                <img src="/iconssvg/Luggage.svg" alt="Logo"
                    style={{ height: '28px' }}
                />
                <p>Get in Touch !</p>
            </div>

        </div>
    )
}

export default Navbar