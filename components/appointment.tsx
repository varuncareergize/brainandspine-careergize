'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic for sending email or storing message
    alert('Message sent! Our team in Kumarapuram will get back to you shortly.')
    setFormData({ name: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side: Contact Info & Branding */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#F58220] text-xs font-bold uppercase tracking-widest">
                <MessageSquare size={14} /> Get In Touch
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Have Questions? <br />
                <span className="text-[#F58220]">Let's Talk.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Whether you're inquiring about shoulder rehab or neuro services, our team at Kumarapuram is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#F58220]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Visit Our Clinic</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Kumarapuram, Thiruvananthapuram,<br /> Kerala 695011
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="text-[#F58220]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Call Us Directly</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">+91 96333 05435</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="text-[#F58220]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Email Support</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">info@brainandspinephysio.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <Card className="lg:col-span-3 p-8 sm:p-10 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-xl rounded-[2rem]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-semibold">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Full Name" 
                    className="bg-white dark:bg-slate-800"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-semibold">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91" 
                    className="bg-white dark:bg-slate-800"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="font-semibold">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  className="bg-white dark:bg-slate-800"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-semibold">Message</Label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[#F58220]/20 focus:border-[#F58220] focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your concern..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#F58220] hover:bg-orange-600 text-white py-6 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </Button>
            </form>
          </Card>

        </div>
      </div>
    </section>
  )
}