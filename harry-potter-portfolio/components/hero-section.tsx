"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-4 text-primary">Sohni Rais</h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <h2 className="text-xl md:text-2xl mb-6 font-cinzel">Software Engineer & Front-end Developer</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Welcome to my magical portfolio! I'm a passionate software engineer specializing in front-end development
              with expertise in React.js, TypeScript, and modern web technologies. Like a skilled wizard, I craft
              elegant solutions to complex problems.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="font-cinzel" onClick={handleContactClick}>
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Link href="/resume">
                <Button variant="outline" className="font-cinzel w-full">
                  <Download className="mr-2 h-4 w-4" /> View Resume
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

