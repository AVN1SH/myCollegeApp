import syllabus from "@/../public/syllabus.json"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { useState } from "react";
function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

const Syllabus = () => {
  // const userData = useSelector((state : AuthState) => state.userData);
  const [track, setTrack] = useState(false);
  const [trackByData, setTrackByData] = useState('');
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-3xl pl-3 pt-3 text-white">
          Syllabus | <span className="font-thin">Topics That You Coverd Through Out 
          The Session</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded p-3">
        <div className="flex flex-col bg-white mx-auto w-full rounded">
          {syllabus.map((data : any) => 
            <Accordion type="single" key={data.duration} collapsible className="px-3">
              <AccordionItem value="item-1">
                <AccordionTrigger className={classNames(track && trackByData === data.duration ? "text-orange-500" : "", "font-bold text-xl hover:no-underline hover:text-orange-500 hover:pl-2")}
                onClick={() => {
                  setTrackByData(data.duration);
                  setTrack(!track);
                }}
                >{data.duration}</AccordionTrigger>
                <AccordionContent>
                {data.content.map((data : any) => 
                  <Accordion type="single" key={data.duration} collapsible className="px-3">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-bold text-lg hover:no-underline text-slate-600 hover:text-orange-500 hover:pl-2">{data.duration}</AccordionTrigger>
                      <AccordionContent className="font-semibold text-slate-500 p-3">
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
