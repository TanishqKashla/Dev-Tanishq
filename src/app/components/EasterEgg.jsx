'use client'
import React, { useState } from 'react';
import { IoBugSharp } from "react-icons/io5";

const EasterEgg = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleModal}
                className='p-3  text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300'
            >
                <IoBugSharp size={40}/>
            </button>

            {isOpen && (
                <div className='z-50 fixed font-roboto inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-[#efefef] w-[330px] p-5 rounded-lg shadow-lg'>
                        <h2 className='text-xl text-[#424242] mb-4'>Did You Know?</h2>
                        <h2 className='text-2xl text-[#247cbb] font-bold mb-4'>The first computer bug was an actual bug!</h2>
                        <p className='mb-4 text-[#191919]'>In 1947, engineers working on the Harvard Mark II computer found that a moth had gotten stuck in one of the computer’s relays, causing it to malfunction. They taped the moth into their logbook and labeled it as the "first actual case of a bug being found." This is where the term "debugging" in computing comes from!</p>
                        <button
                            onClick={toggleModal}
                            className='p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300'
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EasterEgg;