import LeftNavBar from "@/components/dashboard/LeftNavBar"
import { Outlet } from "react-router-dom"

const FaLayout = () => {
  return (
    <div>
      <LeftNavBar />
      <main className=" pl-[280px] pt-16">
        <Outlet />
      </main>
    </div>
  )
}

export default FaLayout
