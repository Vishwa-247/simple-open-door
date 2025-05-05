
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (sectionRef.current && headingRef.current && formRef.current && infoRef.current) {
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
      
      // Animate form and info card
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      )
      
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      )
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to an API endpoint
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
          <span className="block h-1 w-24 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-2"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="Subject of your message" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message..." rows={5} required />
              </div>
              
              <Button type="submit" className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div ref={infoRef}>
            <Card className="h-full shadow-lg">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-sky-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:vishwa.teja@example.com" className="text-sky-600 dark:text-sky-400 hover:underline">vishwa.teja@example.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-sky-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+911234567890" className="text-sky-600 dark:text-sky-400 hover:underline">+91 123 456 7890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-sky-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <p className="font-medium mb-3">Follow Me</p>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400 rounded-full flex items-center justify-center hover:bg-sky-200 dark:hover:bg-sky-800 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="h-10 w-10 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400 rounded-full flex items-center justify-center hover:bg-sky-200 dark:hover:bg-sky-800 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
