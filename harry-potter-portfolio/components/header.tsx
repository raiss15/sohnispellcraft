"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)

    const section = document.getElementById(sectionId)
    if (section) {
      // Get the header height to offset the scroll position
      const headerHeight = document.querySelector("header")?.offsetHeight || 0

      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })

      // Update URL hash without scrolling (which would cause a jump)
      history.pushState(null, "", `#${sectionId}`)

      // Update active section
      setActiveSection(sectionId)
    }
  }

  // Track active section on scroll
  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "projects", "education", "contact"]
      const headerHeight = document.querySelector("header")?.offsetHeight || 0

      // Find the section that is currently in view
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= headerHeight + 100 && rect.bottom >= headerHeight) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId)
              // Update URL hash without scrolling
              history.replaceState(null, "", `#${sectionId}`)
            }
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeSection, isHomePage])

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-cinzel text-2xl font-bold text-primary">SR</span>
        </Link>

        {/* Desktop Navigation */}
        {isHomePage ? (
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className={`font-cinzel text-sm hover:text-primary transition-colors ${
                activeSection === "about" ? "text-primary" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`font-cinzel text-sm hover:text-primary transition-colors ${
                activeSection === "experience" ? "text-primary" : ""
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`font-cinzel text-sm hover:text-primary transition-colors ${
                activeSection === "skills" ? "text-primary" : ""
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`font-cinzel text-sm hover:text-primary transition-colors ${
                activeSection === "projects" ? "text-primary" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`font-cinzel text-sm hover:text-primary transition-colors ${
                activeSection === "education" ? "text-primary" : ""
              }`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-cinzel text-sm hover:text-primary transition-colors ${
                activeSection === "contact" ? "text-primary" : ""
              }`}
            >
              Contact
            </button>
            <ThemeToggle />
          </nav>
        ) : (
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-cinzel text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <ThemeToggle />
          </nav>
        )}

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`font-cinzel text-lg text-left hover:text-primary transition-colors ${
                    activeSection === "about" ? "text-primary" : ""
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className={`font-cinzel text-lg text-left hover:text-primary transition-colors ${
                    activeSection === "experience" ? "text-primary" : ""
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`font-cinzel text-lg text-left hover:text-primary transition-colors ${
                    activeSection === "skills" ? "text-primary" : ""
                  }`}
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`font-cinzel text-lg text-left hover:text-primary transition-colors ${
                    activeSection === "projects" ? "text-primary" : ""
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className={`font-cinzel text-lg text-left hover:text-primary transition-colors ${
                    activeSection === "education" ? "text-primary" : ""
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`font-cinzel text-lg text-left hover:text-primary transition-colors ${
                    activeSection === "contact" ? "text-primary" : ""
                  }`}
                >
                  Contact
                </button>
              </>
            ) : (
              <Link
                href="/"
                className="font-cinzel text-lg text-left hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

