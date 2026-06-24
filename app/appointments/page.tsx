"use client"

import React, { useState, useMemo, useEffect } from 'react'
import { Calendar as CalendarIcon, Clock, User, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  "Orthopedic Rehabilitation",
  "Neurological Rehabilitation",
  "Cardiothoracic Rehabilitation",
  "Post Surgical Rehabilitation",
  "Paediatric Rehabilitation",
  "Geriatric Rehabilitation",
  "Sports Rehabilitation and Injury Prevention",
  "Craniosacral Therapy",
  "Home Visit Consultation"
]

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-gA_QGwlSzPZwfmJDGWs_le2k0f0OSSM-l_OIDzyA92-jpboROKDwTF2Lbb4-B3ZhfQ/exec";

export default function AppointmentPage() {
  const tomorrow = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  }, []);

  const [selectedDate, setSelectedDate] = useState<Date>(tomorrow)
  const [selectedTime, setSelectedTime] = useState('')
  const [bookedData, setBookedData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', service: '' })

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(SCRIPT_URL);
        const data = await response.json();
        setBookedData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i + 1);
      return d;
    })
  }, [])

  const isReserved = (timeStr: string) => {
    return bookedData.some(b => {
      const sheetDate = b.date ? new Date(b.date).toDateString() : "";
      const selectedDateStr = selectedDate.toDateString();
      const sheetTimeRaw = b.time ? new Date(b.time) : null;
      const sheetTimeFormatted = sheetTimeRaw 
        ? sheetTimeRaw.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
        : "";
      const isApproved = b.status?.toString().toLowerCase() === "approved";
      return (sheetDate === selectedDateStr && sheetTimeFormatted === timeStr && isApproved);
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Extra safety: Don't submit if phone isn't 10 digits
    if (!selectedTime || isSubmitting || formData.phone.length !== 10) return
    
    setIsSubmitting(true)
    const payload = {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      date: selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }),
      time: selectedTime,
      status: "Pending"
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      })
      setShowSuccess(true)
    } catch (error) {
      alert("Error booking appointment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <Card className="max-w-md w-full text-center p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={44} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Request Sent!</h2>
            <p className="text-slate-500 mb-6">Your appointment for {selectedTime} is currently <b>Pending</b>. We will notify you once it is <b>Approved</b>.</p>
            <Button onClick={() => window.location.reload()} className="w-full bg-[#E35D25]">Close</Button>
          </Card>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Brain & Spine Clinic</h1>
          <div className="mt-2 inline-flex items-center gap-2 bg-orange-50 text-[#E35D25] px-4 py-1.5 rounded-full border border-orange-100 text-xs font-bold uppercase">
            Book Your Appointment and Experience Expert Care
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Card className="border-none shadow-xl">
              <CardHeader className="bg-slate-900 text-white rounded-t-xl">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span className="flex items-center gap-2"><CalendarIcon size={18} /> Select Date & Time</span>
                  {isLoading && <Loader2 size={18} className="animate-spin text-orange-400" />}
                </CardTitle>
                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-green-500"/> <span className="text-[10px] font-bold uppercase text-slate-400">Available</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500"/> <span className="text-[10px] font-bold uppercase text-slate-400">Reserved (Approved)</span></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex gap-3 overflow-x-auto pb-6">
                  {weekDays.map((date, i) => (
                    <button
                      key={i}
                      disabled={date.getDay() === 0}
                      onClick={() => { setSelectedDate(date); setSelectedTime(''); }}
                      className={cn(
                        "flex flex-col items-center min-w-[85px] p-4 rounded-2xl border-2 transition-all",
                        selectedDate.toDateString() === date.toDateString() ? "border-[#E35D25] bg-orange-50" : "border-slate-100",
                        date.getDay() === 0 && "opacity-20 cursor-not-allowed"
                      )}
                    >
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                      <span className="text-xl font-black">{date.getDate()}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  {TIME_SLOTS.map((slot) => {
                    const reserved = isReserved(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={reserved}
                        onClick={() => setSelectedTime(slot)}
                        className={cn(
                          "py-4 rounded-xl font-bold text-sm transition-all border-2",
                          reserved 
                            ? "bg-red-50 border-red-100 text-red-500 cursor-not-allowed" 
                            : selectedTime === slot
                              ? "bg-[#E35D25] border-[#E35D25] text-white shadow-lg"
                              : "bg-green-50/40 border-green-100 text-green-700 hover:border-green-400"
                        )}
                      >
                        {slot}
                        {reserved && <p className="text-[9px] font-black uppercase mt-0.5">Reserved</p>}
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card className="border-none shadow-xl border-t-4 border-[#E35D25]">
               <CardContent className="p-6 pt-8">
                 <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="space-y-1">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                     <input required className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-[#E35D25] outline-none transition-all" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} />
                   </div>
                   
                   {/* VALIDATED PHONE FIELD */}
                   <div className="space-y-1">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                       Phone Number (10 Digits)
                     </label>
                     <input 
                       required 
                       type="tel" 
                       placeholder="Enter 10 digit number"
                       className={cn(
                         "w-full p-3 rounded-xl border-2 outline-none transition-all",
                         formData.phone.length > 0 && formData.phone.length < 10 
                           ? "border-red-300 focus:border-red-500 bg-red-50/30" 
                           : "border-slate-100 focus:border-[#E35D25]"
                       )} 
                       value={formData.phone} 
                       onChange={(e)=>{
                         // Only allow numbers and max 10 characters
                         const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                         setFormData({...formData, phone: val})
                       }} 
                     />
                     {formData.phone.length > 0 && formData.phone.length < 10 && (
                       <p className="text-[10px] text-red-500 font-bold animate-pulse ml-1">Must be exactly 10 digits</p>
                     )}
                   </div>

                   <div className="space-y-1">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Service Required</label>
                     <select required className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-[#E35D25] outline-none bg-white transition-all" value={formData.service} onChange={(e)=>setFormData({...formData, service: e.target.value})}>
                       <option value="">Choose Service...</option>
                       {services.map(s => <option key={s} value={s}>{s}</option>)}
                     </select>
                   </div>

                   <div className="mt-8 p-5 bg-slate-900 rounded-2xl text-white flex justify-between items-center">
                     <div>
                       <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Appointment</p>
                       <p className="text-sm font-bold">{selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                     </div>
                     <p className="text-2xl font-black text-[#E35D25]">{selectedTime || "--:--"}</p>
                   </div>

                   {/* BUTTON DISABLED IF PHONE IS NOT 10 DIGITS */}
                   <Button 
                    disabled={!selectedTime || isSubmitting || formData.phone.length !== 10} 
                    className="w-full bg-[#E35D25] hover:bg-slate-900 h-16 font-black rounded-2xl transition-all shadow-xl shadow-orange-100 text-lg disabled:opacity-50 disabled:grayscale"
                   >
                     {isSubmitting ? "Processing..." : "BOOK APPOINTMENT"}
                   </Button>
                 </form>
               </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}