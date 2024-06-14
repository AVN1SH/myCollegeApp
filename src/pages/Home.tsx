import Slider from "@/components/animation/Slider"
import EventAndNews from "@/components/home/EventAndNews"
import BadgeNav from "@/components/navbar/BadgeNav"

const Home = () => {
  
  return (
    <div className="pt-16 overflow-x-hidden">
      <Slider />
      <BadgeNav />
      <EventAndNews />
    </div>
  )
}

export default Home
