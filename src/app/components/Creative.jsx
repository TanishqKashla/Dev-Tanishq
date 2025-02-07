import React from 'react'
import Card from './Card'
import HeadingSubheading from './HeadingSubheading'

const Creative = () => {
  return (
    <div>

      <HeadingSubheading heading={'My Creative Playground'} subheading={'When I’m not coding or designing interfaces, I love diving into side projects like magazine designs, logos, and branding.'} />

      <div className='grid grid-cols-2 gap-5 md:gap-9'>
        <Card src={'/imagepng/creative/1.png'} title={'Magazine Designs'} link={'/creative/200'} />
        <Card src={'/imagepng/creative/3.png'} title={'Main10 Brand Identity Design - Client Project'} link={'/creative/202'} />
        <Card src={'/imagepng/creative/2.png'} title={'Vivanta Brand Identity Design  - Personal Project'} link={'/creative/201'} />
        <Card src={'/imagepng/creative/4.png'} title={'Logo Designs'} link={'/creative/203'} />
      </div>
    </div>
  )
}

export default Creative