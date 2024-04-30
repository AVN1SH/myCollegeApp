import QualificationForm from "@/components/accordion/QualificationForm"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Qualification = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md my-3">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-slate-800">
            <FontAwesomeIcon icon={faGraduationCap} /> Admission Form
          </h1>
          <p className="mb-4 text-md font-semibold text-orange-600"><b className="text-slate-600">Qualification Information,</b> Please be carefull while filling the form details.</p>
        </div>
        <QualificationForm degree="High School"/>
        <QualificationForm degree="Intermediate"/>
        <QualificationForm degree="Under Graduate"/>
      </div>
    </div>
  )
}

export default Qualification
