"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ResumePage() {
  const [resumeContent, setResumeContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch("/sohni-rais-resume.txt")
        const text = await response.text()
        setResumeContent(text)
      } catch (error) {
        console.error("Failed to load resume:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResume()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="font-cinzel">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
          <Link href="/sohni-rais-resume.txt" download="Sohni_Rais_Resume.txt">
            <Button className="font-cinzel">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border rounded-lg shadow-lg p-6 md:p-8"
        >
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-primary text-center">Resume</h1>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="font-mono whitespace-pre-wrap">{resumeContent}</div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

