'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { TfiArrowTopRight } from "react-icons/tfi";


const DetailsPage = ({ id }) => {

       const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data');
                const res = await fetch("/details/details.json");
                console.log('RES OK')
                const data = await res.json();
                console.log("Data fetched:", data);

                const selectedProject = data.find((proj) => proj.id === id);

                if (selectedProject) {
                    setDetails(selectedProject);
                    console.log("Project found:", selectedProject);
                } else {
                    console.log("No project found with ID:", id);
                }
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };

        if (id) fetchData();
    }, [id]);

    if (!details) {
        return <p className="text-center text-gray-500">Loading project details...</p>;
    }

    return (
        <div>
            <h1 data-cursor="4" className='text-5xl md:text-7xl w-fit font-bold'>{details.title}</h1>
            <p className='lightgray font-roboto pt-3'>{details.desc}</p>


            <div className="flex justify-end font-roboto gap-2 pt-2">
                {details.link && (
                    <a
                        href={details.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-[#f57b2f] p-2 rounded-lg text-white"
                        data-cursor="3"
                    >
                        Link <TfiArrowTopRight className="ml-1" />
                    </a>
                )}
                {details.gitrepo && (
                    <a
                        href={details.gitrepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-[#3036ea] p-2 rounded-lg text-white"
                        data-cursor="3"
                    >
                        Git Repo
                    </a>
                )}
                {details.figmaLink && (
                    <a
                        href={details.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-[#9044dc] p-2 rounded-lg text-white"
                        data-cursor="3"
                    >
                        Figma File
                    </a>
                )}
            </div>


            <div className="font-roboto flex items-top py-5">
                <h2 className="font-bold text-2xl mr-2">Skills:</h2>
                <div className="flex flex-wrap gap-2">
                    {details.skills.map((skill, index) => (
                        <span key={index} className="bg-[#444444] text-white px-3 py-1 rounded-lg">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className='grid gap-2 md:gap-5'>
                <div data-cursor="4" className='relative overflow-hidden w-full h-[210px] md:h-[350px] rounded-2xl'>
                    <Image
                        src={details.image1}
                        alt='Project 1'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        quality={100}
                        className='z-10'
                       
                    />
                </div>
                <div className='grid grid-cols-2 gap-2 md:gap-5'>
                    <div data-cursor="4" className='relative overflow-hidden h-full rounded-2xl'>
                        <Image
                            src={details.image2}
                            alt='Project 1'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            quality={100}
                            className='z-10'

                        />
                    </div>
                    <div className='grid grid-rows-2 gap-2 md:gap-5 h-[270px] md:h-[450px]'>
                        <div data-cursor="4" className='relative overflow-hidden rounded-2xl'>
                            <Image
                                src={details.image3}
                                alt='Project 1'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                quality={100}
                                className='z-10'
                            />
                        </div>
                        <div data-cursor="4" className='relative overflow-hidden rounded-2xl'>
                            <Image
                                src={details.image4}
                                alt='Project 1'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                quality={100}
                                className='z-10'
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DetailsPage