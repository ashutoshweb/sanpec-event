import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import Pricing from "../../components/eventing/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      <Pricing/>
      <Schedule />
      <Sponsors />
      <Newsletter />
    </>
  )
}
