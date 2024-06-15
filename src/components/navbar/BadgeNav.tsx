import { useState } from "react";
import courses from "../../../public/courses.json";
import classNames from "@/utils/classNames";

const BadgeNav = () => {
  const [track, setTrack] = useState(0);


  return (
    <div className="relative h-fit mx-2 flex flex-col overflow-hidden duration-200">
      <div className="absolute flex justify-between gap-2 overflow-hidden ml-3 w-[calc(100%-20px)]">
        {courses.map((course, index) => (
          <div 
            key={course.name} 
            className={classNames(track === index ? "bg-white text-orange-500 rounded-t rounded-b-none border-b-2 border-b-white h-[50px] hover:text-orange-600" :"bg-slate-500 text-white hover:bg-slate-600 duration-75 rounded h-fit", "w-fit py-2 px-4 hover:cursor-pointer shadow-sm font-semibold border-solid border-slate-300 border-[2px] whitespace-nowrap")}
            onClick={(() => setTrack(index))}
          >
            {course.name}
          </div>
        ))}
      </div>
      <div className="w-full h-[450px] bg-white border-solid border-slate-300 border-[2px] rounded p-2 mt-[49px]">
        <div className="relaive z-20 w-full h-full">
          <img src={courses[track].url} className="object-cover object-center h-full w-full rounded"/>

          <div className="absolute top-40 left-20 text-4xl w-[calc(100%-160px)] space-y-2 z-10">
            <h1 className="font-extrabold text-orange-500">{courses[track].name}</h1>
            <p className="font-semibold text-slate-300 text-xl">{courses[track].info}</p>
          </div>

          <div className="absolute top-[57px] bottom-[8px] w-[calc(100%-18px)] rounded bg-black opacity-[0.55]"></div>
        </div>
      </div>
    </div>
  )
}

export default BadgeNav
