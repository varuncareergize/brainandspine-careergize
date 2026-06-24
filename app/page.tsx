import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Therapists } from '@/components/therapists'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
// import { Appointment } from '@/components/appointment'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Therapists />
        <Testimonials />
        <FAQ />
        {/* <Appointment /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
