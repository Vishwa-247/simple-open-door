
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (sectionRef.current && headingRef.current) {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      )
      
      // Animate cards
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.about-card'),
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      )
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </span>
          <span className="block h-1 w-24 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-2"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="about-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Background</h3>
              <p className="text-muted-foreground">
                I'm a B.Tech CSE student with a passion for machine learning, data science, and building innovative solutions. 
                I enjoy working on challenging projects that combine cutting-edge technology with real-world applications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="about-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <p className="text-muted-foreground">
                My primary interests lie in artificial intelligence, particularly in the areas of natural language processing, 
                computer vision, and building intelligent systems that can learn and adapt from data.
              </p>
            </CardContent>
          </Card>
          
          <Card className="about-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-muted-foreground">
                Currently pursuing B.Tech in Computer Science and Engineering with a focus on AI and machine learning. 
                I'm constantly expanding my knowledge through online courses, research papers, and hands-on projects.
              </p>
            </CardContent>
          </Card>
          
          <Card className="about-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Goals</h3>
              <p className="text-muted-foreground">
                My aim is to contribute to the advancement of AI technology and develop solutions that can make a positive 
                impact on society. I'm particularly interested in applying ML to solve real-world problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
