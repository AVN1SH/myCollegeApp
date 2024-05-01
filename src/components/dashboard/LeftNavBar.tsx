import { faBookOpen, faChalkboard, faChalkboardUser, faChartPie, faCheckToSlot, faCreditCard, faFileInvoice, faFileLines, faFolderOpen, faHome, faMessage, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SubNavBar from "./SubNavBar"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const navigation = [
  { name: 'Overview', href: "/student-dashboard/overview", current: true, list: true, icon: faHome, subNav : ''},
  { name: 'Admissions', href: "/student-dashboard/admission", current: false, list: true, icon:faCheckToSlot, subNav : "/personal-info" },
  { name: 'Documentations', href: "/student-dashboard/documentation", current: false, list: true, icon:faFileLines, subNav : '' },
  { name: 'Payment', href: '/student-dashboard/payment', current: false, list: true, icon:faCreditCard, subNav : '' },
  { name: 'My Classes', href: '#', current: false, list: false, icon:faChalkboardUser, subNav : '' },
  { name: 'Results/Grades', href: '#', current: false, list: false, icon:faFileInvoice, subNav : '' },
  { name: 'Upcoming Assignments', href: '#', current: false, list: false, icon:faFolderOpen, subNav : '' },
  { name: 'Syllabus', href: '#', current: false, list: false, icon:faBookOpen, subNav : '' },
  { name: 'Progress Report', href: '#', current: false, list: false, icon:faChartPie, subNav : '' },
  { name: 'Teachers', href: '#', current: false, list: false, icon:faUserTie, subNav : '' },
  { name: "FeedBack", href: '#', current: false, list: false, icon:faMessage, subNav : '' }
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}
const LeftNavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <div className="flex fixed bg-white min-w-[50px] h-[calc(100%-64px)] md:min-w-[280px] shadow-[0_0_7px_#7e7e7e] mt-16">
      <div className="flex flex-col items-start space-y-7 w-full h-full p-3 pt-3 overflow-y-auto custom-scroll-bar">
        {navigation.map((item) => {
          if(item.list) {
            return <div className="w-full" key={item.name}>
                <Link to={item.subNav ? item.href + item.subNav : item.href}
                key={item.name}
                className={ classNames(
                  path.includes(item.href) ? "bg-orange-100 text-orange-600" : "hover:text-slate-900 hover:bg-gray-100 text-slate-500" , "flex items-center gap-3 w-full font-semibold p-2 rounded-md  hover:pl-3 duration-75 "
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {<FontAwesomeIcon icon={item.icon as any} />}
                {item.name}
              </Link>
              {path.includes(item.href) && item.subNav ? <SubNavBar /> : ''} 
            </div>
          }
        })}
      </div>
    </div>
  )
}

export default LeftNavBar
