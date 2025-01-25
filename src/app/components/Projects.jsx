import Image from 'next/image'
import React from 'react'
import Card from './Card'
import HeadingSubheading from './HeadingSubheading'

const Projects = () => {
    return (
        <div>
            <HeadingSubheading heading={'PROJECTS'} subheading={'These are the projects I’ve poured my time and passion into, combining code and design to create something meaningful.'} />
            <div className='grid grid-cols-2 gap-5 md:gap-9'>

                <Card src={'/imagepng/projects/1.png'} title={'Nebula Accelerator'} desc={'Saas Website UI Design'} />
                <Card src={'/imagepng/projects/2.png'} title={'Write It Blogs'} desc={'Personal Blog Web Project'} />
                <Card src={'/imagepng/projects/3.png'} title={'NewsOnPoint'} desc={'News Scraper Web Project'} />
                <Card src={'/imagepng/projects/4.png'} title={'Wolf Decentralized'} desc={'SaaS Website UI Design'} />
                <Card src={'/imagepng/projects/5.png'} title={'Next Watch'} desc={'Movie Recommendation Web Project'} />
            </div>
        </div>
    )
}

export default Projects