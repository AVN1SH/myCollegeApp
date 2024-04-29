import { faBookOpen, faChalkboard, faChalkboardUser, faChartPie, faCheckToSlot, faCreditCard, faCube, faFileInvoice, faFileLines, faFolderOpen, faHome, faMessage, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

const navigation = [
  { name: 'Overview', href: '#', current: true, list: true, icon: faHome },
  { name: 'Admissions', href: '#', current: false, list: true, icon:faCheckToSlot },
  { name: 'Documentations', href: '#', current: false, list: true, icon:faFileLines },
  { name: 'Payment', href: '#', current: false, list: true, icon:faCreditCard },
  { name: 'My Classes', href: '#', current: false, list: false, icon:faChalkboardUser },
  { name: 'Results/Grades', href: '#', current: false, list: false, icon:faFileInvoice },
  { name: 'Upcoming Assignments', href: '#', current: false, list: false, icon:faFolderOpen },
  { name: 'Syllabus', href: '#', current: false, list: false, icon:faBookOpen },
  { name: 'Progress Report', href: '#', current: false, list: false, icon:faChartPie },
  { name: 'Teachers', href: '#', current: false, list: false, icon:faUserTie },
  { name: "FeedBack", href: '#', current: false, list: false, icon:faMessage }
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}
const LeftNavBar = () => {
  return (
    <div className="flex fixed bg-white min-w-[50px] h-[calc(100%-64px)] md:min-w-[280px] shadow-[0_0_7px_#7e7e7e] mt-16">
      <div className="flex flex-col items-start space-y-7 w-full h-full p-3 pt-3 overflow-y-auto custom-scroll-bar">
        {navigation.map((item) => {
          if(item.list) {
            return <a
              key={item.name}
              href={item.href}
              className={ classNames(
                item.current ? "bg-orange-100 text-orange-600" : "hover:text-slate-900 hover:bg-gray-100 text-slate-500" , "flex items-center gap-3 w-full font-semibold p-2 rounded-md  hover:pl-3 duration-75 "
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {<FontAwesomeIcon icon={item.icon as any} />}
              {item.name}
            </a>
          }
        })}
      </div>
    </div>
  )
}

export default LeftNavBar
