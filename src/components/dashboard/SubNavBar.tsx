import { faAddressBook, faFileInvoice, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const admissionSubNav = [
  { name: 'Personal Info', href: "/student-dashboard/admission/personal-info", current: true, list: true, icon: faUser },
  { name: 'Address Info', href: "/student-dashboard/admission/address", current: false, list: true, icon:faAddressBook },
  { name: 'Qualifications', href: "/student-dashboard/admission/qualifications", current: false, list: true, icon:faFileInvoice },
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}
const SubNavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(pathname);
  }, [pathname])
  return (
    <div className="flex flex-col items-start space-y-2 w-full p-3 pb-0">
      {admissionSubNav.map((item) => {
          if(item.list) {
            return <Link to={item.href}
              key={item.name}
              className={ classNames(
                path === item.href ? "bg-orange-100 text-orange-600" : "hover:text-slate-900 hover:bg-gray-100 text-slate-500" , "flex items-center gap-3 w-full font-semibold p-2 rounded-md  hover:pl-3 duration-75 "
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {<FontAwesomeIcon icon={item.icon as any} />}
              {item.name}
            </Link>
          }
        })}
    </div>
  )
}

export default SubNavBar
