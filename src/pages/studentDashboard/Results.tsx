import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MarksTable from "@/components/result/MarksTable"
import MarksGraph from "@/components/result/MarksGraph"
import { useEffect, useState } from "react"
import djangoService from "@/Django/django"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

const Results = () => {
  const [marks, setMarks] = useState<TransformedData>();
  const [tableData, setTableData] = useState<{[any : string] : {caption : string; head : string[]; row : string[][]}}>();
  const userData = useSelector((state : RootState) => state.authSlice.userData);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await djangoService.result({
          id : "1"
        });
        
        if(response) {
          const transformed: TransformedData = {};
          
          Object.keys(response).forEach(semKey => {
            const semData = response[semKey];
            const transformedSemData: TransformedSemesterData = { subjects: [] };
            
            Object.keys(semData).forEach(key => {
              if (!isNaN(Number(key))) {
                transformedSemData.subjects.push(semData[key] as any);
              } else {
                transformedSemData[key] = semData[key];
              }
            });
            
            transformed[semKey] = transformedSemData;
          });
          setMarks(transformed);
        }
      } catch (error : any) {
        if(Number(error.message) >= 400) {
          console.log("Error while fetching data");
        }
      }
    }
    
    fetchData();
  }, []);

  useEffect(() => {
    if(marks) {
      setTableData({
        "overAll" : {
          "caption" : "Total Marks Of Completed Semester's",
          "head" : [
            "Semester's", "Total Marks", "Obtained Marks", "Percentage"
          ],
          "row" : marks ? [
            marks.sem1 && ["1st", 
              "600", 
              String(marks.sem1.subjects[6].total_marks), 
              `${String(Number((marks.sem1.subjects[6].total_marks * 100 / 600).toFixed(2)))}%`
            ],
            marks.sem2 && ["2nd", 
              "600", 
              String(marks.sem2.subjects[6].total_marks), 
              `${String(Number((marks.sem2.subjects[6].total_marks * 100 / 600).toFixed(2)))}%`
            ],
            marks.sem3 && ["3rd", 
              "600", 
              String(marks.sem3.subjects[6].total_marks), 
              `${String(Number((marks.sem3.subjects[6].total_marks * 100 / 600).toFixed(2)))}%`
            ],
            marks.sem4 && ["4th", 
              "600", 
              String(marks.sem4.subjects[6].total_marks), 
              `${String(Number((marks.sem4.subjects[6].total_marks * 100 / 600).toFixed(2)))}%`
            ],
            marks.sem5 && ["5th", 
              "600", 
              String(marks.sem5.subjects[6].total_marks), 
              `${String(Number((marks.sem5.subjects[6].total_marks * 100 / 600).toFixed(2)))}%`
            ],
            marks.sem6 && ["6th", 
              "300", 
              String(marks.sem6.subjects[3].total_marks), 
              `${String(Number((marks.sem6.subjects[3].total_marks * 100 / 300).toFixed(2)))}%`
            ],
          ] : []
        },
        "1st" : {
          "caption" : "Your Marks This Semester",
          "head" : [
            "Paper Code", "Subject Name", "Theory Marks", "Practical Marks", "Total Marks"
          ],
          "row" : marks?.sem1 ? [
            [
              marks.sem1.subjects[0].paper_code, 
              marks.sem1.subjects[0].paper_title, 
              String(marks.sem1.subjects[0].external_marks), 
              String(marks.sem1.subjects[0].internal_marks),
              String(marks.sem1.subjects[0].obtain_marks)
            ],
            [
              marks.sem1.subjects[1].paper_code, 
              marks.sem1.subjects[1].paper_title, 
              String(marks.sem1.subjects[1].external_marks), 
              String(marks.sem1.subjects[1].internal_marks),
              String(marks.sem1.subjects[1].obtain_marks)
            ],
            [
              marks.sem1.subjects[2].paper_code, 
              marks.sem1.subjects[2].paper_title, 
              String(marks.sem1.subjects[2].external_marks), 
              String(marks.sem1.subjects[2].internal_marks),
              String(marks.sem1.subjects[2].obtain_marks)
            ],
            [
              marks.sem1.subjects[3].paper_code, 
              marks.sem1.subjects[3].paper_title, 
              String(marks.sem1.subjects[3].external_marks), 
              String(marks.sem1.subjects[3].internal_marks),
              String(marks.sem1.subjects[3].obtain_marks)
            ],
            [
              marks.sem1.subjects[4].paper_code, 
              marks.sem1.subjects[4].paper_title, 
              String(marks.sem1.subjects[4].external_marks), 
              String(marks.sem1.subjects[4].internal_marks),
              String(marks.sem1.subjects[4].obtain_marks)
            ],
            [
              marks.sem1.subjects[5].paper_code, 
              marks.sem1.subjects[5].paper_title, 
              String(marks.sem1.subjects[5].external_marks), 
              String(marks.sem1.subjects[5].internal_marks),
              String(marks.sem1.subjects[5].obtain_marks)
            ],
          ] : []
        },
        "2nd" : {
          "caption" : "Your Marks This Semester",
          "head" : [
            "Paper Code", "Subject Name", "Theory Marks", "Practical Marks", "Total Marks"
          ],
          "row" : marks?.sem2 ? [
            [
              marks.sem2.subjects[0].paper_code, 
              marks.sem2.subjects[0].paper_title, 
              String(marks.sem2.subjects[0].external_marks), 
              String(marks.sem2.subjects[0].internal_marks),
              String(marks.sem2.subjects[0].obtain_marks)
            ],
            [
              marks.sem2.subjects[1].paper_code, 
              marks.sem2.subjects[1].paper_title, 
              String(marks.sem2.subjects[1].external_marks), 
              String(marks.sem2.subjects[1].internal_marks),
              String(marks.sem2.subjects[1].obtain_marks)
            ],
            [
              marks.sem2.subjects[2].paper_code, 
              marks.sem2.subjects[2].paper_title, 
              String(marks.sem2.subjects[2].external_marks), 
              String(marks.sem2.subjects[2].internal_marks),
              String(marks.sem2.subjects[2].obtain_marks)
            ],
            [
              marks.sem2.subjects[3].paper_code, 
              marks.sem2.subjects[3].paper_title, 
              String(marks.sem2.subjects[3].external_marks), 
              String(marks.sem2.subjects[3].internal_marks),
              String(marks.sem2.subjects[3].obtain_marks)
            ],
            [
              marks.sem2.subjects[4].paper_code, 
              marks.sem2.subjects[4].paper_title, 
              String(marks.sem2.subjects[4].external_marks), 
              String(marks.sem2.subjects[4].internal_marks),
              String(marks.sem2.subjects[4].obtain_marks)
            ],
            [
              marks.sem2.subjects[5].paper_code, 
              marks.sem2.subjects[5].paper_title, 
              String(marks.sem2.subjects[5].external_marks), 
              String(marks.sem2.subjects[5].internal_marks),
              String(marks.sem2.subjects[5].obtain_marks)
            ],
          ] : []
        },
        "3rd" : {
          "caption" : "Your Marks This Semester",
          "head" : [
            "Paper Code", "Subject Name", "Theory Marks", "Practical Marks", "Total Marks"
          ],
          "row" : marks?.sem3 ? [
            [
              marks.sem3.subjects[0].paper_code, 
              marks.sem3.subjects[0].paper_title, 
              String(marks.sem3.subjects[0].external_marks), 
              String(marks.sem3.subjects[0].internal_marks),
              String(marks.sem3.subjects[0].obtain_marks)
            ],
            [
              marks.sem3.subjects[1].paper_code, 
              marks.sem3.subjects[1].paper_title, 
              String(marks.sem3.subjects[1].external_marks), 
              String(marks.sem3.subjects[1].internal_marks),
              String(marks.sem3.subjects[1].obtain_marks)
            ],
            [
              marks.sem3.subjects[2].paper_code, 
              marks.sem3.subjects[2].paper_title, 
              String(marks.sem3.subjects[2].external_marks), 
              String(marks.sem3.subjects[2].internal_marks),
              String(marks.sem3.subjects[2].obtain_marks)
            ],
            [
              marks.sem3.subjects[3].paper_code, 
              marks.sem3.subjects[3].paper_title, 
              String(marks.sem3.subjects[3].external_marks), 
              String(marks.sem3.subjects[3].internal_marks),
              String(marks.sem3.subjects[3].obtain_marks)
            ],
            [
              marks.sem3.subjects[4].paper_code, 
              marks.sem3.subjects[4].paper_title, 
              String(marks.sem3.subjects[4].external_marks), 
              String(marks.sem3.subjects[4].internal_marks),
              String(marks.sem3.subjects[4].obtain_marks)
            ],
            [
              marks.sem3.subjects[5].paper_code, 
              marks.sem3.subjects[5].paper_title, 
              String(marks.sem3.subjects[5].external_marks), 
              String(marks.sem3.subjects[5].internal_marks),
              String(marks.sem3.subjects[5].obtain_marks)
            ],
          ] : []
        },
        "4th" : {
          "caption" : "Your Marks This Semester",
          "head" : [
            "Paper Code", "Subject Name", "Theory Marks", "Practical Marks", "Total Marks"
          ],
          "row" : marks?.sem4 ? [
            [
              marks.sem4.subjects[0].paper_code, 
              marks.sem4.subjects[0].paper_title, 
              String(marks.sem4.subjects[0].external_marks), 
              String(marks.sem4.subjects[0].internal_marks),
              String(marks.sem4.subjects[0].obtain_marks)
            ],
            [
              marks.sem4.subjects[1].paper_code, 
              marks.sem4.subjects[1].paper_title, 
              String(marks.sem4.subjects[1].external_marks), 
              String(marks.sem4.subjects[1].internal_marks),
              String(marks.sem4.subjects[1].obtain_marks)
            ],
            [
              marks.sem4.subjects[2].paper_code, 
              marks.sem4.subjects[2].paper_title, 
              String(marks.sem4.subjects[2].external_marks), 
              String(marks.sem4.subjects[2].internal_marks),
              String(marks.sem4.subjects[2].obtain_marks)
            ],
            [
              marks.sem4.subjects[3].paper_code, 
              marks.sem4.subjects[3].paper_title, 
              String(marks.sem4.subjects[3].external_marks), 
              String(marks.sem4.subjects[3].internal_marks),
              String(marks.sem4.subjects[3].obtain_marks)
            ],
            [
              marks.sem4.subjects[4].paper_code, 
              marks.sem4.subjects[4].paper_title, 
              String(marks.sem4.subjects[4].external_marks), 
              String(marks.sem4.subjects[4].internal_marks),
              String(marks.sem4.subjects[4].obtain_marks)
            ],
            [
              marks.sem4.subjects[5].paper_code, 
              marks.sem4.subjects[5].paper_title, 
              String(marks.sem4.subjects[5].external_marks), 
              String(marks.sem4.subjects[5].internal_marks),
              String(marks.sem4.subjects[5].obtain_marks)
            ],
          ] : []
        },
        "5th" : {
          "caption" : "Your Marks This Semester",
          "head" : [
            "Paper Code", "Subject Name", "Theory Marks", "Practical Marks", "Total Marks"
          ],
          "row" : marks?.sem5 ? [
            [
              marks.sem5.subjects[0].paper_code, 
              marks.sem5.subjects[0].paper_title, 
              String(marks.sem5.subjects[0].external_marks), 
              String(marks.sem5.subjects[0].internal_marks),
              String(marks.sem5.subjects[0].obtain_marks)
            ],
            [
              marks.sem5.subjects[1].paper_code, 
              marks.sem5.subjects[1].paper_title, 
              String(marks.sem5.subjects[1].external_marks), 
              String(marks.sem5.subjects[1].internal_marks),
              String(marks.sem5.subjects[1].obtain_marks)
            ],
            [
              marks.sem5.subjects[2].paper_code, 
              marks.sem5.subjects[2].paper_title, 
              String(marks.sem5.subjects[2].external_marks), 
              String(marks.sem5.subjects[2].internal_marks),
              String(marks.sem5.subjects[2].obtain_marks)
            ],
            [
              marks.sem5.subjects[3].paper_code, 
              marks.sem5.subjects[3].paper_title, 
              String(marks.sem5.subjects[3].external_marks), 
              String(marks.sem5.subjects[3].internal_marks),
              String(marks.sem5.subjects[3].obtain_marks)
            ],
            [
              marks.sem5.subjects[4].paper_code, 
              marks.sem5.subjects[4].paper_title, 
              String(marks.sem5.subjects[4].external_marks), 
              String(marks.sem5.subjects[4].internal_marks),
              String(marks.sem5.subjects[4].obtain_marks)
            ],
            [
              marks.sem5.subjects[5].paper_code, 
              marks.sem5.subjects[5].paper_title, 
              String(marks.sem5.subjects[5].external_marks), 
              String(marks.sem5.subjects[5].internal_marks),
              String(marks.sem5.subjects[5].obtain_marks)
            ],
          ] : []
        },
        "6th" : {
          "caption" : "Your Marks This Semester",
          "head" : [
            "Events", "Total Marks", "Obtained Marks"
          ],
          "row" : marks?.sem6 ? [
            [
              marks.sem6.subjects[0].paper_title, 
              "100",
              String(marks.sem6.subjects[0].obtain_marks)
            ],
            [
              marks.sem6.subjects[1].paper_title, 
              "100",
              String(marks.sem6.subjects[1].obtain_marks)
            ],
            [
              marks.sem6.subjects[2].paper_title, 
              "100",
              String(marks.sem6.subjects[2].obtain_marks)
            ],
          ] : []
        },
        
      })
    }
  }, [marks])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-sm md:text-xl lg:text-3xl pl-3 pt-3 text-white">
          Results / Grades <span className="text-slate-800 font-thin">| </span><span className="font-thin"> Your examination performance</span> 
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-5px)] md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)] top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded lg:p-3 p-1 space-y-2">
        {!marks && <div className="bg-white mb-1 rounded p-2 pl-2 w-full h-fit text-xs lg:text-lg">
          <blockquote className="border-l-2 border-red-600 pl-6 italic bg-red-100 py-2">
            We don't have enough data to show your result progress.
          </blockquote>
        </div>}

        {marks && tableData && <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 w-full h-fit space-y-2 shadow-md">
          <FontAwesomeIcon icon={faFileAlt}/> BCA<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-sm"> OverAll Marks and Performance</span>
          <div className="flex rounded gap-3 bg-gray-100 lg:flex-row flex-col">
            <MarksTable caption={tableData.overAll.caption} headData={tableData.overAll.head} rowData={tableData.overAll.row} />
            <div className="bg-white sm:flex sm:items-center sm:justify-center xl:items-start xl:justify-start">
              <MarksGraph 
                labels={[
                  "1st", 
                  "2nd", 
                  "3rd", 
                  "4th", 
                  "5th", 
                  "6th", 
                  "Not Gained"
                ]}
                data={[
                  marks.sem1 ? marks.sem1.subjects[6].total_marks : 0,
                  marks.sem2 ? marks.sem2.subjects[6].total_marks : 0,
                  marks.sem3 ? marks.sem3.subjects[6].total_marks : 0,
                  marks.sem4 ? marks.sem4.subjects[6].total_marks : 0,
                  marks.sem5 ? marks.sem5.subjects[6].total_marks : 0,
                  marks.sem6 ? marks.sem6.subjects[3].total_marks : 0,

                  ((Object.keys(marks).length - 1) * 600 + 300) - 
                  (marks.sem1.subjects[6].total_marks + 
                  marks.sem2.subjects[6].total_marks +
                  marks.sem3.subjects[6].total_marks +
                  marks.sem4.subjects[6].total_marks +
                  marks.sem5.subjects[6].total_marks +
                  marks.sem6.subjects[3].total_marks)
                ]}
                label={String((Object.keys(marks).length - 1) * 600 + 300)}
              />
            </div>
          </div>
        </div>}

        {marks?.sem1 && tableData && <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 w-full h-fit space-y-2 shadow-md">
          <FontAwesomeIcon icon={faFileAlt}/> Semester 1st<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-sm"> Your Marks and Performance</span>
          <div className="flex rounded gap-3 bg-gray-100 lg:flex-row flex-col">
            <MarksTable headData={tableData["1st"].head} caption={tableData["1st"].caption} rowData={tableData["1st"].row} />
            <div className="bg-white sm:flex sm:items-center sm:justify-center xl:items-start xl:justify-start">
            <MarksGraph 
                labels={[
                  String(marks.sem1.subjects[0].paper_code),
                  String(marks.sem1.subjects[1].paper_code),
                  String(marks.sem1.subjects[2].paper_code),
                  String(marks.sem1.subjects[3].paper_code),
                  String(marks.sem1.subjects[4].paper_code),
                  String(marks.sem1.subjects[5].paper_code),
                ]}
                data={[
                  marks.sem1.subjects[0].obtain_marks,
                  marks.sem1.subjects[1].obtain_marks,
                  marks.sem1.subjects[2].obtain_marks,
                  marks.sem1.subjects[3].obtain_marks,
                  marks.sem1.subjects[4].obtain_marks,
                  marks.sem1.subjects[5].obtain_marks,
                  
                  600 - (marks.sem1.subjects[6].total_marks)
                ]}
                label={"Oute of 600"}
              />
            </div>
          </div>
        </div>}

        {marks?.sem2 && tableData && <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 w-full h-fit space-y-2 shadow-md">
          <FontAwesomeIcon icon={faFileAlt}/> Semester 2nd<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-sm"> Your Marks and Performance</span>
          <div className="flex rounded gap-3 bg-gray-100 lg:flex-row flex-col">
            <MarksTable headData={tableData["2nd"].head} caption={tableData["2nd"].caption} rowData={tableData["2nd"].row} />
            <div className="bg-white sm:flex sm:items-center sm:justify-center xl:items-start xl:justify-start">
            <MarksGraph 
                labels={[
                  String(marks.sem2.subjects[0].paper_code),
                  String(marks.sem2.subjects[1].paper_code),
                  String(marks.sem2.subjects[2].paper_code),
                  String(marks.sem2.subjects[3].paper_code),
                  String(marks.sem2.subjects[4].paper_code),
                  String(marks.sem2.subjects[5].paper_code),
                ]}
                data={[
                  marks.sem2.subjects[0].obtain_marks,
                  marks.sem2.subjects[1].obtain_marks,
                  marks.sem2.subjects[2].obtain_marks,
                  marks.sem2.subjects[3].obtain_marks,
                  marks.sem2.subjects[4].obtain_marks,
                  marks.sem2.subjects[5].obtain_marks,
                  
                  600 - (marks.sem2.subjects[6].total_marks)
                ]}
                label="Oute of 600"
              />
            </div>
          </div>
        </div>}

        {marks?.sem3 && tableData && <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 w-full h-fit space-y-2 shadow-md">
          <FontAwesomeIcon icon={faFileAlt}/> Semester 3rd<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-sm"> Your Marks and Performance</span>
          <div className="flex rounded gap-3 bg-gray-100 lg:flex-row flex-col">
            <MarksTable headData={tableData["3rd"].head} caption={tableData["3rd"].caption} rowData={tableData["3rd"].row} />
            <div className="bg-white sm:flex sm:items-center sm:justify-center xl:items-start xl:justify-start">
            <MarksGraph 
                labels={[
                  String(marks.sem3.subjects[0].paper_code),
                  String(marks.sem3.subjects[1].paper_code),
                  String(marks.sem3.subjects[2].paper_code),
                  String(marks.sem3.subjects[3].paper_code),
                  String(marks.sem3.subjects[4].paper_code),
                  String(marks.sem3.subjects[5].paper_code),
                ]}
                data={[
                  marks.sem3.subjects[0].obtain_marks,
                  marks.sem3.subjects[1].obtain_marks,
                  marks.sem3.subjects[2].obtain_marks,
                  marks.sem3.subjects[3].obtain_marks,
                  marks.sem3.subjects[4].obtain_marks,
                  marks.sem3.subjects[5].obtain_marks,
                  
                  600 - (marks.sem3.subjects[6].total_marks)
                ]}
                label="Oute of 600"
              />
            </div>
          </div>
        </div>}

        {marks?.sem4 && tableData && <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 w-full h-fit space-y-2 shadow-md">
          <FontAwesomeIcon icon={faFileAlt}/> Semester 4th<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-sm"> Your Marks and Performance</span>
          <div className="flex rounded gap-3 bg-gray-100 lg:flex-row flex-col">
            <MarksTable headData={tableData["4th"].head} caption={tableData["4th"].caption} rowData={tableData["4th"].row} />
            <div className="bg-white sm:flex sm:items-center sm:justify-center xl:items-start xl:justify-start">
            <MarksGraph 
                labels={[
                  String(marks.sem4.subjects[0].paper_code),
                  String(marks.sem4.subjects[1].paper_code),
                  String(marks.sem4.subjects[2].paper_code),
                  String(marks.sem4.subjects[3].paper_code),
                  String(marks.sem4.subjects[4].paper_code),
                  String(marks.sem4.subjects[5].paper_code),
                ]}
                data={[
                  marks.sem4.subjects[0].obtain_marks,
                  marks.sem4.subjects[1].obtain_marks,
                  marks.sem4.subjects[2].obtain_marks,
                  marks.sem4.subjects[3].obtain_marks,
                  marks.sem4.subjects[4].obtain_marks,
                  marks.sem4.subjects[5].obtain_marks,
                  
                  600 -(marks.sem4.subjects[6].total_marks)
                ]}
                label="Oute of 600"
              />
            </div>
          </div>
        </div>}

        {marks?.sem5 && tableData && <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 w-full h-fit space-y-2 shadow-md">
          <FontAwesomeIcon icon={faFileAlt}/> Semester 5th<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-sm"> Your Marks and Performance</span>
          <div className="flex rounded gap-3 bg-gray-100 lg:flex-row flex-col">
            <MarksTable headData={tableData["5th"].head} caption={tableData["5th"].caption} rowData={tableData["5th"].row} />
            <div className="bg-white sm:flex sm:items-center sm:justify-center xl:items-start xl:justify-start">
            <MarksGraph 
                labels={[
                  String(marks.sem5.subjects[0].paper_code),
                  String(marks.sem5.subjects[1].paper_code),
                  String(marks.sem5.subjects[2].paper_code),
                  String(marks.sem5.subjects[3].paper_code),
                  String(marks.sem5.subjects[4].paper_code),
                  String(marks.sem5.subjects[5].paper_code),
                ]}
                data={[
                  marks.sem5.subjects[0].obtain_marks,
                  marks.sem5.subjects[1].obtain_marks,
                  marks.sem5.subjects[2].obtain_marks,
                  marks.sem5.subjects[3].obtain_marks,
                  marks.sem5.subjects[4].obtain_marks,
                  marks.sem5.subjects[5].obtain_marks,
                  
                  600 -
                  (marks.sem5.subjects[6].total_marks)
                ]}
                label="Oute of 600"
              />
            </div>
          </div>
        </div>}
        {marks?.sem6 && tableData && <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 w-full h-fit space-y-2 shadow-md">
          <FontAwesomeIcon icon={faFileAlt}/> Semester 6th<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-sm"> Your Marks and Performance</span>
          <div className="flex rounded gap-3 bg-gray-100 lg:flex-row flex-col">
            <MarksTable headData={tableData["6th"].head} caption={tableData["6th"].caption} rowData={tableData["6th"].row} />
            <div className="bg-white sm:flex sm:items-center sm:justify-center xl:items-start xl:justify-start">
            <MarksGraph 
                labels={[
                  String(marks.sem6.subjects[0].paper_title),
                  String(marks.sem6.subjects[1].paper_title),
                  String(marks.sem6.subjects[2].paper_title),
                  "Not Gained"
                ]}
                data={[
                  marks.sem6.subjects[0].obtain_marks,
                  marks.sem6.subjects[1].obtain_marks,
                  marks.sem6.subjects[2].obtain_marks,
                  
                  300 -
                  (marks.sem6.subjects[3].total_marks)
                ]}
                label="Oute of 300"
              />
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Results
