import { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import Banner2 from "../banner/Banner2";
import Banner3 from "../banner/Banner3";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide +1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <button
          onClick={() => setCurrentSlide((currentSlide - 1 + 3) % 3)}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        >
          <ChevronLeftIcon className="block h-10 w-10 text-slate-400 bg-gray-200 rounded-full p-2 hover:text-black hover:pl-1 duration-75" />
        </button>

        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <Link to={"/programs"} className="w-full flex-shrink-0">
            <Banner />
          </Link>
          <Link to={"/programs"} className="w-full flex-shrink-0">
            <Banner2 />
          </Link>
          <Link to={"/programs"} className="w-full flex-shrink-0">
            <Banner3 />
          </Link>
        </div>

        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % 3)}
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
        >
          <ChevronRightIcon className="block h-10 w-10 text-slate-400 bg-gray-200 rounded-full p-2 hover:text-black hover:pr-1 duration-75"/>
        </button>
      </div>
    </div>
  )
}

export default Slider
