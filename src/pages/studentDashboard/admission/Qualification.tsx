import QualificationForm from "@/components/accordion/QualificationForm"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react";

const Qualification = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-sm md:text-xl lg:text-3xl pl-3 pt-3 text-white">
          Admission <span className="text-slate-800 font-thin">| </span><span className="font-thin">your Qualifications</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-5px)] md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)] top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded lg:p-3 p-1">
        <div className="flex justify-center min-h-screen bg-gray-100 w-full">
          <div className="w-full max-w-2xl p-2 lg:p-8 space-y-4 lg:space-y-8 bg-white rounded-lg shadow-md my-3">
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight lg:text-5xl mb-3 lg:mb-6 text-slate-800">
                <FontAwesomeIcon icon={faGraduationCap} /> Admission Form
              </h1>
              <p className="mb-1 lg:mb-4 text-xs lg:text-sm font-semibold text-orange-600"><b className="text-slate-600">Qualification Information,</b> Please be carefull while filling the form details.</p>
            </div>
            <QualificationForm degree="High School"/>
            <QualificationForm degree="Intermediate"/>
            <QualificationForm degree="Under Graduate"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualification
