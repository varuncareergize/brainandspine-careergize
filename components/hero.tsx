'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, ArrowRight, Activity, MoveDown, ShieldCheck, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden flex items-center bg-white dark:bg-slate-950">
      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 dark:bg-orange-950/10 -skew-x-12 translate-x-20 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content: High-Conversion SEO Wordings */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] dark:bg-orange-500 text-white shadow-lg">
               
                <span className="text-xs font-bold uppercase tracking-widest">Best PhysioTherapy Clinic for Shoulder Rehab in Trivandrum</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                Your Journey to <br />
                <span className="text-[#F58220]">Pain-Free Shoulders</span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">
                Trivandrum's #1 Destination for Advanced Shoulder Care.
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
  Struggling with <span className="font-extrabold text-slate-900 dark:text-slate-100">Frozen Shoulder, Rotator Cuff Pain, or Sports Injuries?</span> 
  Visit the <span className="font-extrabold text-[#E35D25]">Best Physiotherapy Clinic in Trivandrum</span> for expert, 
  evidence-based shoulder rehabilitation. We specialize in non-surgical 
  solutions to restore your strength and mobility fast.
</p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                onClick={() => router.push('/appointments')}
                className="bg-[#F58220] hover:bg-[#E0761B] text-white shadow-xl shadow-orange-500/20 py-7 px-10 rounded-2xl text-lg font-bold transition-all hover:scale-105 flex gap-2"
              >
                Book Appointment <ArrowRight size={20} />
              </Button>
              
              <div className="flex items-center gap-3 px-4">
                <div className="w-12 h-12 rounded-full border-2 border-orange-100 flex items-center justify-center">
                  <Phone size={20} className="text-[#F58220]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Talk to a Specialist</p>
                  <p className="text-slate-900 dark:text-white font-bold">+91 9633305435</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-sm text-slate-500">
               <div className="flex text-orange-400">
                 {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
               </div>
               <p>Top-Rated by <span className="text-slate-900 dark:text-white font-bold">500+ Happy Patients</span> in Trivandrum</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-in fade-in zoom-in duration-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/30 dark:bg-orange-950/10 rounded-full blur-3xl"></div>
            
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl rotate-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800" 
                alt="Best Physiotherapy Clinic for Shoulder Rehab Trivandrum"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-6 left-6 right-6 z-20 p-5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/30 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#F58220] rounded-lg text-white">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Excellence in Physio</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Virtual appointments available.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute top-10 -left-4 z-30 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-inner">
                 <MapPin className="text-[#F58220]" size={20} />
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-400 uppercase leading-none">Best Physio Clinic in</p>
                 <p className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Kumarapuram, TVM</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}