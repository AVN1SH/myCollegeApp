import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ContributeGraph } from '@/components/developer/ContributeGraph';

interface Props {
  name : string;
  photo : string;
  role : string[];
  email : string;
  about : string;
  frontend ?: {
    contribution : string;
    labels : string[];
    label : string;
    value :number[];
  };
  backend ?: {
    contribution : string;
    labels : string[];
    label : string;
    value :number[];
  };
}

const Profile = ({name, photo, role, email, about, frontend, backend} : Props) => {

  return (
    <div>
      <div className="relative sm:h-[300px] w-full overflow-hidden">
        <img src={photo} 
        className="sm:absolute w-[300px] h-[300px] object-cover object-top drop-shadow-[0_0_10px_0_rgb(0,0,0,1);] left-4 z-0" 
        />
        <img src="/images/branding-decor-2.png" className="absolute top-0 left-0 w-full h-full object-contain z-0 " />

        <div className=' ml-[10%] sm:ml-[40%] sm:mt-[100px] mt-[10px]'>
          <h1 className=" text-slate-200 font-bold text-2xl">
            I'm <span className="text-orange-500 text-4xl">{name}</span>
            </h1>
          <p className="text-slate-200 font-thin">{role[0] && role[0]} <span className='text-orange-500'> | </span> {role[1] && role[1]} <span className='text-orange-500'> | </span> {role[2] && role[2]}</p>
        </div>

        <p className="text-slate-200 mt-3 left-[40%] ml-[10%] sm:ml-0 sm:absolute z-20">Contact - <span className='text-purple-600 hover:cursor-pointer hover:underline'>{email}</span></p>

        <div className="absolute top-[10px] left-2 flex flex-col w-fit items-center gap-2 z-10">
          <div className="flex flex-col items-center font-mono text-[10px]">
          <p className="text-white">S</p>
          <p className="text-white">O</p>
          <p className="text-white">C</p>
          <p className="text-white">I</p>
          <p className="text-white">A</p>
          <p className="text-white">L</p>
          <p className="text-white">S</p>
          </div>
          <div className="w-[1px] h-[60px] bg-orange-500 " />
          <FontAwesomeIcon icon={faLinkedin} className="text-lg text-blue-500 hover:cursor-pointer hover:text-blue-600"/>
          <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-green-500 hover:cursor-pointer hover:text-green-600" />
          <FontAwesomeIcon icon={faTwitter} className="text-lg text-sky-500 hover:cursor-pointer hover:text-sky-600" />
          <FontAwesomeIcon icon={faGithub} className="text-lg text-gray-300 hover:cursor-pointer hover:text-gray-400" />
        </div>
        <div className="absolute bg-gradient-to-t from-[rgba(41,43,47)] w-full h-[100px] bottom-[calc(100%-300px)] sm:bottom-0" />
      </div>
      <div className="container mt-5 space-y-2">
        <h1 className='text-white text-3xl font-bold'>About</h1>
        <div className="text-slate-300"><div className="h-[2px] w-8 bg-orange-500 inline-block"/>{about}</div>
      </div>

      <div className="container mt-5 space-y-2">
        <h1 className='text-white text-3xl font-bold'>Contribution In This Project</h1>
        <div className="flex items-center gap-8 md:gap-2 flex-col md:flex-row">
          {frontend && <div className="w-[300px] h-[300px]">
            <h1 className="text-xl text-slate-400 font-semibold"><div className="h-[2px] w-4 bg-orange-500 inline-block"/>Front-end contributions : {frontend.contribution}</h1>
            <ContributeGraph 
              labels={frontend.labels}
              label={frontend.label}
              value={frontend.value}
            />
          </div>}
          {backend && <div className="w-[300px] h-[300px]">
            <h1 className="text-xl text-slate-400 font-semibold"><div className="h-[2px] w-4 bg-orange-500 inline-block"/>Back-end contributions : {backend.contribution}</h1>
            <ContributeGraph 
              labels={backend.labels}
              color="rgba(30, 35, 38, 1)"
              label={backend.label}
              value={backend.value}
            />
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Profile
