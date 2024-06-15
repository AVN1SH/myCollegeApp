import { useEffect, useState } from "react"

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our faculties', href: '#' },
  { name: 'Meet our developers', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '14' },
  { name: 'Faculty Members', value: '100+' },
  { name: 'Programs offered', value: '20+' },
  { name: 'Organisation', value: '50+' },
]

interface About {
  welcomeMessage : string;
  history : string;
  campusLife : {
    facilities : string;
    studentOrganizations : string;
    events : string;
  }
  contact : {
    email : string;
    phone : string;
    address : string;
  }
}

const AboutUs = () => {
  const [about, setAbout] = useState<About | null>(null)
  useEffect(() => {
    fetch('/about.json')
      .then((response) => response.json())
      .then((data) => setAbout(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://www.pythonanywhere.com/api/v0/user/Arkas/files/path//home/Arkas/staticFiles/images/graduationCap.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-bottom"
        />
        <div className="absolute w-full h-full bg-black top-0 z-[-10] opacity-[0.55]"></div>
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl whitespace-nowrap"><span className="text-orange-600">Welcome</span> to My College</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {about?.welcomeMessage}
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className=" bg-white container rounded mt-5 space-y-2 py-4">
        <h1 className="font-bold text-2xl text-slate-700">History</h1>
        <p className="text-lg text-slate-500 font-semibold pl-2">{about?.history}</p>
        <h1 className="font-bold text-2xl text-slate-700">Campus Life</h1>
        <p className="text-lg text-slate-500 font-semibold pl-2">
          <span className="font-semibold text-slate-800">Facilities <span className="text-orange-500 font-bold"> : </span></span>
          {about?.campusLife.facilities}
        </p>
        <p className="text-lg text-slate-500 font-semibold pl-2">
          <span className="font-semibold text-slate-800">Student Organizations <span className="text-orange-500 font-bold"> : </span></span>
          {about?.campusLife.studentOrganizations}
        </p>
        <p className="text-lg text-slate-500 font-semibold pl-2">
          <span className="font-semibold text-slate-800">Events <span className="text-orange-500 font-bold"> : </span></span>
          {about?.campusLife.events}
        </p>
        <h1 className="font-bold text-2xl text-slate-700">Contacts Us</h1>
        <p className="text-lg text-slate-500 font-semibold pl-2">
          <span className="font-semibold text-slate-800">email<span className="text-orange-500 font-bold"> : </span></span>
          <span className="hover:underline hover:cursor-pointer text-purple-600">{about?.contact.email}</span>

        </p>
        <p className="text-lg text-slate-500 font-semibold pl-2">
          <span className="font-semibold text-slate-800">Phone<span className="text-orange-500 font-bold"> : </span></span>
          {about?.contact.phone}
        </p>
        <p className="text-lg text-slate-500 font-semibold pl-2">
          <span className="font-semibold text-slate-800">Address<span className="text-orange-500 font-bold"> : </span></span>
          {about?.contact.address}
        </p>
      </div>
    </div>

  )
}

export default AboutUs
