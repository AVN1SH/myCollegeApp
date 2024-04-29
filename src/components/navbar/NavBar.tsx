import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ArrowRightStartOnRectangleIcon, Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckToSlot, faGraduationCap, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-regular-svg-icons';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Admissions', href: '#', current: false },
  { name: 'Programs', href: '#', current: false },
  { name: 'Faculties', href: '#', current: false },
  { name: "About", href: '#', current: false }
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow-[0_0_7px_#7e7e7e] fixed w-full z-10">
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
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'border-b-2 border-gray-900 border-solid text-black' : 'text-gray-500 hover:border-b-2 hover:border-gray-500 hover:border-solid',
                          'px-3 py-2 text-sm font-medium h-full flex items-center flex-shrink-0 duration-75'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 h-full">

                <button
                  type="button"
                  className="relative ml-3 p-2 h-full font-bold text-orange-500 hover:border-b-4 border-b-2 border-orange-500 border-solid duration-75 whitespace-nowrap"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <FontAwesomeIcon icon={faCheckToSlot} /> Apply Now
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative text-gray-400 hover:text-white flex rounded-full bg-gray-800 text-2xl px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      {/* <span className="absolute -inset-1.5" /> */}
                      {/* <span className="sr-only">Open user menu</span> */}
                      <FontAwesomeIcon icon={faUser} />
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
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
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex justify-between hover:text-orange-400 hover:ml-2 duration-150')}
                          >
                            Student Login <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex justify-between hover:text-orange-400 hover:ml-2 duration-150')}
                          >
                            Faculty Login <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex justify-between hover:text-orange-400 hover:ml-2 duration-150')}
                          >
                            Registration <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                          </a>
                        )}
                      </Menu.Item>
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
