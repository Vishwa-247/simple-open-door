
'use client'

import React from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ThemeToggle } from '@/components/theme-toggle'

export default function App() {
  return (
    <div className="min-h-screen">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <main className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Vishwa Teja Thouti</h1>
            <ThemeToggle />
          </div>
          
          <div className="space-y-8">
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Welcome to My Portfolio</h2>
              <p className="text-muted-foreground">
                I'm a B.Tech CSE student and ML enthusiast passionate about creating innovative solutions.
              </p>
            </section>

            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">About This Site</h2>
              <p className="text-muted-foreground">
                This portfolio showcases my projects, skills, and experiences. Feel free to explore!
              </p>
            </section>
          </div>
        </main>
        <Toaster />
      </ThemeProvider>
    </div>
  )
}
