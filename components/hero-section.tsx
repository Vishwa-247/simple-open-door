
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    
    tl.fromTo(headingRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    )
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-sky-300/10 dark:bg-sky-700/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-300/10 dark:bg-indigo-700/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 ref={headingRef} className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Vishwa Teja Thouti
            </span>
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            B.Tech CSE Student & Machine Learning Enthusiast
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-md border-2 border-gray-300 dark:border-gray-600 font-medium hover:border-sky-500 dark:hover:border-sky-400 transition duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
