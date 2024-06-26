import Profile from '@/components/developer/Profile';
import React, { useEffect, useState } from 'react';

export interface Developer {
  name : string;
  photo : string;
  url : {
    linkedin : string;
    github : string;
    whatsapp : string;
  }
  role : string[];
  email : string;
  about : string;
  currentStatus : string;
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
  skills : {
    frontend : {
      labels : string[];
      label : string;
      value : number[];
    }
    backend : {
      labels : string[];
      label : string;
      value : number[];
    }
    additional : string[];
  }
}

const Developer: React.FC = () => {
  const [data, setData] = useState<Developer[] | null>(null);
  useEffect(() => {
    fetch('/developer.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[rgba(41,43,47)] pt-16 min-h-fit py-4">
      <div className="flex flex-col xl:flex-row gap-4 my-3">
        <div className="flex-[1] w-full border-orange-500 border-solid border-[1px] h-screen rounded overflow-y-scroll custom-scroll-bar">
          {data && <Profile 
            url={data[0].url}
            name={data[0].name}
            photo={data[0].photo}
            role={data[0].role}
            email={data[0].email}
            about={data[0].about}
            frontend={data[0].frontend}
            backend={data[0].backend}
            skills={data[0].skills}
          />}
        </div>

        <div className='flex-[1] border-orange-500 w-[clac(100%-90px)] border-solid border-[1px] h-screen rounded overflow-y-scroll custom-scroll-bar'>
          {data && <Profile 
            url={data[1].url}
            name={data[1].name}
            currentStatus={data[1].currentStatus}
            photo={data[1].photo}
            role={data[1].role}
            email={data[1].email}
            about={data[1].about}
            frontend={data[1].frontend}
            backend={data[1].backend}
            skills={data[1].skills}
          />}
        </div>
      </div>
    </div>
  );
};

export default Developer;
