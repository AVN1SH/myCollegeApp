import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ArrowRightStartOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckToSlot, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/features/authSlice';
import { RootState } from '@/store/store';
import { admissionRemove } from '@/features/stdSlice';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Admissions', href: "/registration", current: false },
  { name: 'Programs', href: '/programs', current: false },
  { name: 'Faculties', href: '/faculties', current: false },
  { name: "About", href: '/about-us', current: false },
  { name : "Developers", href: "/developer", current: false}
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {

  const user = useSelector((state : RootState) => state.authSlice.userData)
  const userStats = useSelector((state : RootState) => state.authSlice.status)
  const location = useLocation();
  // const { hash, pathname, search } = location;
  const { pathname } = location;
  const [path, setPath] = useState('');
  const navigate = useNavigate();
  const authStatus = useSelector((state : RootState) => state.authSlice.status)
  const dispatch = useDispatch();

  useEffect(() => {
    setPath(pathname);
  }, [pathname])

  const handleOnClick = () => {
    dispatch(logout());
    dispatch(admissionRemove());
  }
  return (
    <Disclosure as="nav" className="bg-white shadow-[0_0_7px_#7e7e7e] fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start ml-10 sm:ml-0 sm:justify-center md:items-stretch md:justify-start h-full">
                <div className="flex flex-shrink-0 items-center">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-slate-800 h-8 w-auto" />
                  <h1 className="lg:block hidden ml-3 font-bold text-lg">My College</h1>
                </div>
                <div className="hidden md:ml-6 md:block h-full">
                  <div className="flex items-center justify-center space-x-4 h-full">
                    {navigation.map((item) => (
                      <Link to={item.href}
                        key={item.name}
                        onClick={() => {

                        }}
                        className={classNames(
                          path === item.href ? 'border-b-2 border-gray-900 border-solid text-black' : 'text-gray-500 hover:border-b-2 hover:border-gray-500 hover:border-solid',
                          'px-3 py-2 text-sm font-medium h-full flex items-center flex-shrink-0 duration-75'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 h-full">

                {!userStats && <button
                  type="button"
                  onClick={() => navigate("/registration")}
                  className="relative ml-3 p-2 h-full font-bold text-orange-500 hover:border-b-4 border-b-2 border-orange-500 border-solid duration-75 whitespace-nowrap"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <FontAwesomeIcon icon={faCheckToSlot} /> Apply Now
                </button>}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative text-gray-400 hover:text-white flex rounded-full bg-gray-800 text-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-[1px] focus:ring-offset-gray-800 border-solid border-slate-500 border-[1px]">
                      {/* <span className="absolute -inset-1.5" /> */}
                      {/* <span className="sr-only">Open user menu</span> */}
                      {user?.photo ? <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={`${user.photo}`}
                        alt=""
                      /> : <FontAwesomeIcon icon={faUser} className='px-2.5 py-2'/>
                      }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {!authStatus && <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/login"
                            className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 flex justify-between hover:text-orange-400 hover:pl-6 duration-150')}
                          >
                            Student Login <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                          </Link>
                        )}
                      </Menu.Item>}
                      {!authStatus && <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/faculty/login"
                            className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 flex justify-between hover:text-orange-400 hover:pl-6 duration-150')}
                          >
                            Faculty Login <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                          </Link>
                        )}
                      </Menu.Item>}
                      {!authStatus && <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/registration"
                            className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 flex justify-between hover:text-orange-400 hover:pl-6 duration-150')}
                          >
                            Registration <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                          </Link>
                        )}
                      </Menu.Item>}
                      {authStatus && <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/student-dashboard/overview"
                            className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 flex justify-between hover:text-orange-400 hover:pl-6 duration-150')}
                          >
                            Dashboard <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                          </Link>
                        )}
                      </Menu.Item>}
                      {authStatus && <Menu.Item>
                        {({ active }) => (
                          <button
                            className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-red-500 font-semibold flex justify-between hover:text-red-600 hover:pl-6 duration-150 w-full')}
                            onClick={handleOnClick}
                          >
                            LogOut <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                          </button>
                        )}
                      </Menu.Item>}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'border-b-2 border-gray-900 border-solid text-black' : 'text-gray-500 hover:border-b-2 hover:border-gray-900 hover:border-solid hover:text-black',
                    'block px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
