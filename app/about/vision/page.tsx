"use client"

import React from 'react'
import { 
  Target, 
  Activity, 
  ShieldCheck, 
  ChevronRight,
  Heart,
  Users,
  Award,
  Sparkles
} from 'lucide-react'
import { cn } from "@/lib/utils"

export default function VisionMissionPage() {
    const doctorImageUrl = "https://scontent.fblr2-3.fna.fbcdn.net/v/t39.30808-6/547172368_24496180043373408_8659592695864011335_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=-P_qc15nRsgQ7kNvwE8y8y_&_nc_oc=AdkUrad-b1-WMmLcn8KyizeY-PalFLpz3WeucogeamdVflN7OSR8ZOAY2GwC86v8TWk&_nc_zt=23&_nc_ht=scontent.fblr2-3.fna&_nc_gid=NMH7hRxGgaAqu93PFQz0mA&oh=00_AfuNo319kiBqZiPJRgLEVp1TtNjB1CD7kxSfTt_q9vLUTQ&oe=69A22E15"

  return (

    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-[#E35D25] overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/50 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-50/50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
    Setting the <span className="text-[#E35D25] relative">Vision
      <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9C118.957 4.47226 238.497 2.49736 355 9" stroke="#E35D25" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    </span> in Global Physiotherapy.
  </h1>
  
  {/* UPDATED TEXT BELOW */}
  <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
    To be the <span className="text-slate-900 font-bold">trusted leader</span> in Physiotherapy care, 
    empowering <span className="text-[#E35D25] font-bold">healthier, stronger communities.</span>
  </p>
</div>
      </section>

      {/* --- 2. MISSION SECTION (With the requested Image Badge) --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side */}
          <div className="relative group">
            {/* The Main Image Wrapper */}
           <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="/images/clinic.jpg"  // Correct path for files in the /public folder
              alt="Clinic Treatment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
            {/* FLOATING IMAGE BADGE (As requested) */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-3 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-50 flex flex-col items-center min-w-[140px] animate-bounce-slow">
               <div className="w-20 h-20 rounded-2xl overflow-hidden mb-3 ring-4 ring-orange-50">
                  <img 
                    src={doctorImageUrl} 
                    
                    alt="Clinician"
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="text-center pb-2">
                 <div className="flex items-center justify-center gap-1 mb-1">
                    <Heart className="text-[#E35D25] fill-[#E35D25]" size={12} />
                    <span className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">Patient Centric</span>
                 </div>
                 <p className="text-[9px] font-bold text-slate-400 uppercase">Expert Consultation</p>
               </div>
            </div>

            {/* Background Blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#E35D25]/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Side */}
          <div className="space-y-10">
            <header className="space-y-4">
               <div className="flex items-center gap-3">
                 <div className="h-px w-10 bg-[#E35D25]" />
                 <span className="text-[#E35D25] text-xs font-black uppercase tracking-[0.4em]">Our Mission</span>
               </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15]">
                Empowering <span className="text-orange-500">Movement</span>,<br /> Restoring Life.
              </h3>
            </header>
            
            <p className="text-slate-600 leading-relaxed text-xl font-medium italic border-l-4 border-orange-200 pl-6">
              "To deliver expert, evidence-based Physiotherapy that restores movement, relieves pain and enhances quality of life through individualized attention."
            </p>

            <div className="grid grid-cols-1 gap-6">
              <MissionCheck text="Restoration of pain-free physical function" />
              <MissionCheck text="Data-driven clinical rehabilitation protocols" />
              <MissionCheck text="Community wellness and strength building" />
            </div>

            <button className="group inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#E35D25] transition-all shadow-2xl hover:shadow-orange-300">
              Book Your Process <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- 3. CORE VALUES --- */}
      <section className="py-32 bg-slate-900 text-white px-6 rounded-[4rem] mx-4 my-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Why Choose Us?</h2>
             <p className="text-slate-400 font-medium">Built on pillars of trust, science, and empathy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard 
              icon={<Activity size={32} />}
              title="Evidence Based"
              desc="Every treatment is backed by the latest clinical research in physiotherapy and biomechanics."
            />
            <ValueCard 
              icon={<Users size={32} />}
              title="Community First"
              desc="Building stronger health foundations for our local communities through education and care."
            />
          
          </div>
        </div>
      </section>
    </div>
  )
}

function MissionCheck({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-[#E35D25] transition-colors">
        <ShieldCheck size={18} className="text-[#E35D25] group-hover:text-white" />
      </div>
      <p className="text-md font-bold text-slate-700">{text}</p>
    </div>
  )
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="relative p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#E35D25]/10 blur-[50px] -z-10 group-hover:bg-[#E35D25]/20" />
      <div className="w-16 h-16 bg-[#E35D25] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">{title}</h4>
      <p className="text-slate-400 text-md leading-relaxed font-medium">{desc}</p>
    </div>
  )
}