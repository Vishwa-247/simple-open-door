
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SkillCard from './skill-card'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { title: 'Machine Learning', icon: 'brain' },
  { title: 'Python', icon: 'code' },
  { title: 'Data Analysis', icon: 'bar-chart' },
  { title: 'Web Development', icon: 'code' },
  { title: 'Cloud Computing', icon: 'cloud' },
  { title: 'NLP', icon: 'message-square' },
  { title: 'Database', icon: 'database' },
  { title: 'Version Control', icon: 'git-branch' }
]

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (skillsRef.current && headingRef.current) {
      // Animate the heading
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

      // Animate the skill cards
      gsap.fromTo(
        skillsRef.current.children,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      )
    }
  }, [])

  return (
    <section id="skills" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            My Skills
          </span>
          <span className="block h-1 w-24 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-2"></span>
        </h2>
        
        <div 
          ref={skillsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
