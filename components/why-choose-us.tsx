'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Activity, Microscope, Award, MapPin, CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    icon: Activity,
    title: 'Shoulder Specialist Care',
    image: 'https://reliva.in/wp-content/uploads/2024/01/shoulder-pain-treatment.webp',
    description: 'Expert focus on shoulder biomechanics, treating rotator cuff tears and frozen shoulder with precision.',
  },
  {
    icon: Microscope,
    title: 'Advanced Diagnosis',
    image: 'https://m.media-amazon.com/images/I/81DMobOWY2L.jpg',
    description: 'Precision clinical assessment to identify the root cause of joint pain without surgery.',
  },
  {
    icon: Award,
    title: 'Customized Rehab Plans',
    image: 'https://www.miracleshealth.com/assets/blog/assets/uploads/blog/175808866210_Common_Injuries_Physiotherapy_Can_Help_You_Recover_From.webp',
    description: 'One-on-one manual therapy and strengthening protocols designed for 100% functional recovery.',
  },
  {
    icon: MapPin,
    title: 'Trivandrum Premier Hub',
    image: 'https://lh3.googleusercontent.com/p/AF1QipN8_tuVth1tkNN_dszEY8TXo9lakstIhU3ck9f0=s1360-w1360-h1020-rw',
    description: 'Located in Kumarapuram, we are the #1 exclusive center for shoulder physical therapy.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Aesthetic Background Gradients */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center space-y-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 text-[#F58220] text-sm font-bold tracking-wide uppercase">
               Best Physio Clinic in TVM
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose US
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Experience world-class orthopedic rehabilitation using evidence-based techniques in a modern clinical setting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <Card
                key={idx}
                className="group relative flex flex-col h-full border-none shadow-lg bg-white dark:bg-slate-900 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={reason.image} 
                    alt={reason.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center z-20 transition-colors group-hover:bg-[#F58220]">
                    <Icon className="text-[#F58220] group-hover:text-white transition-colors" size={24} />
                  </div>
                </div>

                <div className="p-8 pt-10 flex-grow space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#F58220] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="px-8 pb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-1 w-12 bg-[#F58220] rounded-full"></div>
                </div>

                {/* Numbering Overlay */}
                <span className="absolute bottom-4 right-6 text-7xl font-black text-slate-50 dark:text-slate-800/20 group-hover:text-orange-50 dark:group-hover:text-orange-900/10 transition-colors -z-10 pointer-events-none">
                  0{idx + 1}
                </span>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}