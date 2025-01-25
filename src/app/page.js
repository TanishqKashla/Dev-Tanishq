'use client'
import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Creative from './components/Creative'
import ScrollToTopButton from './components/ScrollToTopButton'


const page = () => {

  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const creativeRef = useRef(null);


  return (
    <div className='mt-24'>
      <div className=''>

        <Navbar
          profileRef={profileRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          creativeRef={creativeRef}
        />
        <div className='md:flex px-3 gap-9'>
          <ProfileCard />
          <div className='w-full md:ml-[380px] pt-5'>
            <h1 className='font-bold text-[36px] md:text-[70px] leading-tight'>
              Developer by <span className='text-[#AD8AFF]'>Logic</span>,
              <br />
              Designer by <span className='text-[#FAB7B0]'>Heart</span>.
            </h1>

            <p className='text-[#C3C3C3] text-[20px] py-5 font-roboto'>
              Blending clean code and thoughtful design to create seamless, user-focused digital experiences. I bring ideas to life with precision and creativity.
            </p>

            <div className='bg-[#D6F089] text-[#181818] px-5 py-7'>
              <p className='text-lg'>ABOUT ME</p>
              <h2 className='font-roboto text-2xl md:text-3xl pt-5'>
                Hey, I’m Tanishq Kashla, a self-taught frontend developer and budding UI/UX designer based in New Delhi.
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
            <div ref={projectsRef}>
              <Projects />
            </div>
            <div ref={skillsRef}>
              <Skills />
            </div>
            <div ref={creativeRef}>
              <Creative />
            </div>

          </div>
        </div>
      </div>
      <ScrollToTopButton/>
    </div>
  )
}

export default page