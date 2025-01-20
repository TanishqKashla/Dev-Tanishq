import React from 'react'
import Card from './Card'

const Creative = () => {
  return (
      <div>
          <h2 className='heading pt-16 leading-none' >My Creative Playground</h2>
          <p className='lightgray font-roboto text-lg mb-5'>When I’m not coding or designing interfaces, I love diving into side projects like magazine designs, logos, and branding.</p>

          <div className='grid grid-cols-2 gap-9'>
              <Card src={'/imagepng/creative/1.png'} title={'College Alumni Magazine Design'}/>
              <Card src={'/imagepng/creative/2.png'} title={'Vivanta Brand Identity Design  - Personal Project'}/>
              <Card src={'/imagepng/creative/3.png'} title={'Main10 Brand Identity Design - Client Project'}/>
              <Card src={'/imagepng/creative/4.png'} title={'Logo Design'}/>
          </div>
    </div>
  )
}

export default Creative