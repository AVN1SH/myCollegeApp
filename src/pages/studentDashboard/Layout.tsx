import LeftNavBar from "@/components/dashboard/LeftNavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <LeftNavBar />
      <main className=" pl-[280px] pt-16">
        <div className="relative m-1 w-[clac(100%-280px)]">
          <div className="absolute w-full bg-orange-500 h-72 rounded">
            <h1 className="font-bold text-3xl pl-3 pt-3 text-white">
              Overview
            </h1>
          </div>
          <div className="absolute border-slate-400 border-[1px] border-solid flex bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-screen rounded p-3">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
