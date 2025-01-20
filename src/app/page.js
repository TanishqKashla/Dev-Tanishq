import React from 'react'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Creative from './components/Creative'


const page = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[1060px]'>

        <Navbar />
        <div className='flex px-3 gap-9'>
          <ProfileCard />
          <div className='w-2/3 ml-[380px]'>
            <h1 className='font-bold text-[70px] leading-tight'>
              Developer by <span className='text-[#AD8AFF]'>Logic</span>,
              <br />
              Designer by <span className='text-[#FAB7B0]'>Heart</span>.
            </h1>

            <p className='text-[#C3C3C3] text-[20px] pt-5 font-roboto'>
              Blending clean code and thoughtful design to create seamless, user-focused digital experiences. I bring ideas to life with precision and creativity.
            </p>

            <div className='bg-[#D6F089] text-[#181818] px-5 py-7'>
              <p className='text-lg'>ABOUT ME</p>
              <h2 className='font-roboto text-3xl pt-5'>
                Hey, I’m Tanishq Kashla, a self-taught frontend developer and budding UI/UX designer based in New Delhi.
              </h2>
              <div className='font-roboto text-2xl flex gap-10 pt-8 '>
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

          </div>
        </div>
      </div>
    </div>
  )
}

export default page