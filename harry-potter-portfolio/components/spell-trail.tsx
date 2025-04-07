"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const SpellTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const [isActive, setIsActive] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => {
      setIsActive(true)
    }

    const handleMouseUp = () => {
      setIsActive(false)
      // Clear trail after a short delay
      setTimeout(() => {
        setTrail([])
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  useEffect(() => {
    if (isActive && mounted) {
      setTrail((prevTrail) => [...prevTrail, { x: mousePosition.x, y: mousePosition.y, id: Date.now() }].slice(-20)) // Keep only the last 20 points
    }
  }, [mousePosition, isActive, mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute rounded-full"
          style={{
            left: point.x,
            top: point.y,
            width: 10 - index * 0.4,
            height: 10 - index * 0.4,
            backgroundColor: `rgba(255, 215, 0, ${1 - index * 0.05})`,
            boxShadow: `0 0 ${8 - index * 0.3}px ${4 - index * 0.15}px rgba(255, 215, 0, ${0.8 - index * 0.04})`,
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}

export default SpellTrail

