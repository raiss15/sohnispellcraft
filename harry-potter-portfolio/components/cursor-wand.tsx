"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const CursorWand = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{
        x: position.x - 12,
        y: position.y - 2,
        scale: isClicking ? 0.9 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      <div
        className="relative"
        style={{
          width: "30px",
          height: "30px",
        }}
      >
        <div
          className="absolute"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url('/images/wand-cursor-custom.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "rotate(-45deg)",
            filter: isClicking ? "brightness(1.5) drop-shadow(0 0 5px rgba(255, 215, 0, 0.7))" : "none",
            transition: "filter 0.2s ease",
          }}
        />
        {isClicking && (
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "10px",
              height: "10px",
              top: "0px",
              right: "0px",
              background: "radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 70%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 2, 1], opacity: [0.7, 0.3, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </div>
    </motion.div>
  )
}

export default CursorWand

