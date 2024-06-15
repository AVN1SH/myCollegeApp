import times from "@/../public/times.json";
import { useEffect, useState } from "react";
import TimeDuration from "./dashboard/myClass/TimeDuration";
import djangoService from "@/Django/django";

interface Props {
  date : string | undefined;
}

interface Data {
  id : number;
  date : string;
  description : string;
  start : string;
  end : string;
  faculty_name : string;
  course : string;
}

const TimeLine = ({date} : Props) => {
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await djangoService.stdClass({
          course : "Batchlor's of computer application",
          date : date || ''
        });
        
        if(response) {
          const arr : Data[] = [];
          Object.values(response).forEach((value) => {
            arr.push(value as Data);
          });
          setData(arr);
        }
      } catch (error : any) {
        if(Number(error.message) >= 400) {
          console.log("Error while fetching data");
        }
      }
    }

    fetchData();
  }, [date]);

  return (
    <div className="flex w-full rounded overflow-y-scroll h-[calc(100vh-12rem)] bg-white p-3 custom-scroll-bar">
      <div className="flex flex-col flex-1 justify-between h-[4000px] pb-[170px] font-semibold text-slate-400">
        {times.map((time) => <p key={time}>{time}</p>)}
      </div>
      <div className="flex-[10] flex flex-col justify-between h-[4000px] py-3 relative">
        {times.map((item) => <hr key={item} className="border-slate-300"></hr>)}
        {times.map((item) => <hr key={item} className="border-slate-300"></hr>)}
        <hr className="border-slate-300"></hr>
        
        {data?.map((value) => (
          <TimeDuration 
            key={value.id}
            startTime={value.start} 
            endTime={value.end} 
            facultyName={value.faculty_name} 
            description={value.description} 
          />
        ))}
      </div>
    </div>
  )
}

export default TimeLine
