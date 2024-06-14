import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Data {
  newsEvents : {
    id: string
    title: string
    date: string
    img : string;
    brief: string 
    detailed: string
  }[]
}

const EventAndNews = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch('/eventAndNews.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  return (
    <div className=" ml-2 w-[calc(100%-20px)] p-2 mt-5 bg-slate-200 rounded">
      <div className="font-semibold text-2xl text-slate-700 bg-white mb-2 rounded p-2 w-full shadow-md"><FontAwesomeIcon icon={faCalendar}/> Events And News<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-md">AnyOne Can Attend these Events.</span>
      </div>
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-1 lg:grid-cols-2">
        {data?.newsEvents.map((value) => (
          <Link key={value.title} to='#' className="group shadow-[0_0_5px_rgba(0,0,0,0.15)] overflow-hidden max-w-md md:max-w-full mx-auto rounded bg-white md:h-[180px] hover:shadow-[0_0_10px_rgba(0,0,0,0.45)] duration-300 md:min-w-full">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img 
                    className="h-[400px] w-full object-center object-cover md:w-40 md:h-48" 
                    src={`/images/event/${value.img}`}
                    alt={value.id} 
                  />
                </div>
                <div className="p-3 h-fit">
                  <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold">{value.title}</div>
                  <div className="text-xs"><span className="font-semibold">Date : </span>{value.date}</div>
                  <p className="block mt-1 text-md leading-tight font-medium text-black hover:underline">{value.brief}</p>
                  <p className="mt-2 text-slate-500 text-sm">{value.detailed.slice(0, 80) + "..."}</p>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventAndNews
