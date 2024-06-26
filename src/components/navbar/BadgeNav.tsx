import { useState } from "react";
import courses from "../../../public/courses.json";
import classNames from "@/utils/classNames";
import { Link } from "react-router-dom";

const BadgeNav = () => {
  const [track, setTrack] = useState(0);


  return (
    <div className="relative h-fit mx-2 flex flex-col overflow-hidden duration-200">
      <div className="absolute flex gap-3 overflow-hidden ml-3 w-[calc(100%-20px)]">
        {courses.map((course, index) => (
          <div 
            key={course.name} 
            className={classNames(track === index ? "bg-white text-orange-500 rounded-t rounded-b-none border-b-2 border-b-white h-[50px] hover:text-orange-600" :"bg-slate-500 text-white hover:bg-slate-600 duration-75 rounded h-fit", "w-fit py-2 px-4 hover:cursor-pointer shadow-sm font-semibold border-solid border-slate-300 border-[2px] whitespace-nowrap")}
            onClick={(() => setTrack(index))}
          >
            {course.shortName}
          </div>
        ))}
      </div>
      <div className="w-full h-[220px] md:h-[320px] lg:h-[450px] bg-white border-solid border-slate-300 border-[2px] rounded p-2 mt-[49px]">
        <Link to={`/programs/${track}`} className="relaive z-20 w-full h-full">
          <img src={courses[track].url} className="object-cover object-center h-[200px] md:h-[300px] lg:h-full w-full rounded"/>

          <div className="absolute top-[70px] left-[30px] md:top-30 md:left-15 lg:top-40 lg:left-20 w-[calc(100%-50px)] lg:w-[calc(100%-160px)] space-y-2 z-10">
            <h1 className="font-extrabold text-orange-500 text-xl lg:text-4xl">{courses[track].name}</h1>
            <p className="font-semibold text-slate-300 text-sm lg:text-xl">{courses[track].info}</p>
          </div>

          <div className="absolute top-[57px] bottom-[8px] w-[calc(100%-18px)] rounded bg-black opacity-[0.55]"></div>
        </Link>
      </div>
    </div>
  )
}

export default BadgeNav
