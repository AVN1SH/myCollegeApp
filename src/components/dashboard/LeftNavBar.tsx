import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SubNavBar from "./SubNavBar"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { stdNav, facultyNav } from "../../utils/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}
const LeftNavBar = () => {
  const userData = useSelector((state : RootState) => state.authSlice.userData)
  const location = useLocation();
  const { pathname } = location;
  const [path, setPath] = useState(location.pathname);
  const admissionStats = useSelector((state : RootState) => state.stdSlice.admissionStatus);
  // const [facultyStats, setFacultyStats] = useState(true);

  useEffect(() => {
    setPath(pathname);
    console.log(admissionStats)
  }, [pathname]);


  return userData && (
    <div className="flex fixed bg-white min-w-[50px] h-[calc(100%-64px)] md:min-w-[280px] shadow-[0_0_7px_#7e7e7e] mt-16">
      <div className={classNames(userData ? "pb-[70px]" : '', "flex flex-col items-start space-y-7 w-full h-full p-3 pt-3 overflow-y-auto custom-scroll-bar")}>
        {(userData?.role === "student" ? stdNav : facultyNav).map((item) => {
          if((userData?.role === 'faculty') || admissionStats ? (item.list === 'both' || item.list === '2') : (item.list === '1' || item.list === 'both')){
            return <div className="w-full whitespace-nowrap" key={item.name}>
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
        {userData && <div className="fixed flex items-center gap-4 pl-4 bg-white border-t-[1px] border-slate-300 border-solid bottom-0 left-0 w-[277.5px] h-[60px] hover:cursor-pointer hover:bg-orange-500 hover:text-white duration-300">
          {userData.photo ? <img className=" w-[40px] h-[40px] rounded-full object-cover object-center border-slate-500 border-solid border-2" src={userData.photo} /> : <FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px] rounded-full border-slate-500 border-solid border-2 p-2 bg-slate-700 text-slate-300"/>}
          <p className="text-slate-500 text-lg font-bold">{userData.first_name + ' ' + (userData.middle_name ? userData.middle_name : '') + ' ' + (userData.last_name ? userData.last_name : '')}</p>
        </div>}
      </div>
    </div>
  )
}

export default LeftNavBar
