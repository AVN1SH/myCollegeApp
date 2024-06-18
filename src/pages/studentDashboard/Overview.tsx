import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Overview = () => {
  const userData = useSelector((state : RootState) => state.authSlice.userData);
  const admissionStatus = useSelector((state : RootState) => state.stdSlice.admissionStatus)
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-sm md:text-xl lg:text-3xl pl-3 pt-3 text-white">
          Overview <span className="text-slate-800 font-thin">| </span><span className="font-thin">Your OverAll Activities</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-5px)] md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)] top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded lg:p-3 p-1">
        <div className="bg-white mb-1 rounded p-2 pl-2 w-full h-fit text-sm md:text-2xl lg:text-3xl xl:text-4xl">
          <h1 className="scroll-m-20 font-extrabold tracking-tight text-slate-700"><span className="text-orange-600">Welcome</span> To My College "{userData && (userData.first_name + ' ' + (userData.middle_name ? userData.middle_name : '') + ' ' + (userData.last_name ? userData.last_name : ''))}"</h1>
        </div>
        {!admissionStatus && <div className="bg-white mb-1 rounded p-2 pl-2 w-full h-fit text-xs lg:text-lg">
          <blockquote className="border-l-2 border-red-600 pl-6 italic bg-red-100 py-2">
            You haven't Completed your admission yet, <Link className="underline text-blue-600 font-semibold" to="/student-dashboard/admission"> click here</Link> to do now.
          </blockquote>
        </div>}
      </div>
    </div>
  )
}

export default Overview
