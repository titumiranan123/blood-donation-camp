import Campaing from '@/component/Capmaing/Campaing'
import Firstsection from '@/component/Firstsection/Firstsection'

import Hero from '@/component/Hero/Hero'
import Navbar from '@/component/Navbar/Navbar'
import Secondsection from '@/component/Secondsection/Secondsection'
import Services from '@/component/Sevicesection/Services'
import Work from '@/component/WorkerAndQualitysection/Work'



export default function Home() {
  return (
    <main className="flex flex-col    md:px-10">
      <Navbar />
      <Hero />
      <Firstsection />
      <Secondsection />
      <Work />
      <Services />
      <Campaing />
    </main>
  )
}
