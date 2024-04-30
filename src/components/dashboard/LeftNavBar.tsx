import { faBookOpen, faChalkboard, faChalkboardUser, faChartPie, faCheckToSlot, faCreditCard, faFileInvoice, faFileLines, faFolderOpen, faHome, faMessage, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SubNavBar from "./SubNavBar"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const navigation = [
  { name: 'Overview', href: "/student-dashboard/overview", current: true, list: true, icon: faHome, subNav : false},
  { name: 'Admissions', href: "/student-dashboard/admission/personal-info", current: false, list: true, icon:faCheckToSlot, subNav : true },
  { name: 'Documentations', href: "/student-dashboard/documentation", current: false, list: true, icon:faFileLines, subNav : false },
  { name: 'Payment', href: '#', current: false, list: true, icon:faCreditCard, subNav : false },
  { name: 'My Classes', href: '#', current: false, list: false, icon:faChalkboardUser, subNav : false },
  { name: 'Results/Grades', href: '#', current: false, list: false, icon:faFileInvoice, subNav : false },
  { name: 'Upcoming Assignments', href: '#', current: false, list: false, icon:faFolderOpen, subNav : false },
  { name: 'Syllabus', href: '#', current: false, list: false, icon:faBookOpen, subNav : false },
  { name: 'Progress Report', href: '#', current: false, list: false, icon:faChartPie, subNav : false },
  { name: 'Teachers', href: '#', current: false, list: false, icon:faUserTie, subNav : false },
  { name: "FeedBack", href: '#', current: false, list: false, icon:faMessage, subNav : false }
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}
const LeftNavBar = () => {
  const [active, setActive] = useState(navigation[0].name);

  return (
    <div className="flex fixed bg-white min-w-[50px] h-[calc(100%-64px)] md:min-w-[280px] shadow-[0_0_7px_#7e7e7e] mt-16">
      <div className="flex flex-col items-start space-y-7 w-full h-full p-3 pt-3 overflow-y-auto custom-scroll-bar">
        {navigation.map((item) => {
          if(item.list) {
            return <div className="w-full" key={item.name}>
                <Link to={item.href}
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                }}
                className={ classNames(
                  active === item.name ? "bg-orange-100 text-orange-600" : "hover:text-slate-900 hover:bg-gray-100 text-slate-500" , "flex items-center gap-3 w-full font-semibold p-2 rounded-md  hover:pl-3 duration-75 "
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {<FontAwesomeIcon icon={item.icon as any} />}
                {item.name}
              </Link>
              {active === item.name && item.subNav ? <SubNavBar /> : ''} 
            </div>
          }
        })}
      </div>
    </div>
  )
}

export default LeftNavBar
