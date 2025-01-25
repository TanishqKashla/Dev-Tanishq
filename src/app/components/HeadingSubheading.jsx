import React from 'react'

const HeadingSubheading = ({heading, subheading}) => {
  return (
      <div>
          <h2 className='text-4xl md:text-5xl font-bold md:heading pt-16 leading-none' >{heading}</h2>
          <p className='lightgray font-roboto text-lg mb-5'>{subheading}</p>
    </div>
  )
}

export default HeadingSubheading