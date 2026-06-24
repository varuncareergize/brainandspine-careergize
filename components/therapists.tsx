'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Calendar, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
const therapists = [
  {
    name: 'Dr. M. AJAILAL (PT)',
    qualification: 'BPT, MPT (Cardio),CYT, CDNT',
    experience: '20 years',
    bio: 'Specialized in shoulder pain management and rehabilitation with over two decades of clinical expertise.',
    // Using the image URL you provided earlier
    image: "https://scontent.fblr2-3.fna.fbcdn.net/v/t39.30808-6/547172368_24496180043373408_8659592695864011335_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=-P_qc15nRsgQ7kNvwE8y8y_&_nc_oc=AdkUrad-b1-WMmLcn8KyizeY-PalFLpz3WeucogeamdVflN7OSR8ZOAY2GwC86v8TWk&_nc_zt=23&_nc_ht=scontent.fblr2-3.fna&_nc_gid=NMH7hRxGgaAqu93PFQz0mA&oh=00_AfuNo319kiBqZiPJRgLEVp1TtNjB1CD7kxSfTt_q9vLUTQ&oe=69A22E15"
  },
] 

export function Therapists() {
  return (
    <section id="therapists" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Expert <span className="text-[#F58220]">Therapists</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#F58220] mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Highly qualified professionals dedicated to your recovery at Brain & Spine
          </p>
        </div>

        {/* Doctor Card - Centered */}
        <div className="flex justify-center">
          {therapists.map((therapist, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden w-full max-w-2xl p-1 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl shadow-orange-500/5 group"
            >
              <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 p-6 md:p-8">
                
                {/* Image Section */}
                <div className="relative shrink-0">
                  <div className="w-48 h-56 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                    <img 
                      src={therapist.image} 
                      alt={therapist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-900 p-1.5 rounded-full shadow-lg">
                    <div className="bg-[#F58220] p-1 rounded-full text-white">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between flex-1 py-2 text-center md:text-left">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-[#F58220] transition-colors">
                        {therapist.name}
                      </h3>
                      <p className="text-[#F58220] font-bold text-sm uppercase tracking-widest mt-1">
                        {therapist.qualification}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-semibold">
                        <Calendar size={16} className="text-[#F58220]" />
                        {therapist.experience} Experience
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                      "{therapist.bio}"
                    </p>
                  </div>
                <div className="pt-6">
  <Link href="/appointments">
    <button className="w-full md:w-auto px-8 py-4 rounded-xl bg-[#1E293B] hover:bg-[#F58220] text-white font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-slate-900/10 active:scale-95">
      Consult Now
    </button>
  </Link>
</div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}