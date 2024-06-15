import { faChartPie, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Testimonials {
  title : string;
  items : [{
    quote : string;
    name : string;
    class : string;
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
        <div className="font-semibold text-2xl text-slate-700 bg-white mb-2 rounded p-2 w-full shadow-md"><FontAwesomeIcon icon={faChartPie}/> Testimonials<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-md">What Our Student Say.</span>
        </div>
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.items.map((value) => (
          <Link key={value.name} to='#' className="group shadow-md overflow-hidden max-w-md md:max-w-full mx-auto rounded-xl bg-white hover:shadow-[0_0_10px_rgba(255,77,0,0.45)] md:min-h-[100px] duration-75">
            <div className="p-3 h-fit">
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-500 uppercase tracking-wide text-md  font-semibold ">
                  <FontAwesomeIcon icon={faUser} className="w-[13px] h-[13px] rounded-full border-slate-500 border-solid border-2 p-2 bg-slate-700 text-slate-300"/>
                  {value.name}
                  <FontAwesomeIcon icon={faMessage} />
                </div>
                <div className="text-xs"><span className="font-semibold">Class : </span>{value.class}</div>
              </div>
              <p className="block mt-2 text-sm leading-tight font-semibold text-slate-600">{value.quote}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Testimonials
