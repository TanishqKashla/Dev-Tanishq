import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Cursor = () => {

    // Custom cursor effect
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("initial");

    console.log(cursorPosition);

    useEffect(() => {
        const mouseMove = e => {
            setCursorPosition({
                x: e.clientX,
                y: e.clientY
            });
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])

    const variants = {
        initial: {
            x: cursorPosition.x - 10,
            y: cursorPosition.y - 10,
            transition: { type: "tween", duration: 0.09, ease: "easeOut" }
        },
        animate: {
            height: 150,
            width: 150,
            x: cursorPosition.x - 75,
            y: cursorPosition.y - 75,
            transition: { type: "tween", duration: 0.12, ease: "easeOut" }
        }
    }

    // Other ease options in Framer Motion include:
    // - "easeIn"
    // - "easeOut"
    // - "easeInOut"
    // - "circIn"
    // - "circOut"
    // - "circInOut"
    // - "backIn"
    // - "backOut"
    // - "backInOut"
    // - "anticipate"
    // You can also use custom cubic-bezier arrays, e.g. [0.42, 0, 0.58, 1]

    return (
        <motion.div
            className='fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50'
            variants={variants}
            animate={cursorVariant}
            style={{
                mixBlendMode: 'difference',
                background: '#fff',
            }}
        >
        </motion.div>
    )
}

export default Cursor