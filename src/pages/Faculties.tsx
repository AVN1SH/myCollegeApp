import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export interface FacultyType {
  photo_url: string,
  name: string
  age : number
  specialization: string 
  qualification: string 
  description: string
  courses: string 
}

const Faculties = () => {
  const [faculties, setFaculties] = useState< FacultyType[] | null>(null);

  useEffect(() => {
    fetch('/faculties.json')
      .then((response) => response.json())
      .then((data) => setFaculties(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-1 sm:px-4 py-24 lg:max-w-full lg:px-6">
        <h2 className="sr-only">Products</h2>

        <div className="bg-white grid grid-cols-1 gap-x-2 lg:gap-x-6 gap-y-4 lg:gap-y-10 lg:grid-cols-2 2xl:grid-cols-4">
          {faculties?.map((faculty, index) => (
            <Link key={faculty.name} to={`/profile/${index}`} className="group shadow-md overflow-hidden max-w-md md:max-w-full 2xl:max-w-md mx-auto rounded-xl hover:shadow-[0_0_10px_rgba(0,0,0,0.45)] duration-300">
                <div className="md:flex 2xl:block">
                  <div className="md:shrink-0 2xl:block">
                    {faculty.photo_url ? <img 
                      className="h-[400px] w-full object-center object-cover md:h-60 md:w-48 2xl:h-[400px] 2xl:w-full" 
                      src={`/images/faculty/${faculty.photo_url}`}
                      alt={faculty.name} 
                    /> : <div className="h-[400px] w-full md:h-60 md:w-48 2xl:w-full 2xl:h-[400px] flex items-center justify-center p-6"><FontAwesomeIcon icon={faUserTie} className="p-8 md:p-2 w-fit h-fit text-slate-400"/></div>}
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{faculty.name}</div>
                    <div className="text-sm md:text-sm"><span className="font-semibold">AGE : </span>{faculty.age} <span className="text-orange-600"> | </span><span className="font-semibold">Qualification : </span>{faculty.qualification}
                    </div>
                    <Link to="#" className="block mt-1 text:md md:text-lg leading-tight font-medium text-black hover:underline">{faculty.specialization}</Link>
                    <p className="mt-2 text-slate-500">{faculty.description.slice(0, 100) + "..."}</p>
                  </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faculties