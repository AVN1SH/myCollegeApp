import times from "@/../public/times.json";

const TimeLine = () => {
  return (
    <div className="flex w-full rounded overflow-y-scroll h-[calc(100vh-12rem)] bg-white p-3 custom-scroll-bar">
      <div className="flex flex-col flex-1 justify-between h-[4000px] pb-[170px] font-semibold text-slate-400">
        {times.map((time) => <p key={time}>{time}</p>)}
      </div>
      <div className="flex-[10] flex flex-col justify-between h-[4000px] py-3">
        {times.map((item) => <hr key={item} className="border-slate-300"></hr>)}
        {times.map((item) => <hr key={item} className="border-slate-300"></hr>)}
        <hr className="border-slate-300"></hr>
      </div>
    </div>
  )
}

export default TimeLine
