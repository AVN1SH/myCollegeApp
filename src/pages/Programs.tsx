import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export interface CourseType {
  name: string
  url : string
  info : string;
  description: [{
    title : string;
    content : string;
  }]
}

const Programs = () => {
  const [courses, setCourses] = useState< CourseType[] | null>(null);

  useEffect(() => {
    fetch('/courses.json')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-2 py-16 sm:px-4 sm:py-24 lg:max-w-full lg:px-6">
        <h2 className="sr-only">Products</h2>

        <div className="bg-white grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {courses?.map((course, index) => (
            <Link key={course.name} to={`/programs/${index}`} className="group shadow-md overflow-hidden max-w-md md:max-w-full xl:max-w-md mx-auto rounded-xl hover:shadow-[0_0_10px_rgba(0,0,0,0.45)] duration-300">
                <div className="xs:flex md:block">
                  <div className="xs:shrink-0 md:block">
                    <img 
                      className="h-[200px] w-full object-center object-cover md:h-[200px] " 
                      src={course.url}
                      alt={course.name} 
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{course.name}</div>
                    <p className="mt-2 text-slate-500">{course.info.slice(0, 100) + "..."}</p>
                  </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Programs