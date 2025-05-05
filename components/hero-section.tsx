
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const bgElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    
    // Animate background elements first
    if (bgElementsRef.current) {
      const elements = bgElementsRef.current.children;
      gsap.fromTo(
        elements, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.2, stagger: 0.2 }
      )
    }
    
    // Then animate content
    tl.fromTo(headingRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    )
    
    // Create floating animation for background elements
    if (bgElementsRef.current) {
      const elements = bgElementsRef.current.children;
      for (let i = 0; i < elements.length; i++) {
        gsap.to(elements[i], {
          y: `${Math.random() * 30 - 15}px`,
          x: `${Math.random() * 30 - 15}px`,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random()
        });
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div ref={bgElementsRef} className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-sky-300/20 dark:bg-sky-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-purple-300/10 dark:bg-purple-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-blue-300/15 dark:bg-blue-700/15 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-3xl relative z-10">
          <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Vishwa Teja Thouti
            </span>
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            B.Tech CSE Student & Machine Learning Enthusiast passionate about building innovative solutions with AI and modern technologies.
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium hover:shadow-lg transform hover:scale-105 transition duration-300 flex items-center"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-md border-2 border-gray-300 dark:border-gray-600 font-medium hover:border-sky-500 dark:hover:border-sky-400 transition duration-300"
            >
              View Projects
            </a>
          </div>
          
          {/* Animated arrow indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
            <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
