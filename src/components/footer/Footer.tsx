import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faGithub, faInstagram, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const student = [
  { name: 'Student Portal', href: '#', current: true },
  { name: 'Admissions', href: '#', current: false },
  { name: 'Programs', href: '#', current: false },
  { name: 'Library', href: '#', current: false },
  { name: "News & Events", href: '#', current: false }
]
const faculty = [
  { name: 'Faculty Portal', href: '#', current: true },
  { name: 'Classes', href: '#', current: false },
  { name: 'Committees', href: '#', current: false },
  { name: 'Feedback', href: '#', current: false },
  { name: "Administrative Tasks", href: '#', current: false }
]
const links = [
  { name: 'Academic Calendar', href: '#', current: true },
  { name: 'Course Catalog', href: '#', current: false },
  { name: 'Campus Resources', href: '#', current: false },
  { name: 'IT Support', href: '#', current: false },
  { name: "Result Section", href: '#', current: false }
]
const site = [
  { name: 'Copyright Notice', href: '#', current: true },
  { name: 'Feedback Form', href: '#', current: false },
  { name: 'Report a Problem', href: '#', current: false },
  { name: 'Privacy Policy', href: '#', current: false },
  { name: "Terms of Use", href: '#', current: false }
]

const Footer = () => {
  return (
    <footer className="flex flex-col p-5 border-slate-200 border-2 border-solid rounded m-2 bg-white">
      <div className="flex flex-1 flex-col items-center justify-between gap-5 xl:flex-row ">
        <div className="w-full flex flex-col items-start gap-4">
          <div className="flex items-end gap-3">
          <FontAwesomeIcon icon={faGraduationCap} className="text-5xl text-slate-800" />
          <h1 className="text-3xl font-bold text-slate-800">My College</h1>
          </div>
          <p className="text-lg font-semibold text-slate-600">
            Discover the world of new technologies with advance course and learning tools and methods.
          </p>
          <div className="flex gap-3 items-center justify-between w-[250px] text-2xl text-slate-600 overflow-hidden">
            <FontAwesomeIcon icon={faFacebook} className="hover:text-orange-600 hover:cursor-pointer duration-150"/>
            <FontAwesomeIcon icon={faInstagram} className="hover:text-orange-600 hover:cursor-pointer duration-150" />
            <FontAwesomeIcon icon={faXTwitter} className="hover:text-orange-600 hover:cursor-pointer duration-150" />
            <FontAwesomeIcon icon={faGithub} className="hover:text-orange-600 hover:cursor-pointer duration-150" />
            <FontAwesomeIcon icon={faYoutube} className="hover:text-orange-600 hover:cursor-pointer duration-150" />
          </div>
          <hr className="block xl:hidden m-3 border-gray-300"/>
        </div>
        <div className="flex space-x-2 justify-between w-full">
          <div className="flex flex-col whitespace-nowrap space-y-4 w-40">
            <h1 className="font-bold text-xl text-slate-800 ">Student</h1>
            {student.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:ml-1 hover:text-orange-600 duration-75"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col whitespace-nowrap space-y-4 w-40">
            <h1 className="font-bold text-xl text-slate-800 ">Faculty</h1>
            {faculty.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:ml-1 hover:text-orange-600 duration-75"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col whitespace-nowrap space-y-4 w-40">
            <h1 className="font-bold text-xl text-slate-800 ">Quick Links</h1>
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:ml-1 hover:text-orange-600 duration-75"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col whitespace-nowrap space-y-4 w-40">
            <h1 className="font-bold text-xl text-slate-800 ">Site Info.</h1>
            {site.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:ml-1 hover:text-orange-600 duration-75"
              >
                {item.name}
              </a>
            ))}
          </div>
          
        </div>
      </div>
      <div>
        <hr className="m-3 border-gray-300"/>
        <p className="text-slate-800"><span className="text-red-400">©</span> All rights reserved <span className="text-slate-300">|</span> Created and Designed by <Link to="https://github.com/AVN1SH" className="text-lime-600 underline font-semibold">Avnish Kr. Sharma</Link><span className="text-slate-300"> |</span> Backend Developer <Link to="https://github.com/rajkumarvikas" className="text-lime-600 underline font-semibold">Vikas Kumar</Link></p>
      </div>
    </footer>
  )
}

export default Footer
