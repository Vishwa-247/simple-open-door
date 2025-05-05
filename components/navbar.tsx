
"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    
    // Initial animation for navbar
    const tl = gsap.timeline()
    tl.fromTo("header", 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
    )
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Animation for menu toggle
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu-content", 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      )
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-bold text-xl text-gray-900 dark:text-white flex items-center">
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Vishwa Teja
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Experience", id: "experience" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-3 py-2 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                // Button animation
                gsap.to(".menu-icon", { 
                  rotate: isMenuOpen ? 0 : 90, 
                  opacity: isMenuOpen ? 1 : 0,
                  scale: isMenuOpen ? 1 : 0.8,
                  display: isMenuOpen ? 'block' : 'none',
                  duration: 0.3 
                })
                gsap.to(".close-icon", { 
                  rotate: isMenuOpen ? -90 : 0, 
                  opacity: isMenuOpen ? 0 : 1, 
                  scale: isMenuOpen ? 0.8 : 1,
                  display: isMenuOpen ? 'none' : 'block',
                  duration: 0.3 
                })
              }}
              className="text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 menu-icon" style={{ display: isMenuOpen ? 'none' : 'block' }} />
              <X className="h-6 w-6 close-icon" style={{ display: isMenuOpen ? 'block' : 'none' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md mobile-menu-content">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-0">
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Experience", id: "experience" },
                { name: "Contact", id: "contact" }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-4 py-3 text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
