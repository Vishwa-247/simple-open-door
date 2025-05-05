
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "MediConnect",
    description: "A telemedicine platform connecting patients with healthcare providers through secure video consultations and appointment scheduling.",
    image: "/images/mediconnect.png",
    tags: ["React", "Node.js", "MongoDB", "WebRTC"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "SymptroCare",
    description: "An AI-powered symptom checker that helps users identify potential health issues and provides preliminary medical advice.",
    image: "/images/symptocare.png",
    tags: ["Python", "TensorFlow", "React", "Flask"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "StudyMate",
    description: "An intelligent study planner that helps students organize their learning materials and optimize study schedules.",
    image: "/images/studymate.png",
    tags: ["React", "Firebase", "TypeScript"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "NIDS",
    description: "A network intrusion detection system that uses machine learning to identify and alert about potential cyber threats.",
    image: "/images/nids.png",
    tags: ["Python", "Scikit-learn", "Django"],
    liveLink: "#",
    githubLink: "#"
  }
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const projectRefs = useRef<Array<HTMLDivElement | null>>([])

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
      
      // Animate project cards
      projectRefs.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(
            project,
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: project,
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
    <section id="projects" ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            My Projects
          </span>
          <span className="block h-1 w-24 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-2"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              ref={el => {
                projectRefs.current[index] = el;
              }}
              className="transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <a 
                      href={project.liveLink} 
                      className="flex items-center text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 font-medium"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="flex items-center text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 font-medium"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Source Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
