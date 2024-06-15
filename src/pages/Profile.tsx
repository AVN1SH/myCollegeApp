import { useParams } from "react-router-dom";
import { FacultyType } from "./Faculties"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [faculties, setFaculties] = useState<FacultyType[] | null>(null);
  const {id} = useParams();

  useEffect(() => {
    fetch('/faculties.json')
    .then((response) => response.json())
    .then((data) => setFaculties(data))
    .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);
  return faculties && (
    <div className="py-28 md:ml-[100px] md:w-[calc(100%-200px)]  ml-[50px] w-[calc(100%-100px)]">
      <div className="relative w-full h-[270px]">
        <div className="h-[140px] w-full bg-orange-200 rounded-xl">
          <p className="p-3 font-semibold text-slate-700">Home | Faculties | {faculties![Number(id)].name}</p>
          <div className="absolute left-8 top-16 flex items-center gap-3">
            {faculties![Number(id)].photo_url ? <img src={`/images/faculty/${faculties![Number(id)].photo_url}`} className=" object-center object-cover w-40 h-40  rounded-xl" /> : <FontAwesomeIcon icon={faUser} className="w-[140px] h-[140px] rounded-xl border-slate-500 border-solid border-2 p-2 bg-slate-700 text-slate-300"/>}
            <div className="pb-[10px]">
              <p className="font-semibold text-3xl text-slate-800">{faculties![Number(id)].name}</p>
              <p className="font-semibold text-slate-600">Age : {faculties![Number(id)].age}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 flex-col md:flex-row">
        <div className="flex-[1.7]">
          <div className="flex gap-2 w-full justify-between">
            <Button className="px-16 bg-orange-500 hover:bg-orange-600 duration-150">About</Button>
            <Button className="px-16 bg-slate-600 hover:bg-orange-600 duration-150">Course</Button>
            <Button className="px-16 bg-slate-600 hover:bg-orange-600 duration-150">Reviews</Button>
            <Button className="px-16 bg-slate-600 hover:bg-orange-600 duration-150">Contacts</Button>
          </div>
          <div className=" mt-5 space-y-2">
            <h1 className="font-bold text-2xl text-slate-800">About {faculties![Number(id)].name}</h1>
            <p className="text-lg text-slate-600">{faculties![Number(id)].description}</p>
          </div>
        </div>

        <div className="flex-[1] h-fit">
          <div className="bg-white h-[400px] w-[400px] mx-auto rounded-xl shrink-0 flex flex-col justify-between p-4 font-bold text-slate-800">
            <div className="flex justify-between items-center">
              <div className="text-slate-500">Total Course</div>
              <div className="text-orange-600">30</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-slate-500">Rating</div>
              <div>4.9(123)</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-slate-500">Experinces</div>
              <div>10 Years</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-slate-500">Qualification</div>
              <div>{faculties![Number(id)].qualification}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-slate-500">Language</div>
              <div>English, Hindi</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-slate-500">Social</div>
              <div className="text-2xl flex gap-3"><FontAwesomeIcon icon={faFacebook} className=" text-blue-500" /> <FontAwesomeIcon icon={faWhatsapp} color="green"/><FontAwesomeIcon icon={faLinkedin} className=" text-sky-600" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
