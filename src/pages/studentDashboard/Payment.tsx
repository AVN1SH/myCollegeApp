import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Payment = () => {
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-3xl pl-3 pt-3 text-white">
          Overview
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded p-3">
        <Link to={"/student-dashboard/overview"}>
          <Button className="bg-orange-600">
            Click to pay Ammout : 10,00,00,000
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Payment
