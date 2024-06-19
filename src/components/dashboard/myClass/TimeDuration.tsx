import { getRandomColor } from "@/utils/colors";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


interface Props {
  startTime : string;
  endTime : string;
  facultyName : string;
  description : string;
}

const TimeDuration = ({startTime, endTime, facultyName, description} : Props) => {
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(12);

  useEffect(() => {
    const time = startTime.split(':');
    const hour = Number(time[0]);
    const min = Number(time[1]);
    const time2 = endTime.split(':');
    const hour2 = Number(time2[0]);
    const min2 = Number(time2[1]);

    const timeDifference = (hour2 * 60 + min2) - (hour * 60 + min);
    const calculate = timeDifference * 2.76;
    const convert = hour * 60 + min;
    const cal = convert * 2.76 + 12;

    // 2.76 for 1min
    setHeight(calculate);
    setTop(cal);
  }, [startTime, endTime]);

  return (
    <div 
      style={{height : `${height}px`, top : `${top}px`}}
      className={`absolute ${getRandomColor()} border-solid border-slate-500 border-[1px] shadow-[0_0_5px_rgba(0,0,0,0.45)] w-full rounded p-2 overflow-hidden opacity-[0.75] space-y-2`}>
      <p className="text-white font-semibold text-xs lg:text-sm">
        <FontAwesomeIcon icon={faClock}/> Time : {startTime} - {endTime} 
        <span className="text-orange-600"> | </span> 
        <span className="text-black text-[12px] lg:text-sm"> By {facultyName}</span>
      </p>
      <p className="pl-3 lg:text-sm text-xs">
        {description}
      </p>
    </div>
  )
}

export default TimeDuration
