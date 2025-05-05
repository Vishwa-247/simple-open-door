
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent } from '@/components/ui/card'
import { User, BookOpen, Rocket, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    if (sectionRef.current && headingRef.current) {
      // Animate heading with glow effect
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
      
      // Animate cards with staggered effect and hover animations
      cardsRef.forEach((card, index) => {
        if (card) {
          // Initial animation
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=50",
                toggleActions: "play none none none"
              }
            }
          );
          
          // Setup hover animations
          const icon = card.querySelector('.icon-container');
          const hoverTl = gsap.timeline({ paused: true });
          
          hoverTl
            .to(icon, { 
              y: -10, 
              rotateY: "360deg", 
              duration: 0.5, 
              ease: "back.out(1.7)" 
            })
            .to(card, { 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", 
              y: -5, 
              duration: 0.4 
            }, 0);
          
          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());
        }
      });
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
          <div
            ref={el => {
              cardsRef[0] = el;
            }}
            className="about-card"
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="icon-container bg-sky-100 dark:bg-sky-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Background</h3>
                <p className="text-muted-foreground flex-grow">
                  I'm a B.Tech CSE student with a passion for machine learning, data science, and building innovative solutions. 
                  I enjoy working on challenging projects that combine cutting-edge technology with real-world applications.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div
            ref={el => {
              cardsRef[1] = el;
            }}
            className="about-card"
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="icon-container bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interests</h3>
                <p className="text-muted-foreground flex-grow">
                  My primary interests lie in artificial intelligence, particularly in the areas of natural language processing, 
                  computer vision, and building intelligent systems that can learn and adapt from data.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div
            ref={el => {
              cardsRef[2] = el;
            }}
            className="about-card"
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="icon-container bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="text-muted-foreground flex-grow">
                  Currently pursuing B.Tech in Computer Science and Engineering with a focus on AI and machine learning. 
                  I'm constantly expanding my knowledge through online courses, research papers, and hands-on projects.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div
            ref={el => {
              cardsRef[3] = el;
            }}
            className="about-card"
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="icon-container bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Goals</h3>
                <p className="text-muted-foreground flex-grow">
                  My aim is to contribute to the advancement of AI technology and develop solutions that can make a positive 
                  impact on society. I'm particularly interested in applying ML to solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
