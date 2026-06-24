'use client'

import React from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ShieldAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      content: 'Brain and Spine Physio Clinic, Thiruvananthapuram, Kerala 695011',
      link: 'https://maps.app.goo.gl/NdB6mCprFhezCnN2A',
    },
    {
      icon: Phone,
      title: 'Direct Call',
      content: '+91 96333 05435',
      link: 'tel:+919633305435',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'ajayphysio06@gmail.com',
      link: 'mailto:ajayphysio06@gmail.com',
    },
    {
      icon: Clock,
      title: 'Clinic Hours',
      content: 'Mon-Sat: 9 AM - 7 PM (Closed Sunday)',
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#F58220] text-sm font-bold uppercase tracking-widest border border-orange-200">
            Contact Specialist
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Find Us in <span className="text-[#F58220]">Kumarapuram</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The best physiotherapy care for shoulder rehabilitation in Trivandrum. Reach out for directions or general inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            const isLink = 'link' in info
            const Component = isLink ? 'a' : 'div'

            return (
              <Component
                key={idx}
                href={isLink ? (info as any).link : undefined}
                target={isLink ? '_blank' : undefined}
                className={`group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all duration-500 shadow-sm ${
                  isLink ? 'cursor-pointer hover:shadow-2xl hover:border-[#F58220]/40 hover:-translate-y-2' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center group-hover:bg-[#F58220] transition-colors duration-300">
                    <Icon className="text-[#F58220] group-hover:text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {info.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-2 font-medium">
                      {info.content}
                    </p>
                  </div>
                </div>
              </Component>
            )
          })}
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {/* Map View */}
          <div className="lg:col-span-2 rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.86221448!2d76.9248!3d8.5147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb0000000000%3A0x0!2zS3VtYXJhcHVyYW0sIFRyaXZhbmRydW0!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale-[0.1] contrast-[1.1]"
            ></iframe>
           <a 
  href="https://maps.app.goo.gl/NdB6mCprFhezCnN2A" 
  target="_blank" 
  rel="noopener noreferrer"
  className="absolute top-6 left-6 transition-all hover:scale-105 active:scale-95 group/badge"
>
  <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-3 group-hover/badge:border-[#F58220]/50">
    <Navigation className="text-[#F58220]" size={20} />
    <div className="flex flex-col">
      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Click to View Map</span>
      <span className="text-sm font-bold text-slate-900 dark:text-white uppercase">Trivandrum Clinic</span>
    </div>
  </div>
</a>
          </div>

          {/* New Action Sidebar (No Booking) */}
          <div className="flex flex-col gap-6">
            <div className="p-10 rounded-[2.5rem] bg-[#1E293B] text-white flex-grow flex flex-col justify-center">
               <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Chat with us</h3>
               <p className="text-slate-300 text-sm leading-relaxed mb-8">
                 Need a quick answer about treatment costs or insurance? Our team is available on WhatsApp for instant support.
               </p>
               <Button
                 onClick={() => window.open('https://wa.me/919633305435', '_blank')}
                 className="bg-[#25D366] hover:bg-[#1fb355] text-white py-8 rounded-2xl font-black text-lg transition-all"
               >
                 WhatsApp Now
               </Button>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-orange-500 text-white shadow-xl flex items-center gap-5">
               <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="text-white" size={24} />
               </div>
               <div>
                  <h4 className="font-bold">Urgent Pain?</h4>
                  <p className="text-xs text-orange-100">Call for emergency advice</p>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              © 2026 Brain & Spine Clinic. Kumarapuram, Trivandrum.
            </p>
        </div>
      </div>
    </section>
  )
}