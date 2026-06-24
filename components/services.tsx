import { 
  Stethoscope, 
  Brain, 
  HeartPulse, 
  Activity, 
  Baby, 
  UserRound, 
  Trophy, 
  Home, 
  Waves 
} from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Neurological Rehabilitation",
    description: "Expert care for stroke, spinal cord injuries, and neurological disorders to restore independence.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Orthopedic Rehabilitation",
    description: "Specialized treatment for fractures, joint replacements, and musculoskeletal conditions.",
    icon: Stethoscope,
    image: "https://ramadiphysio.com/wp-content/uploads/2024/09/Types-of-orthopedic-rehabilitation--1024x576.webp",
  },
  {
    title: "Cardiothoracic Rehab",
    description: "Comprehensive recovery programs for heart and lung health post-surgery or illness.",
    icon: HeartPulse,
    image: "https://www.rfhospital.org/sites/default/files/2025-07/Cardiac-Rehabilitation.jpg",
  },
  {
    title: "Post-Surgical Recovery",
    description: "Accelerated healing and mobility restoration following surgical procedures.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Paediatric Care",
    description: "Gentle, specialized physiotherapy for infants and children's developmental needs.",
    icon: Baby,
    image: "https://westendphysio.com/wp-content/uploads/2022/04/pediatrics-physiotherapy.jpeg",
  },
  {
    title: "Sports Rehabilitation",
    description: "Advanced injury prevention and performance recovery for athletes of all levels.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Geriatric Rehabilitation",
    description: "Improving balance, strength, and mobility for elderly health and fall prevention.",
    icon: UserRound,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Craniosacral Therapy",
    description: "Subtle, effective hands-on therapy to release deep tension in the central nervous system.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Home Visit Services",
    description: "Bringing expert physiotherapy care directly to the comfort and safety of your home.",
    icon: Home,
    image: "https://www.shutterstock.com/image-photo/indian-nurse-therapist-guiding-assisting-260nw-2416863953.jpg",
  },
]

// REMOVED 'default' here to match your { Services } import
export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Advanced Clinical Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Since 2019, Brain & Spine has provided evidence-based treatments using modern equipment and personalized recovery plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="p-2 bg-orange-500 rounded-lg text-white">
                    <service.icon size={24} />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}