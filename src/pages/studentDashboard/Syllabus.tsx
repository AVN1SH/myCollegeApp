import syllabus from "@/../public/syllabus.json"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { useEffect, useState } from "react";
function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

const Syllabus = () => {
  // const userData = useSelector((state : AuthState) => state.userData);
  const [track, setTrack] = useState(false);
  const [trackByData, setTrackByData] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-sm md:text-xl lg:text-3xl pl-3 pt-3 text-white">
          Syllabus <span className="text-slate-800 font-thin">| </span><span className="font-thin">Topics That You Coverd Through Out 
          The Session</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-5px)] md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)] top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded lg:p-3 p-1">
        <div className="flex flex-col bg-white mx-auto w-full rounded">
          {syllabus.map((data : any) => 
            <Accordion type="single" key={data.duration} collapsible className="px-3">
              <AccordionItem value="item-1">
                <AccordionTrigger className={classNames(track && trackByData === data.duration ? "text-orange-500" : "", "font-bold text-sm lg:text-xl hover:no-underline hover:text-orange-500 hover:pl-2")}
                onClick={() => {
                  setTrackByData(data.duration);
                  setTrack(!track);
                }}
                >{data.duration}</AccordionTrigger>
                <AccordionContent>
                {data.content.map((data : any) => 
                  <Accordion type="single" key={data.duration} collapsible className="px-3">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-bold text-xs lg:text-lg hover:no-underline text-slate-600 hover:text-orange-500 hover:pl-2">{data.duration}</AccordionTrigger>
                      <AccordionContent className="font-semibold text-slate-500 p-3 text-[10px]">
                        {data.topics}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </div>
    </div>
  )
}

export default Syllabus
