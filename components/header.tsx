'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation' // 1. IMPORT THESE
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // 2. INITIALIZE PATHNAME
  const router = useRouter()     // 3. INITIALIZE ROUTER

  // 4. UPDATED SCROLL LOGIC
  const scrollToSection = (id: string) => {
    if (pathname === '/') {
      // If on Home page, scroll smoothly
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If on Vision/Director/Gallery page, go Home first then jump to ID
      router.push(`/#${id}`)
    }
    setIsOpen(false)
  }

  const navLinks = [
    { label: 'Vision', href: '/about/vision' },
    { label: 'Director', href: '/about/director' },
    { label: 'Gallery', href: '/about/gallery' },
  ]

  const sectionLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-choose' },
    { label: 'Therapists', id: 'therapists' },
    { label: 'Reviews', id: 'testimonials' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#F58220] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-all duration-300">
            B
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-bold text-slate-900 dark:text-white leading-tight">Brain & Spine</span>
            <span className="text-[10px] uppercase tracking-widest text-[#F58220] font-bold">Physio Clinic Since 2019</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // This makes the link turn orange if you are on that page
              className={`px-3 lg:px-4 py-2 text-sm font-bold transition-colors duration-200 relative group ${
                pathname === link.href ? 'text-[#F58220]' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-1 left-3 right-3 lg:left-4 lg:right-4 h-0.5 bg-[#F58220] transition-transform duration-300 origin-left ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-2" />

          {sectionLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3 lg:px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#F58220] transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-1 left-3 right-3 lg:left-4 lg:right-4 h-0.5 bg-[#F58220] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="flex items-center gap-4">
          <Link href="/appointments">
            <Button className="hidden sm:inline-flex bg-[#F58220] hover:bg-[#E0761B] text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 rounded-full font-bold px-6">
              Book Appointment
            </Button>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-950/30 rounded-lg transition-colors"
          >
            {isOpen ? <X size={26} className="text-[#F58220]" /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="px-6 py-8 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Clinic Info</span>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-semibold ${pathname === link.href ? 'text-[#F58220]' : 'text-slate-800 dark:text-slate-200'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Navigation</span>
              <div className="flex flex-col gap-4">
                {sectionLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-[#F58220]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link href="/appointments" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#F58220] text-white py-6 text-lg font-bold rounded-xl shadow-xl">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}