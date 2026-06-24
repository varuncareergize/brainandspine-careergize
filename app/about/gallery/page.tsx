"use client"

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Calendar, 
  MapPin, 
  X,
  Home, // Swapped ArrowLeft for Home
  ArrowUpRight,
  ChevronRight,
    ArrowLeft
} from 'lucide-react'

const eventItems = [
  { 
    id: 1, 
    category: 'Awards', 
    title: 'Excellence in Physiotherapy', 
    location: 'Christian College of Physiotherapy',
    date: '2024',
    description: 'Dr.M. Ajailal receiving the Award of Excellence for his pioneering clinical contribution to orthopedic rehabilitation.',
    src: '/images/award2.jpg'
  },
  { 
    id: 2, 
    category: 'Awards', 
    title: 'SUT Institutional Honors', 
    location: 'SUT Hospital',
    date: '2024',
    description: 'Dr.M. Ajailal receiving the Award of Excellence for his pioneering clinical contribution to orthopedic rehabilitation.',
    src: '/images/award1.jpg'
  },
  { 
    id: 3, 
    category: 'Conferences', 
    title: 'International Medical Symposium', 
    location: 'Constitution Club Of India',
    date: 'Sep 2025',
    description: 'Engaging with global experts on advanced orthopedic biomechanics and surgical recovery.',
    src: '/images/conference1.jpg'
  },
  { 
    id: 4, 
    category: 'Conferences', 
    title: 'Clinical Networking Forum', 
    location: 'Constitution Club Of India',
    date: 'Sep 2025',
    description: 'Collaboration on evidence-based practices in modern physical therapy techniques.',
    src: '/images/conference2.jpg'
  },
  { 
    id: 5, 
    category: 'Conferences', 
    title: 'Regional Healthcare Workshop', 
    location: 'Dr. Stephen May (Author of McKenzie)',
    date: 'July 2024',
    description: 'Participation in specialized training for neural mobilization and chronic pain management.',
    src: '/images/conference3.jpg'
  },
  { 
    id: 6, 
    category: 'Conferences', 
    title: 'Scientific Discussion Meet', 
    location: 'International Physiotherapy Conference',
    date: 'Aug 2022',
    description: 'Deep dive into musculoskeletal recovery phases and cellular healing integration.',
    src: '/images/conference4.jpg'
  }
];

export default function AdvancedGallery() {
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<typeof eventItems[0] | null>(null);

  const filteredEvents = useMemo(() => 
    filter === 'All' ? eventItems : eventItems.filter(item => item.category === filter),
  [filter]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 selection:bg-[#F58220]/30 pb-20">
      



      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F58220]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8 italic">
            Professional <br />
            <span className="text-[#F58220]">Portfolio.</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0 border-l-0 lg:border-l-2 border-[#F58220]/30 lg:pl-6">
            Documenting a legacy of medical excellence, from international research contributions to local healthcare leadership.
          </p>
        </div>
      </section>

      {/* --- STICKY FILTER BAR --- */}
      <div className="sticky top-24 z-50 flex justify-center px-6 mb-12">
        <div className="p-1.5 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl flex gap-1 shadow-2xl">
          {['All', 'Conferences', 'Awards'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 md:px-8 py-2 md:py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                ? 'bg-[#F58220] text-white shadow-lg shadow-[#F58220]/20' 
                : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- GALLERY GRID --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="group relative bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#F58220]/50 transition-all duration-500 cursor-zoom-in"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
                <Image 
                  src={event.src} 
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-white border border-white/10">
                        {event.category}
                    </span>
                </div>

                <div className="hidden lg:block absolute inset-x-4 bottom-4 p-5 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-white text-sm leading-tight">{event.title}</h3>
                        <ArrowUpRight size={14} className="text-[#F58220]" />
                    </div>
                    <p className="text-slate-400 text-[10px] line-clamp-2 leading-relaxed">{event.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-slate-500 text-[9px] font-black uppercase tracking-widest mb-3">
                  <div className="flex items-center gap-1.5"><Calendar size={12} className="text-[#F58220]" /> {event.date}</div>
                  <div className="flex items-center gap-1.5"><MapPin size={12} className="text-[#F58220]" /> {event.location}</div>
                </div>
                <div className="lg:hidden">
                  <h3 className="text-white font-bold text-lg mb-2 leading-tight">{event.title}</h3>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed font-medium">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedEvent(null)}
        >
          <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/40 hover:text-white transition-colors z-[110]">
            <X size={32} />
          </button>
          
          <div 
            className="max-w-6xl w-full max-h-[90vh] bg-slate-900 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-auto min-h-[300px] lg:h-full">
                <Image src={selectedEvent.src} alt={selectedEvent.title} fill className="object-cover" priority />
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#F58220] mb-6 text-xs font-black uppercase tracking-widest">
                    <ChevronRight size={14} />
                    {selectedEvent.category}
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase italic">{selectedEvent.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 border-y border-white/5 py-6 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                   <div className="flex items-center gap-3"><Calendar size={16} className="text-[#F58220]"/> {selectedEvent.date}</div>
                   <div className="flex items-center gap-3"><MapPin size={16} className="text-[#F58220]"/> {selectedEvent.location}</div>
                </div>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed italic border-l-2 border-[#F58220] pl-6 mb-8">
                    {selectedEvent.description || "Archived clinical record documenting professional advancement and healthcare excellence."}
                </p>
                
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest self-start transition-all border border-white/10"
                >
                  Close Record
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}