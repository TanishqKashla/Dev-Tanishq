'use client'

import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Creative from './components/Creative'
import ScrollToTopButton from './components/ScrollToTopButton'
import { useEffect } from 'react'
import Lenis from 'lenis'


const page = () => {

  // Initialize Lenis for smooth scrolling
 

  return (

    <div className='flex flex-col gap-12 scroll-smooth'>
      <div className='block md:hidden'>
        <ProfileCard />
      </div>

      <div>
        <h1 className='font-bold text-[36px] md:text-[70px] leading-tight'>
          Developer by <span className='text-[#AD8AFF]'>Logic</span>,
          <br />
          Designer by <span className='text-[#FAB7B0]'>Heart</span>.
        </h1>

        <p className='text-[#C3C3C3] text-[20px] font-roboto'>
          Blending clean code and thoughtful design to create seamless, user-focused digital experiences. I bring ideas to life with precision and creativity.
        </p>
      </div>

      <div className='bg-[#D6F089] text-[#181818] px-5 py-7'>
        <p className='text-lg'>ABOUT ME</p>
        <h2 className='font-roboto text-2xl md:text-3xl pt-5'>
          Hey, I’m Tanishq Kashla, an aspiring Full Stack Developer and UI/UX designer based in New Delhi.
        </h2>
        <div className='font-roboto text-xl md:text-2xl flex gap-10 pt-8 '>
          <div >
            <h4 className='font-bold'>10+</h4>
            <h4>Happy Clients</h4>
          </div>
          <div>
            <h4 className='font-bold'>2+</h4>
            <h4>Years of Coding Experience</h4>

          </div>
        </div>

      </div>

      <Projects />

      <Skills />

      <Creative />




      <ScrollToTopButton />
    </div>
  )
}

export default page