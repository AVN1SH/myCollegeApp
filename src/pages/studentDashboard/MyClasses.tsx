import TimeLine from "@/components/TimeLine";
import { Calendar } from "@/components/ui/calendar"
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"

const MyClasses = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedWeek, setFormattedWeek] = useState(''); 

  useEffect(() => {
    const options1: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const options2 : Intl.DateTimeFormatOptions = {
      weekday: "long",
    }
  
    const formatDate = date?.toLocaleDateString("en-US", options1);
    const formatWeek = date?.toLocaleDateString("en-US", options2);

    if(formatDate) setFormattedDate(formatDate);
    if(formatWeek) setFormattedWeek(formatWeek);
  }, [date])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-sm md:text-xl lg:text-3xl pl-3 pt-3 text-white">
          My Classes <span className="text-slate-800 font-thin">| </span><span className="font-thin">Classes and Events Schedules</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-5px)] md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)] top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded lg:p-3 p-1">
        <div className="font-semibold md md:text-xl lg:text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2"><FontAwesomeIcon icon={faCalendar}/> {formattedDate}<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin">{formattedWeek}</span>
        </div>
        <div className="flex bg-gray-100 justify-between w-full gap-1 flex-col-reverse xl:flex-row">
          <div className="flex-[1.7] bg-white rounded flex flex-row">
            <TimeLine date={date?.toLocaleString("en-GB", {year : "numeric", day : "numeric", month : "numeric"})}/>
          </div>
          <div className="flex-1 bg-white rounded">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              classNames={{
                month : "space-y-4 w-full border-[1px] border-gray-200 border-solid rounded-lg pt-2",
                head_cell:"text-muted-foreground rounded-md min-w-[28px] font-normal text-[0.8rem] w-full",
                row: "flex w-full",
                cell: "h-8 xl:h-14 min-w-[28px] xl:w-14 text-center text-xs xl:text-sm relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-orange-100 [&:has([aria-selected])]:bg-orange-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 w-full rounded-full hover:bg-orange-100 flex items-center justify-center hover:cursor-pointer",
                day_selected:"bg-orange-500 text-orange-500-foreground hover:bg-orange-600 hover:text-orange-600-foreground focus:bg-orange-500 focus:text-orange-500-foreground text-white",
                day: "min-w-[32px] h-8 xl:w-12 xl:h-12 rounded-full",
                day_today: "bg-accent text-accent-foreground text-orange-500 font-semibold",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyClasses
