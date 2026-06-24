"use client"

import React, { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Users, Search, MoreVertical, Phone, CheckCircle,
  Clock3, Brain, RefreshCw, Loader2 
} from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-gA_QGwlSzPZwfmJDGWs_le2k0f0OSSM-l_OIDzyA92-jpboROKDwTF2Lbb4-B3ZhfQ/exec";
const ADMIN_WHATSAPP = "9633305435"; // Your WhatsApp Number

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  // 1. Fetch Data
  const fetchData = async () => {
    setRefreshing(true)
    try {
      const response = await fetch(`${SCRIPT_URL}?t=${Date.now()}`)
      const data = await response.json()
      if (Array.isArray(data)) {
        setAppointments(data)
      }
    } catch (error) {
      console.error("Fetch error:", error)
    } finally {
      setIsLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // 2. Integrated Approve & WhatsApp Logic
  const handleApproveAndNotify = async (app: any) => {
    const newStatus = "Approved";

    // A. Optimistic UI Update (Instant change on screen)
    setAppointments(prev => prev.map(item => 
      item.id === app.id ? { ...item, status: newStatus } : item
    ));

    // B. WhatsApp Redirect Logic
    // Pre-filled message for the admin to send to the patient
    const message = `*Appointment Confirmed* ✅%0A%0AHello *${app.name}*, your appointment for *${app.service}* on *${app.date}* at *${app.time}* has been *APPROVED*.%0A%0AWe look forward to seeing you!`;
    
    // Clean patient phone (removes spaces/dashes)
    let patientPhone = app.phone.replace(/\D/g, '');
    
    // Redirect to WhatsApp (Opens chat with the patient)
    // Note: If you want to chat with the patient, we use their number. 
    // If you want to send the message TO yourself, use ADMIN_WHATSAPP.
    window.open(`https://wa.me/${patientPhone}?text=${message}`, '_blank');

    // C. Update Google Sheets Database
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          action: "updateStatus",
          id: app.id,
          status: newStatus
        })
      });
      setTimeout(fetchData, 2000); // Sync back after a delay
    } catch (error) {
      console.error("Update failed:", error);
      fetchData(); 
    }
  }

  // Statistics Calculation
  const stats = useMemo(() => ({
    total: appointments.length,
    approved: appointments.filter(a => a.status === 'Approved').length,
    pending: appointments.filter(a => (a.status || 'Pending') === 'Pending').length,
  }), [appointments])

  // Search Filter
  const filteredData = useMemo(() => {
    return appointments.filter(app => 
      app.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [appointments, searchTerm])

  if (isLoading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-[#E35D25] mb-2" size={40} />
      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Syncing Records...</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#E35D25] flex items-center justify-center shadow-lg">
              <Brain className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black text-[#1E293B] uppercase tracking-tight">
              Management <span className="text-[#E35D25]">Portal</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={fetchData} className="font-bold rounded-xl border-2">
              <RefreshCw className={cn("mr-2 h-4 w-4", refreshing && "animate-spin")} /> 
              {refreshing ? "Updating..." : "Refresh"}
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="Total Patients" value={stats.total} icon={Users} color="text-blue-600" bg="bg-blue-50" />
          <StatCard label="Approved" value={stats.approved} icon={CheckCircle} color="text-green-600" bg="bg-green-50" />
          <StatCard label="Pending" value={stats.pending} icon={Clock3} color="text-[#E35D25]" bg="bg-orange-50" />
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name..." 
            className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-slate-100 bg-white focus:border-[#E35D25] outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table Card */}
        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b">
                <tr>
                  <th className="px-8 py-5">Patient</th>
                  <th className="px-8 py-5">Service</th>
                  <th className="px-8 py-5">Date/Time</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredData.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-slate-800">{app.name}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-medium">
                        <Phone size={12} /> {app.phone}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-lg text-slate-500">
                        {app.service}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm">
                      <div className="font-bold text-slate-700">{app.date}</div>
                      <div className="text-xs text-[#E35D25] font-black">{app.time}</div>
                    </td>
                    <td className="px-8 py-6">
                      <StatusBadge status={app.status || "Pending"} />
                    </td>
                    <td className="px-8 py-6 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="rounded-full">
                            <MoreVertical size={20} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-xl border-2">
                          <DropdownMenuItem 
                            onClick={() => handleApproveAndNotify(app)} 
                            className="text-green-600 font-bold p-3 cursor-pointer"
                          >
                            <CheckCircle size={16} className="mr-2"/> Approve & WhatsApp
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}

// Sub-components
function StatCard({ label, value, icon: Icon, color, bg }: any) {
  return (
    <Card className="border-none shadow-sm bg-white rounded-3xl">
      <CardContent className="p-6 flex items-center gap-5">
        <div className={cn("p-4 rounded-2xl", bg)}><Icon className={cn("w-6 h-6", color)} /></div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
          <p className="text-3xl font-black text-slate-800">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function StatusBadge({ status }: { status: string }) {
  const isApproved = status === 'Approved'
  return (
    <span className={cn(
      "text-[10px] uppercase font-black px-4 py-1.5 rounded-full border-2",
      isApproved ? "bg-green-50 text-green-600 border-green-100" : "bg-orange-50 text-[#E35D25] border-orange-100"
    )}>
      {status}
    </span>
  )
}