
'use client'

import React from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export default function App() {
  return (
    <div className="min-h-screen">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <main className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4">This portfolio is updated to the latest Lovable version.</p>
        </main>
        <Toaster />
      </ThemeProvider>
    </div>
  )
}
