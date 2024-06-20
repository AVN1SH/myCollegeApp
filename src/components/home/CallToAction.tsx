import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-200 rounded w-[calc(100%-20px)] ml-2 p-2 mt-5">
      <div className="font-semibold text-lg lg:text-2xl text-slate-700 bg-white rounded p-2 w-fit shadow-md"><FontAwesomeIcon icon={faFileCircleCheck}/> Ready to Start Your Journey?<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin">Apply now or contact us for more information.</span>
      </div>
      <div className="flex gap-2 bg-white w-fit p-2 rounded-b ml-2 shadow-md">
        <Button 
          className="rounded-full bg-orange-600 hover:px-6 transition-[0.75s]"
          onClick={() => navigate("/registration")}
        >
          Apply Now
        </Button>
        <Button 
        className="rounded-full hover:px-6 transition-[0.75s]"
        onClick={() => navigate("/about-us")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  )
}

export default CallToAction