import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Behavior from "@/components/dashboard/progress/Behavior"
import MarksTable from "@/components/result/MarksTable"

const tableData = {
  "overAll" : {
    "caption" : "Total Marks Of Completed Semester's",
    "head" : [
      "Semester's", "Total Marks", "Obtained Marks", "Percentage"
    ],
    "row" : [
      ["1st", "600", "400", "80%"],
      ["2st", "600", "400", "80%"],
      ["3st", "600", "400", "80%"],
      ["4st", "600", "400", "80%"],
    ]
  },
  "1st" : {
    "caption" : "Your Marks This Semester",
    "head" : [
      "Semester's", "Subject Name", "Theory Marks", "Practical Marks", "Total Marks"
    ],
    "row" : [
      ["1st", "Papper1", "30", "15",  "45"],
      ["1st", "Papper2", "30", "15",  "45"],
      ["1st", "Papper3", "30", "15",  "45"],
      ["1st", "Papper4", "30", "15",  "45"],
      ["1st", "Papper5", "30", "15",  "45"],
      ["1st", "Papper6", "30", "15",  "45"],
    ]
  },
  
}

const Results = () => {

  

  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-3xl pl-3 pt-3 text-white">
          Results / Grades |<span className="font-thin"> Your examination performance</span> 
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded p-3 flex-col space-y-2">

        <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 w-full h-fit space-y-2 shadow-md">
          <FontAwesomeIcon icon={faFileAlt}/> BCA<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-md"> OverAll Marks and Performance</span>
          <div className="flex rounded gap-3 bg-gray-100 xl:flex-row sm:flex-col">
            <MarksTable caption={tableData.overAll.caption} headData={tableData.overAll.head} rowData={tableData.overAll.row} />
            <div className="bg-white sm:flex sm:items-center sm:justify-center xl:items-start xl:justify-start">
              <Behavior />
            </div>
          </div>
        </div>

        <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 w-full h-fit space-y-2 shadow-md">
          <FontAwesomeIcon icon={faFileAlt}/> Semester 1st<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-md"> Your Marks and Performance</span>
          <div className="flex rounded gap-3 bg-gray-100 xl:flex-row sm:flex-col">
            <MarksTable headData={tableData["1st"].head} caption={tableData["1st"].caption} rowData={tableData["1st"].row} />
            <div className="bg-white sm:flex sm:items-center sm:justify-center xl:items-start xl:justify-start">
              <Behavior />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Results
