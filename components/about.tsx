'use client'

import React from 'react'
import { Check, Award, Activity, Heart } from 'lucide-react'

export function About() {
  const highlights = [
    'Shoulder Joint Specialists',
    'Post-Surgical Protocols',
    'Rotator Cuff Recovery',
    'Non-Invasive Pain Relief',
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/30 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left - Specialized Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#F58220] text-sm font-bold uppercase tracking-widest">
              Trivandrum's Best Shoulder Rehab Center
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Dedicated to <span className="text-[#F58220]">Shoulder</span> <br /> 
                Health & Restoration
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "We don't just treat pain; we restore the freedom of movement."
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                At Brain And Spine Physio Clinic, we’ve pioneered a specialized approach to shoulder rehabilitation in Kumarapuram. Our protocols are designed specifically for complex shoulder conditions, moving beyond general physiotherapy to deliver targeted, joint-specific recovery.
              </p>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                Whether you are a sportsperson recovering from a labral tear or struggling with the daily restrictions of a frozen shoulder, our evidence-based clinical path ensures you regain full range of motion without unnecessary surgery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F58220] transition-colors duration-300">
                    <Check size={18} className="text-[#F58220] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-800 dark:text-slate-200 font-bold tracking-tight">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Modern Visual Stats Section */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative glass-morphism rounded-[2.5rem] p-10 border border-white/50 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 shadow-2xl">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center">
                      <Activity className="text-[#F58220]" size={32} />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white italic">Clinical Success</h3>
                      <p className="text-slate-500 text-sm">Shoulder specific outcomes</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-orange-50 dark:border-slate-700">
                    <div className="text-3xl font-black text-[#F58220]">1200+</div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Shoulders Healed</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-orange-50 dark:border-slate-700">
                    <div className="text-3xl font-black text-[#F58220]">0%</div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Surgical Rate</p>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-[#1E293B] text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Heart size={80} fill="white" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-orange-400">99.2%</div>
                    <p className="text-sm font-medium text-slate-300 mt-2 uppercase tracking-widest">Recovery Rate</p>
                    <div className="mt-4 h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                       <div className="h-full bg-orange-500 w-[99%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}