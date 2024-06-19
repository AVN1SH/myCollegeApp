import { RootState } from "@/store/store"
import { useEffect } from "react";
import { useSelector } from "react-redux"

const FaOverview = () => {
  const userData = useSelector((state : RootState) => state.authSlice.userData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-sm md:text-xl lg:text-3xl pl-3 pt-3 text-white">
          Overview
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-5px)] md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)] top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded lg:p-3 p-1">
        <div className="bg-white mb-1 rounded p-2 pl-2 w-full h-fit text-sm md:text-2xl lg:text-3xl xl:text-4xl">
          {userData && <h1 className="scroll-m-20 font-extrabold tracking-tight text-slate-700"><span className="text-orange-600">Welcome</span> To My College "{userData.first_name + ' ' + (userData.middle_name ? userData.middle_name : '') + ' ' + (userData.last_name ? userData.last_name : '')}"</h1>}
        </div>
        
      </div>
    </div>
  )
}

export default FaOverview
