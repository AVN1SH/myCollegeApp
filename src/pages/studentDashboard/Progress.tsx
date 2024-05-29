import Attendance from "@/components/dashboard/progress/attendance/Attendance"
import Achieved from "@/components/dashboard/progress/attendance/Overall"
import Course from "@/components/dashboard/progress/Course"
import Behavior from "@/components/dashboard/progress/Behavior"

const Progress = () => {
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-3xl pl-3 pt-3 text-white">
          Progress Report | <span className="font-thin">Your Performance Towards This Session</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded p-3">
        <div className="flex flex-col w-full gap-2">
          <Attendance />
          <div className="flex items-center h-[400px] gap-3">
            <div className="flex flex-1 flex-col bg-white rounded p-3 h-full justify-between">
              <div>
                <p className="font-semibold text-slate-500 text-lg text-center">Overall Attendence</p>
                <p className="font-semibold text-red-500 text-xs text-center">75% Attendance required</p>
              </div>
              <Achieved />
            </div>

            <div className="flex flex-1 flex-col bg-white rounded h-full p-3 justify-between">  
              <p className="font-semibold text-slate-500 text-lg text-center">Syllabus Report</p>
              <Course />
            </div>

            <div className="flex flex-1 flex-col bg-white rounded h-full p-3 justify-between">  
              <p className="font-semibold text-slate-500 text-lg text-center">Your Behaviour Report</p>
              <Behavior />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress
