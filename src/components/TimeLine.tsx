import times from "@/../public/times.json";
import { useEffect, useState } from "react";
import TimeDuration from "./dashboard/myClass/TimeDuration";


const TimeLine = () => {

  function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ');
  }
  
  return (
    <div className="flex w-full rounded overflow-y-scroll h-[calc(100vh-12rem)] bg-white p-3 custom-scroll-bar">
      <div className="flex flex-col flex-1 justify-between h-[4000px] pb-[170px] font-semibold text-slate-400">
        {times.map((time) => <p key={time}>{time}</p>)}
      </div>
      <div className="flex-[10] flex flex-col justify-between h-[4000px] py-3 relative">
        {times.map((item) => <hr key={item} className="border-slate-300"></hr>)}
        {times.map((item) => <hr key={item} className="border-slate-300"></hr>)}
        <hr className="border-slate-300"></hr>
        
        <TimeDuration startTime="0:30" endTime="1:00"/>
      </div>
    </div>
  )
}

export default TimeLine
