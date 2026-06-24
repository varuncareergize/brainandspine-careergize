'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Clinic Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F58220] to-[#FF9F43] flex items-center justify-center font-bold text-2xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">Brain & Spine</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 mt-1 font-semibold">Physio Clinic</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Since 2019, providing premium physiotherapy specializing in neuro and spine rehabilitation with evidence-based personalized care in Trivandrum.
            </p>
            {/* Social Icons with Orange Hover */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600' },
                { icon: Instagram, color: 'hover:bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600' },
                { icon: Linkedin, color: 'hover:bg-blue-700' },
                { icon: Twitter, color: 'hover:bg-sky-500' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold border-b border-orange-500/30 pb-2 w-fit">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                'Neuro Physiotherapy',
                'Spine Rehabilitation',
                'Stroke Recovery',
                'Post-Surgical Rehab',
                'Chronic Pain Management',
              ].map((service, idx) => (
                <li key={idx}>
                  <button className="hover:text-orange-400 transition-colors duration-200 group inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:w-3 transition-all"></span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold border-b border-orange-500/30 pb-2 w-fit">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Our Therapists', id: 'therapists' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Find Us', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="hover:text-orange-400 transition-colors duration-200 group inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:w-3 transition-all"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold border-b border-orange-500/30 pb-2 w-fit">Contact Info</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white">Location</p>
                <p>Kumarapuram, Thiruvananthapuram,</p>
                <p>Kerala 695011</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white">Direct Line</p>
                <a href="tel:+919633305435" className="text-orange-400 font-bold text-base hover:underline">
                  +91 9633305435
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white">Operating Hours</p>
                <p>Mon-Sat: 09:00 AM - 07:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-500 text-xs tracking-wide uppercase font-medium">
          <p className="text-center sm:text-left">
            © {currentYear} Brain & Spine Physio Clinic. Since 2019.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400">
              Made with <Heart size={14} className="text-[#F58220] fill-[#F58220]" /> in Kerala
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}