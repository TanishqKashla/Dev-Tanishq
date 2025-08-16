'use client'
import { motion, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const CustomCursor = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [cursorScale, setCursorScale] = useState(1)
    const pathname = usePathname()

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }
        window.addEventListener("mousemove", moveCursor)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
        }
    }, [mouseX, mouseY])

    useEffect(() => {
        // 🔑 Give Next.js time to render the new route content
        const timer = setTimeout(() => {
            const elements = document.querySelectorAll("[data-cursor]")

            const handleEnter = (e) => {
                const scaleValue = parseFloat(e.currentTarget.getAttribute("data-cursor")) || 1.5
                setCursorScale(scaleValue)
            }
            const handleLeave = () => setCursorScale(1)

            elements.forEach((el) => {
                el.addEventListener("mouseenter", handleEnter)
                el.addEventListener("mouseleave", handleLeave)
            })

            return () => {
                elements.forEach((el) => {
                    el.removeEventListener("mouseenter", handleEnter)
                    el.removeEventListener("mouseleave", handleLeave)
                })
            }
        }, 50) // small delay (~1 frame)

        return () => clearTimeout(timer)
    }, [pathname]) // runs on every route change

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{ scale: cursorScale }}
            transition={{
                scale: { type: "spring", stiffness: 400, damping: 25 },
            }}
        />
    )
}

export default CustomCursor
