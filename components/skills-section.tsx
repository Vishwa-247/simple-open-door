
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
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (skillsRef.current && headingRef.current && sectionRef.current) {
      // Create a colorful background animation
      gsap.to(sectionRef.current, {
        backgroundPosition: '100% 100%',
        duration: 20,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
      
      // Animate the heading
      const headingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      });
      
      headingTimeline
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(
          headingRef.current.querySelector('span.block'),
          { width: 0 },
          { width: '6rem', duration: 0.6 },
          "-=0.4"
        );

      // Animate the skill cards with a staggered effect and 3D rotation
      const cards = skillsRef.current.children;
      
      gsap.fromTo(
        cards,
        { 
          opacity: 0, 
          y: 50,
          rotateX: 15,
          rotateY: 5
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-16 bg-secondary/20 bg-gradient-to-r from-sky-50/50 to-indigo-50/50 dark:from-gray-900 dark:to-gray-800 bg-[length:200%_200%]"
    >
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            My Skills
          </span>
          <span className="block h-1 w-24 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-2"></span>
        </h2>
        
        <div 
          ref={skillsRef}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 transform-style-preserve-3d"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
