"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Added for better performance
import { 
  Award, 
  Stethoscope, 
  ShieldCheck, 
  GraduationCap, 
  Mail, 
  MapPin,
  Users,
  Briefcase,
  History,
  HeartHandshake,
  ChevronRight
} from 'lucide-react'

export default function DirectorPage() {
  // Update: Points to public/ajaylal.jpg
  const doctorImagePath = "/images/ajaylal.jpg"

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F58220]/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Side */}
            <div className="w-full lg:w-2/5">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#F58220]/20 rounded-[3rem] blur-2xl group-hover:bg-[#F58220]/30 transition-all duration-500" />
                <div className="relative aspect-[4/5] rounded-[2.5rem] bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-700 overflow-hidden shadow-2xl">
                  {/* Updated to Next.js Image Component */}
                  <Image 
                    src={doctorImagePath} 
                    alt="Dr. M. AJAILAL (PT)"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#1E293B] text-white p-6 rounded-3xl shadow-xl border-4 border-white dark:border-slate-800">
                  <p className="text-3xl font-black text-[#F58220]">15+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Years of Clinical<br/>Excellence</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-3/5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F58220]/10 border border-[#F58220]/20 text-[#F58220] text-xs font-black uppercase tracking-widest">
                Founder & Clinical Director
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-[#1E293B] dark:text-white tracking-tighter leading-tight">
                  Dr. M. AJAILAL <span className="text-[#F58220]">(PT)</span>
                </h1>
                <p className="text-xl font-bold text-slate-500 dark:text-slate-400 italic">
                  MPT Neurological Sciences | Certified Dry Needling Therapist
                </p>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                A visionary leader in physiotherapy, Dr. M. Ajailal has dedicated over 15 years to advancing neurological rehabilitation. As the founder of <strong>Brain & Spine</strong>, he combines academic rigor with compassionate care to restore mobility and hope.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/appointments">
                  <button className="bg-[#1E293B] hover:bg-[#F58220] text-white rounded-2xl px-10 py-4 font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2 group">
                    Book a Consultation 
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <div className="flex gap-2">
                   <a href="mailto:ajayphysio06@gmail.com" className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-[#F58220] hover:text-white dark:text-white transition-all shadow-sm">
                      <Mail size={20} />
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE DETAILS SECTION (Unchanged) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Column 1: ACADEMICS */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-50 dark:bg-orange-500/10 rounded-2xl text-[#F58220]">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter dark:text-white">Academic Journey</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-slate-100 dark:border-slate-800 pl-6 space-y-2 relative">
                <div className="absolute w-3 h-3 bg-[#F58220] rounded-full -left-[8.5px] top-1" />
                <h4 className="font-black text-slate-800 dark:text-white uppercase text-xs tracking-widest">Masters Degree</h4>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400">Masters in Physiotherapy (MPT)</p>
                <p className="text-xs text-slate-400">City College, Mangalore</p>
              </div>
              <div className="border-l-4 border-slate-100 dark:border-slate-800 pl-6 space-y-2 relative">
                <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full -left-[8.5px] top-1" />
                <h4 className="font-black text-slate-800 dark:text-white uppercase text-xs tracking-widest">Bachelors Degree</h4>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400">Bachelor of Physiotherapy (BPT)</p>
                <p className="text-xs text-slate-400">Dr. MV Shetty College, Mangalore</p>
              </div>
            </div>
          </div>

          {/* Column 2: LEADERSHIP ROLES */}
          <div className="space-y-8 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#1E293B] rounded-2xl text-white">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter dark:text-white">Professional Body</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <Users className="text-[#F58220] shrink-0" size={20} />
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">District Convenor, IAP Trivandrum</p>
              </li>
              <li className="flex gap-4">
                <Award className="text-[#F58220] shrink-0" size={20} />
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">National & State Conference Presenter</p>
              </li>
            </ul>
          </div>

          {/* Column 3: SOCIAL IMPACT */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-600">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter dark:text-white">Social Impact</h3>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Chairman</p>
                <p className="text-sm font-bold dark:text-white">Sradha Educational and Charitable Trust</p>
              </div>
              <div className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Director</p>
                <p className="text-sm font-bold dark:text-white">Kumarapuram Social Welfare Charitable Society</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Shortened for brevity) --- */}
      <footer className="py-12 bg-slate-900 text-center">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">
          Brain & Spine Rehabilitation Centre © 2026
        </p>
      </footer>
    </div>
  )
}