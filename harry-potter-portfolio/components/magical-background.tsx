"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type SparkleProps = {
  size: number
  color: string
  style: React.CSSProperties
}

const Sparkle = ({ size, color, style }: SparkleProps) => {
  return (
    <motion.div
      className="absolute rounded-full z-0 pointer-events-none"
      style={{
        ...style,
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${size}px ${color}`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    />
  )
}

type WandProps = {
  style: React.CSSProperties
  rotation: number
}

const Wand = ({ style, rotation }: WandProps) => {
  return (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{
        ...style,
        width: "80px",
        height: "10px",
        borderRadius: "2px",
        background: "linear-gradient(90deg, #5D4037 70%, #8D6E63 100%)",
        transformOrigin: "center",
        boxShadow: "0 0 5px rgba(255, 215, 0, 0.3)",
      }}
      initial={{ rotate: rotation, opacity: 0 }}
      animate={{
        rotate: [rotation, rotation + 10, rotation - 5, rotation],
        y: [0, -15, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay: Math.random() * 5,
      }}
    >
      {/* Wand tip glow */}
      <motion.div
        className="absolute right-0 rounded-full"
        style={{
          width: "15px",
          height: "15px",
          top: "-2.5px",
          background: "radial-gradient(circle, rgba(255,215,0,0.9) 0%, rgba(255,215,0,0) 70%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

const MagicalBackground = () => {
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setMounted(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight * 3, // Multiply by 3 to cover the entire scrollable area
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight * 3,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  // Generate random positions for sparkles
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 3,
    color: `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.3})`,
    style: {
      top: `${Math.random() * dimensions.height}px`,
      left: `${Math.random() * dimensions.width}px`,
    },
  }))

  // Generate random positions for wands
  const wands = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    rotation: Math.random() * 360,
    style: {
      top: `${Math.random() * dimensions.height}px`,
      left: `${Math.random() * dimensions.width}px`,
    },
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ height: dimensions.height }}>
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} size={sparkle.size} color={sparkle.color} style={sparkle.style} />
      ))}

      {/* Wands */}
      {wands.map((wand) => (
        <Wand key={wand.id} rotation={wand.rotation} style={wand.style} />
      ))}
    </div>
  )
}

export default MagicalBackground

