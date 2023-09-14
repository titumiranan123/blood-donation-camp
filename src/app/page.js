import Campaing from '@/component/Capmaing/Campaing'
import Donar from '@/component/Donar/Donar'
import Firstsection from '@/component/Firstsection/Firstsection'
import Footer from '@/component/Fotter/Fotter'

import Hero from '@/component/Hero/Hero'
import Navbar from '@/component/Navbar/Navbar'
import Secondsection from '@/component/Secondsection/Secondsection'
import Services from '@/component/Sevicesection/Services'
import Team from '@/component/Team/Team'
import Testimonial from '@/component/Testimonial/Testimonial'
import Work from '@/component/WorkerAndQualitysection/Work'
import Contact from '@/component/cotact/Contact'



export default function Home() {
  return (
    <main className="flex flex-col  md:px-4   lg:px-10">
      <Navbar />
      <Hero />
      <Firstsection />
      <Secondsection />
      <Work />
      <Services />
      <Campaing />
      <Testimonial />
      <Donar />
      <Team />
      <Contact />
      <Footer />

    </main>
  )
}
