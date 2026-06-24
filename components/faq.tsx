'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is physiotherapy and how does it help?',
    answer: 'Physiotherapy is a healthcare discipline that focuses on restoring movement, function, and strength. It uses evidence-based techniques to treat injuries, disabilities, and mobility issues. At Brain & Spine Physio, we use specialized methods for neurological and spine conditions to help you recover safely and effectively.',
  },
  {
    question: 'How long does a typical physiotherapy session last?',
    answer: 'Our standard physiotherapy sessions are 45-60 minutes long. The duration depends on your specific condition and treatment plan. We customize each session to ensure adequate time for assessment, treatment, and home exercise instruction.',
  },
  {
    question: 'How many sessions will I need?',
    answer: 'The number of sessions varies based on your condition, severity, and recovery goals. After an initial assessment, our therapists will provide an estimated treatment plan. Some patients see improvement in 4-6 weeks, while others may need longer-term care.',
  },
  {
    question: 'Do I need a doctor\'s referral for physiotherapy?',
    answer: 'While a doctor\'s referral is not always required in India, having one helps with insurance claims and provides our therapists with important medical context. We welcome self-referred patients and will conduct a comprehensive assessment at your first visit.',
  },
  {
    question: 'Can physiotherapy help with chronic pain?',
    answer: 'Yes, physiotherapy is highly effective for chronic pain management. We use techniques like therapeutic exercises, manual therapy, and modalities like TENS to reduce pain and improve function without relying solely on medication.',
  },
  {
    question: 'What conditions can you treat with neuro physiotherapy?',
    answer: 'We specialize in treating neurological conditions including stroke, Parkinson\'s disease, spinal cord injuries, multiple sclerosis, bell\'s palsy, cerebral palsy, and other neurological disorders. Each treatment is customized based on individual needs.',
  },
  {
    question: 'Is physiotherapy safe after surgery?',
    answer: 'Post-surgical physiotherapy is not only safe but highly recommended. Our therapists follow evidence-based protocols for different surgical procedures to promote healing, reduce complications, and restore function within appropriate timelines.',
  },
  {
    question: 'Do you offer home physiotherapy services?',
    answer: 'Yes, we offer in-home physiotherapy services for patients who have mobility challenges or prefer the convenience of home-based treatment. Our experienced therapists bring portable equipment and provide personalized care at your location.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about physiotherapy and our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card
              key={idx}
              className="border-border/50 overflow-hidden bg-white/50 dark:bg-slate-900/50 glass-morphism hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-5 pt-2 border-t border-border/30 bg-primary/2 dark:bg-primary/5 animate-scale-in">
                  <p className="text-foreground/75 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 glass-morphism border border-primary/30 dark:border-primary/20 text-center">
          <p className="text-foreground/80 mb-4">
            Still have questions? Feel free to reach out to us anytime.
          </p>
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  <a
    href="tel:+919633305435"
    className="px-6 py-3 rounded-full bg-[#E35D25] text-white font-semibold hover:bg-[#c94e1f] hover:shadow-lg hover:shadow-orange-600/40 transition-all duration-300 hover:scale-105"
  >
    Call Us
  </a>
  <a
    href="https://wa.me/919633305435"
    className="px-6 py-3 rounded-full border-2 border-[#E35D25] text-[#E35D25] font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105"
  >
    WhatsApp Us
  </a>
</div>
        </div>
      </div>
    </section>
  )
}
