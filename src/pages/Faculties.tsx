import { Link } from "react-router-dom";
import faculties from "../../public/faculties.json"

const Faculties = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-2 py-16 sm:px-4 sm:py-24 lg:max-w-full lg:px-6">
        <h2 className="sr-only">Products</h2>

        <div className="bg-white grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 2xl:grid-cols-3">
          {faculties.map((faculty) => (
            <Link key={faculty.name} to='#' className="group shadow-md overflow-hidden max-w-md md:max-w-full 2xl:max-w-md mx-auto rounded-xl">
                <div className="md:flex 2xl:block">
                  <div className="md:shrink-0 2xl:block">
                    <img 
                      className="h-[400px] w-full object-top object-cover md:h-full md:w-48 2xl:h-[400px] 2xl:w-full" 
                      src="../../../images/teacher2.jpg"
                      alt={faculty.name} 
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{faculty.name}</div>
                    <div><span className="font-semibold">AGE : </span>{faculty.age} <span className="text-orange-600"> | </span><span className="font-semibold">Qualification : </span>{faculty.qualification}</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{faculty.specialization}</a>
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