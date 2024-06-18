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
    <div className="flex flex-col items-start space-y-2 w-full py-3 lg:py-0 lg:p-3 pb-0 lg:mt-1">
      {admissionSubNav.map((item) => {
          if(item.list) {
            return <Link to={item.href}
              key={item.name}
              className={ classNames(
                path === item.href ? "lg:bg-orange-100 text-orange-600" : "hover:text-slate-900 hover:bg-gray-100 text-slate-500" , "flex items-center md:gap-3 w-full font-semibold py-2 md:py-2 lg:py-0 lg:p-2 rounded-md md:pl-3 lg:pl-2 md:hover:pl-3 duration-75 transition-[1s]"
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {<FontAwesomeIcon icon={item.icon as any}  className="text-sm lg:text-sm"/>}
              <p className="hidden lg:block lg:p-2 rounded-md  lg:hover:pl-3 duration-75">{item.name}</p>
            </Link>
          }
        })}
    </div>
  )
}

export default SubNavBar
