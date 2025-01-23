import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`fixed bottom-4 right-7 ${isVisible ? 'block' : 'hidden'}`}>
            <button
                onClick={scrollToTop}
                className='p-5 bg-[#89CFF0] text-white rounded-full shadow-lg hover:bg-[#B89AFF] transition duration-300'
            >
                <FaChevronUp color='black'/>
            </button>
        </div>
    );
};

export default ScrollToTopButton;