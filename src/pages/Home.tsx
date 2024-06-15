import Slider from "@/components/animation/Slider"
import CallToAction from "@/components/home/CallToAction"
import EventAndNews from "@/components/home/EventAndNews"
import Testimonials from "@/components/home/Testimonials"
import BadgeNav from "@/components/navbar/BadgeNav"

const Home = () => {
  
  return (
    <div className="pt-16 overflow-x-hidden">
      <Slider />
      <BadgeNav />
      <EventAndNews />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home
