import { faChartPie, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


interface Testimonials {
  title : string;
  items : [{
    quote : string;
    name : string;
    img ?: string;
    class : string;
    courses: string[],
    gpa: number,
    extracurricular: string[],
    contact: string;
  }]
}

const Testimonials = () => {
  const [data, setData] = useState<Testimonials | null>(null);

  useEffect(() => {
    fetch('/testimonials.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  return (
    <div className="bg-slate-200 rounded w-[calc(100%-20px)] ml-2 p-2 mt-5">
      <div className="">
        <div className="font-semibold text-lg lg:text-2xl text-slate-700 bg-white mb-2 rounded p-2 w-full shadow-md"><FontAwesomeIcon icon={faChartPie}/> Testimonials<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin">What Our Student Say.</span>
        </div>
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.items.map((value) => (
          <Drawer>
            <DrawerTrigger asChild>
              <Link key={value.name} to='#' className="group shadow-md overflow-hidden max-w-md md:max-w-full mx-auto rounded-xl bg-white hover:shadow-[0_0_10px_rgba(255,77,0,0.45)] md:min-h-[100px] duration-75">
                <div className="p-3 h-fit">
                  <div className=" flex items-center justify-between">
                    <div className="flex items-center gap-2 text-indigo-500 uppercase tracking-wide text-sm lg:text-[16px] font-semibold whitespace-nowrap">
                      { value.img 
                        ? <img src={`/images/students/${value.img}`} alt={value.name} className="w-8 h-8 rounded-full object-cover object-top" /> 
                        : <FontAwesomeIcon icon={faUser} className="w-[13px] h-[13px] rounded-full border-slate-500 border-solid border-2 p-2 bg-slate-700 text-slate-300"/>
                      }
                      {value.name}
                      <FontAwesomeIcon icon={faMessage} />
                    </div>
                    <div className="text-xs"><span className="font-semibold">Class : </span>{value.class}</div>
                  </div>
                  <p className="block mt-2 text-sm leading-tight font-semibold text-slate-600">{value.quote}</p>
                </div>
              </Link>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto container flex flex-col lg:flex-row">
                <div className="flex-[1] p-2 mx-auto lg:mx-0">
                  { value.img ? <img 
                    className="h-[full] w-[120px] object-center object-cover md:w-[200px] lg:h-[300px] lg:w-[280px] rounded-xl" 
                    src={`/images/students/${value.img}`}
                  />
                  : <FontAwesomeIcon icon={faUser} className="w-[120px] h-full lg:w-[300px] lg:h-[300px] rounded-xl border-slate-500 border-solid border-2 p-2 bg-slate-700 text-slate-300"/>}
                </div>
                <div className="flex-[3] container flex flex-col justify-between">
                  <div>
                    <DrawerHeader className="flex flex-col items-start">
                      <DrawerTitle><div className="uppercase tracking-wide text-sm lg:text-[16px] text-indigo-500 font-semibold">{value.name}</div></DrawerTitle>
                      <div className="text-xs"><span className="font-semibold ">Date : </span>{value.class}</div>
                      <DrawerDescription><p className="block mt-1 text-sm lg:text-[18px] leading-tight font-medium text-black">{value.quote}</p></DrawerDescription>
                      <p className="mt-2 text-slate-500 text-sm lg:text-[16px]"><span className="font-semibold">Specialization : </span>{value.courses.map((course) => course + ', ')}</p>
                      <p className="mt-2 text-slate-500 text-sm lg:text-[16px]"><span className="font-semibold">Extra Curricular : </span>{value.extracurricular.map((course) => course + ', ')}</p>
                      <p className="font-semibold mt-2 text-yellow-500 text-sm lg:text-[16px]"><span className="text-slate-500">GPA :  </span>{value.gpa} ⭐</p>
                      <p className="mt-2 text-indigo-500 text-sm lg:text-[16px]"><span className="font-semibold text-slate-500">Contact : </span>{value.contact}</p>
                    </DrawerHeader>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline" className="w-fit px-[150px] lg:px-[200px]">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Testimonials
