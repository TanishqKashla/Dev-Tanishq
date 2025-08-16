'use client'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/Footer'
import Lenis from 'lenis'
import CustomCursor from './components/CustomCursor'


const ClientLayout = ({ children }) => {

    useEffect(() => {
        const lenis = new Lenis();
        let animationFrameId;

        function raf(time) {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        }
        animationFrameId = requestAnimationFrame(raf);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            if (lenis) lenis.destroy && lenis.destroy();
        };
    }, []);

    return (
        <>
            <span className='hidden lg:block'>
                <CustomCursor />
            </span>
            <Navbar />
            <div className="px-5 mt-24 md:px-0 md:w-[1060px]">
                <div className="hidden md:block">

                    <ProfileCard />
                </div>
                <div className="md:ml-[380px]">

                    {children}

                    <SpeedInsights />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default ClientLayout