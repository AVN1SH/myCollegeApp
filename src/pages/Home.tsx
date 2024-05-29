import Slider from "@/components/animation/Slider"
import Footer from "@/components/footer/Footer"
import BadgeNav from "@/components/navbar/BadgeNav"

const Home = () => {
  return (
    <div className="pt-16 overflow-x-hidden">
      <Slider />
      <BadgeNav />
      <Footer />
    </div>
  )
}

export default Home
