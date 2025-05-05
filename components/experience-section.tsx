
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Briefcase, Calendar } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "TechFusion Labs",
    duration: "Jun 2023 - Aug 2023",
    description: "Worked on developing machine learning models for predicting customer behavior. Implemented data preprocessing pipelines and trained models using TensorFlow and scikit-learn."
  },
  {
    title: "Research Assistant",
    company: "University Research Lab",
    duration: "Jan 2023 - May 2023",
    description: "Assisted in research projects focused on natural language processing. Collected and annotated datasets, implemented baseline models, and contributed to research papers."
  },
  {
    title: "Software Development Intern",
    company: "InnovateTech Solutions",
    duration: "May 2022 - Jul 2022",
    description: "Developed web applications using React.js and Node.js. Worked in an agile team environment and participated in code reviews and sprint planning sessions."
  }
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const experienceRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
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
      
      // Animate experience cards with staggered effect
      experienceRefs.current.forEach((experience, index) => {
        if (experience) {
          gsap.fromTo(
            experience,
            { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: experience,
                start: "top bottom-=50",
                toggleActions: "play none none none"
              }
            }
          )
        }
      })
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Work Experience
          </span>
          <span className="block h-1 w-24 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-2"></span>
        </h2>
        
        <div className="relative border-l-2 border-sky-500 ml-6 md:ml-[50%] pl-6 md:pl-0">
          {experiences.map((experience, index) => (
            <div 
              key={experience.title}
              ref={el => {
                experienceRefs.current[index] = el;
              }}
              className={`mb-10 ${
                index % 2 === 0 ? 'md:mr-[calc(50%+1.5rem)] md:ml-0' : 'md:ml-[calc(50%+1.5rem)] md:mr-0'
              }`}
            >
              <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[0.5rem] md:left-[calc(50%-0.5rem)] mt-1.5"></div>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-sky-500">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-sky-500" />
                    {experience.title}
                  </h3>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-sky-500" />
                    {experience.duration}
                  </span>
                </div>
                
                <p className="text-lg font-medium mb-2 text-sky-700 dark:text-sky-300">{experience.company}</p>
                <p className="text-muted-foreground">{experience.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
