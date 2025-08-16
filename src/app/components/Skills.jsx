import React from 'react'
import HeadingSubheading from './HeadingSubheading'

const Skills = () => {
  return (
    <div>

      <HeadingSubheading heading={'SKILLS & TOOLS'} subheading={'Here’s what I work with every day.'}/>

      <div className='grid grid-cols-6 gap-2 lg:gap-9 pt-5'>
        <img data-cursor="3" src='/imagepng/skills/1.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/2.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/3.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/4.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/5.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/6.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/7.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/8.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/9.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/10.png' alt='HTML' />
        <img data-cursor="3" src='/imagepng/skills/11.png' alt='HTML' />


      </div>
    </div>
  )
}

export default Skills