"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import SkillCard from "@/components/skill-card"
import ContactForm from "@/components/contact-form"
import EducationCard from "@/components/education-card"
import ExperienceCard from "@/components/experience-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Animate skills when they come into view
    if (skillsRef.current) {
      const skillCards = skillsRef.current.querySelectorAll(".skill-card")

      gsap.fromTo(
        skillCards,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-400 to-sky-600 dark:from-sky-700 dark:to-sky-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">VISHWA TEJA THOUTI</h1>
            <h2 className="text-xl md:text-2xl mb-6 opacity-90">B.Tech CSE Student | ML Enthusiast | Web Developer</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <Link
                href="https://github.com/Vishwa-247"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/vishwa-thouti-8b115525a"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:vishwathouti247@gmail.com"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              >
                <Mail className="h-6 w-6" />
              </Link>
              <Link href="tel:+918309680569" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
                <Phone className="h-6 w-6" />
              </Link>
            </div>
            <Link
              href="#contact"
              className="inline-block bg-white text-sky-600 dark:bg-sky-200 dark:text-sky-800 font-medium py-3 px-8 rounded-full hover:bg-sky-50 dark:hover:bg-sky-300 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              As a third-year B.Tech student at Woxsen University, I am keen to apply my technical skills and knowledge
              to practical, hands-on projects. I am driven by a passion for gaining real-world experience, refining my
              expertise, and making meaningful contributions as an intern within a collaborative and innovative team
              environment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
              A proactive and resourceful professional with a knack for simplifying complex tasks and enhancing
              efficiency. Skilled in problem-solving, creative thinking, and adapting to dynamic environments while
              managing multiple priorities. Passionate about continuous learning, collaboration, and driving
              organizational success through strategic decision- making and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Skills</h2>
          <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard title="Python" icon="code" />
            <SkillCard title="JavaScript" icon="code" />
            <SkillCard title="Java (OOP)" icon="code" />
            <SkillCard title="PHP" icon="code" />
            <SkillCard title="HTML" icon="code" />
            <SkillCard title="CSS" icon="code" />
            <SkillCard title="React.js" icon="code" />
            <SkillCard title="Flask" icon="server" />
            <SkillCard title="MySQL" icon="database" />
            <SkillCard title="MongoDB" icon="database" />
            <SkillCard title="Machine Learning" icon="brain" />
            <SkillCard title="Data Analysis" icon="bar-chart" />
            <SkillCard title="NLP" icon="message-square" />
            <SkillCard title="Cloud Computing" icon="cloud" />
            <SkillCard title="Git" icon="git-branch" />
            <SkillCard title="Microsoft Office" icon="file" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="SymptoCare - Disease Prediction App"
              description="A machine learning application that predicts diseases based on symptoms input by users."
              points={[
                "Developed models leveraging algorithms such as logistic regression, decision trees, and ensemble methods to improve accuracy.",
                "Engineered a user-friendly interface for health monitoring, enabling seamless interaction for non-technical users.",
                "Conducted feature engineering and data preprocessing to optimize predictive performance.",
              ]}
              image="/images/symptocare.png"
              technologies={["Python", "Machine Learning", "Flask", "HTML/CSS"]}
            />
            <ProjectCard
              title="Network Intrusion Detection System (NIDS)"
              description="A security system that monitors network traffic for suspicious activity and policy violations."
              points={[
                "Applied techniques like anomaly detection and classification algorithms to identify malicious activities.",
                "Processed network packets and extracted relevant features for threat detection.",
                "Implemented real-time monitoring to mitigate risks and enhance network security.",
                "Evaluated model performance using metrics like precision, recall, and F1-score to ensure robustness.",
              ]}
              image="/images/nids.png"
              technologies={["Python", "Machine Learning", "Network Security"]}
            />
            <ProjectCard
              title="MediConnect"
              description="A comprehensive healthcare platform with multiple disease prediction models and an interactive chatbot."
              points={[
                "Built three additional predictive models using machine learning algorithms tailored to specific diseases.",
                "Designed and deployed a chatbot powered by natural language processing (NLP) to provide interactive responses to disease-related queries.",
                "Integrated all models into a unified platform for comprehensive healthcare monitoring.",
                "Focused on usability and scalability to support broader healthcare applications.",
              ]}
              image="/images/mediconnect.png"
              technologies={["Python", "NLP", "Machine Learning", "Web Development"]}
            />
            <ProjectCard
              title="AI-Based Learning Management System (LMS)"
              description="An intelligent LMS that personalizes learning experiences using emotional intelligence analysis."
              points={[
                "Developed an AI-driven Learning Management System that personalizes learning experiences using emotional intelligence analysis.",
                "Integrated sentiment analysis and facial emotion recognition to assess user engagement during mock interviews and learning sessions.",
                "Enhanced skill development by providing real-time feedback on communication, confidence, and eye contact, improving learning outcomes.",
              ]}
              image="/images/studymate.png"
              technologies={["Python", "AI", "Sentiment Analysis", "Computer Vision"]}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <EducationCard
              institution="Woxsen University"
              degree="Bachelor of Technology in Computer Science Engineering"
              duration="2022 - 2026"
              location="Hyderabad"
              grade="CGPA: 3.3/4"
            />
            <EducationCard
              institution="SR Edu Centre"
              degree="Senior Secondary Education"
              duration="2020 - 2022"
              location="Warangal"
              grade="Percentage: 96%"
            />
            <EducationCard
              institution="SR Prime High School"
              degree="Schooling"
              duration="2009 - 2018"
              location="Warangal"
              grade="Percentage: 88%"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <ExperienceCard
              company="Prdigy Infotech"
              position="Web Development Intern"
              duration="2023"
              description="Completed a virtual internship in web development, working on various projects to enhance my front-end and back-end development skills. Gained practical experience in building responsive and user-friendly web applications."
            />
            <ExperienceCard
              company="Codsoft"
              position="Web Development Intern"
              duration="2023"
              description="Participated in a virtual internship program focused on web development. Worked on multiple projects that improved my skills in HTML, CSS, JavaScript, and modern web frameworks. Collaborated with team members to deliver high-quality web solutions."
            />
            <ExperienceCard
              company="NIT Warangal"
              position="Intern – Cloud Computing"
              duration="June 2023 - July 2023"
              description="Developed a Cloud Workload Turning Point Prediction model using Deep Learning to optimize resource allocation. Gained hands-on experience in Cloud Computing and AI-driven workload forecasting under the guidance of a professor."
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Certifications
          </h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100 p-1 rounded mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Python Programming Essentials</span> – Coursera (October 2023)
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100 p-1 rounded mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Data Visualization with Python</span> – Coursera (June 2023)
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100 p-1 rounded mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Introduction to C# Programming and Unity</span> – Coursera (June 2023)
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100 p-1 rounded mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Data Analysis with Python</span> – Coursera (May 2023)
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100 p-1 rounded mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Introduction to Artificial Intelligence</span> – Coursera (March 2023)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Get In Touch
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Phone className="h-5 w-5 text-sky-600 dark:text-sky-400 mr-3" />
                    <span>+91 8309680569</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Mail className="h-5 w-5 text-sky-600 dark:text-sky-400 mr-3" />
                    <span>vishwathouti247@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Linkedin className="h-5 w-5 text-sky-600 dark:text-sky-400 mr-3" />
                    <a
                      href="https://linkedin.com/in/vishwa-thouti-8b115525a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      linkedin.com/in/vishwa-thouti-8b115525a
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Github className="h-5 w-5 text-sky-600 dark:text-sky-400 mr-3" />
                    <a
                      href="https://github.com/Vishwa-247"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      github.com/Vishwa-247
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Vishwa Teja Thouti</h3>
              <p className="text-gray-400 mt-2">B.Tech CSE Student | ML Enthusiast | Web Developer</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Vishwa-247"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/vishwa-thouti-8b115525a"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:vishwathouti247@gmail.com"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Vishwa Teja Thouti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
