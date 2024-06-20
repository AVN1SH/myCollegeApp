import djangoService from "@/Django/django"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/rightSheet"
import { RootState } from "@/store/store"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { faCheck, faClock} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

interface Data {
  id : number;
  date : string;
  description : string;
  start : string;
  end : string;
  faculty_name : string;
  course : string;
}

const Notification = () => {
  const [data, setData] = useState<Data[]>();
  const userData = useSelector((state : RootState) => state.authSlice.userData);
  const navigate = useNavigate();
  const [read, setRead] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      try {
        const response = await djangoService.stdClass({
          course : userData?.course || '',
          date : date?.toLocaleString("en-GB", {year : "numeric", day : "numeric", month : "numeric"}) || ''
        });
        
        if(response) {
          console.log("hello",response);
          const arr : Data[] = [];
          Object.values(response).forEach((value) => {
            arr.push(value as Data);
          });
          setData(arr);
        }
      } catch (error : any) {
        if(Number(error.message) >= 400) {
          console.log("Error while fetching data");
        }
      }
    }

    fetchData();
    setRead(false);
  }, []);
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex shrink-0 relative">
          <FontAwesomeIcon icon={faBell} className="text-lg text-slate-200 px-[12px] py-[11px] rounded-full bg-slate-600 hover:cursor-pointer hover:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-[1px] focus:ring-offset-gray-800 border-solid border-slate-500 border-[1px]" /> 
          {!read && <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">Notification 
            <div className="text-xs bg-slate-600 text-slate-200 p-2 px-3 rounded-full hover:bg-slate-800 hover:cursor-pointer"
              onClick={() => setRead(true)}
            ><FontAwesomeIcon icon={faCheck}/> Mark all as Read</div>
            <div className="flex shrink-0 relative mr-[3%]">
              <FontAwesomeIcon icon={faBell} className="text-lg text-slate-200 px-[12px] py-[11px] rounded-full bg-slate-700 hover:cursor-pointer hover:text-slate-300" />
              {!read && <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>}
            </div>
          </DialogTitle>
          <DialogDescription>
            {!userData?.pay && userData?.photo && <div className="container w-full p-2 bg-slate-200 mt-4 rounded-xl">
              <p className="text-red-500 font-semibold text-xs lg:text-[16px] pb-2">You have not completed your payment</p>
              <p className="text-slate-600 text-xs lg:text-sm">Complete Your payment to complete your admission and access you personal dashboard</p>
            </div>}

            {data?.map((value) => {
              return <div className="relative container w-full p-2 bg-slate-200 mt-4 rounded-xl hover:cursor-pointer"
                onClick={() => navigate("/student-dashboard/my-classes")}
              >
                <p className="text-slate-600">{value.faculty_name} set a new class today.</p>
                <p className="text-green-600 font-semibold"><span className="text-slate-600"><FontAwesomeIcon icon={faClock} /> Time : </span>{value.start} - {value.end}</p>
              </div>
            })}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Notification
