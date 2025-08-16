import React from 'react'

const HeadingSubheading = ({heading, subheading}) => {
  return (
      <div className=''>
      <h2 data-cursor="3" className='w-fit text-5xl md:text-5xl font-bold md:heading leading-none' >{heading}</h2>
          <p className='lightgray font-roboto text-lg mb-5'>{subheading}</p>
    </div>
  )
}

export default HeadingSubheading