'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    text: 'Exceptional care and professional approach. I recovered much faster than expected. The therapists are truly dedicated to their work.',
    rating: 5,
  },
  {
    name: 'Meera Iyer',
    text: 'Best physiotherapy clinic in Kumarapuram. The personalized treatment plan made all the difference in my recovery journey.',
    rating: 5,
  },
  {
    name: 'Arun Menon',
    text: 'Professional, caring, and results-driven. Highly recommend for anyone seeking specialized physiotherapy treatment.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Patient Testimonials
          </h2>
          {/* Brand Accent Line */}
          <div className="w-16 h-1 bg-[#F58220] mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hear from our satisfied patients about their recovery journey at Brain & Spine
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="p-8 border-slate-100 dark:border-slate-800 hover:border-[#F58220]/40 bg-white dark:bg-slate-900/50 glass-morphism group transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:translate-y-[-8px] relative overflow-hidden"
            >
              {/* Subtle Background Icon */}
              <Quote className="absolute -top-2 -right-2 w-24 h-24 text-orange-500/5 rotate-12 group-hover:text-orange-500/10 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Stars using Brand Orange */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#F58220] text-[#F58220] group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F58220] to-[#FF9F43] flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-xs font-semibold text-[#F58220] uppercase tracking-wider">Verified Patient</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}