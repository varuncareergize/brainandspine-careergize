"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  ChevronRight, 
  Brain,
  AlertCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    // YOUR NEW SCRIPT URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzfRkaEC3nY2tMRq33IGKRg1t-PzfgDfUEwa9yaH-mz_2wpxXnjqarU_jUVn5Z15ULnTQ/exec'

    try {
      // We send credentials as URL parameters to match the doGet logic
      // This bypasses the common CORS issues associated with POST requests in Google Scripts
      const response = await fetch(
        `${SCRIPT_URL}?email=${encodeURIComponent(formData.email)}&password=${encodeURIComponent(formData.password)}&action=login`
      )

      const result = await response.json()

      if (result.status === "success") {
        // 1. Set the Security Cookie for the Middleware
        Cookies.set('is_admin_logged_in', 'true', { expires: 1, path: '/' })

        // 2. Store session data
        localStorage.setItem('userName', result.user || 'Admin')
        localStorage.setItem('isLoggedIn', 'true')
        
        // 3. Navigate to Dashboard
        router.push('/dashboard')
        router.refresh() 
      } else {
        // This catches the "Invalid credentials" message sent by your script
        setError(result.message || "Access denied. Please check your credentials.")
      }
    } catch (err) {
      console.error("Login Error:", err)
      setError("Connection failed. Ensure your script is deployed as 'Anyone' with 'doGet' handling.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 flex flex-col justify-center items-center p-4">
      <div className="fixed top-0 left-0 w-full h-1 bg-[#E35D25]" />
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E35D25] shadow-lg shadow-[#E35D25]/20 mb-4 transform -rotate-6">
            <Brain className="text-white w-10 h-10" />
          </div>
          <h1 className="text-2xl font-black text-[#1E293B] dark:text-white uppercase tracking-tighter">
            Brain & Spine
          </h1>
          <p className="text-[#E35D25] text-[10px] font-bold uppercase tracking-[0.3em]">
            Admin Portal Access
          </p>
        </div>

        <Card className="border-none shadow-2xl bg-white dark:bg-slate-900 overflow-hidden">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-xl font-bold text-[#1E293B] dark:text-white">Welcome Back</CardTitle>
            <CardDescription className="text-slate-500">
              Enter admin credentials to manage clinic data.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-4">
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-semibold">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E35D25] transition-colors" size={18} />
                  <input 
                    required
                    type="email"
                    placeholder="admin@brainandspine.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-transparent focus:border-[#E35D25] outline-none transition-all text-sm dark:text-white"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    value={formData.email}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    Password
                  </label>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E35D25] transition-colors" size={18} />
                  <input 
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-transparent focus:border-[#E35D25] outline-none transition-all text-sm dark:text-white"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    value={formData.password}
                    disabled={isLoading}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1E293B] hover:bg-[#2d3a4f] dark:bg-[#E35D25] dark:hover:bg-[#c94d1d] text-white py-6 rounded-xl font-bold transition-all mt-2 relative overflow-hidden group shadow-xl"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Verifying...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2 tracking-wide">
                    LOGIN TO PORTAL
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-slate-400 text-xs font-medium leading-loose">
          Secure encrypted session. <br />
          &copy; {new Date().getFullYear()} Brain & Spine Physiotherapy Clinic.
        </p>
      </div>
    </div>
  )
}