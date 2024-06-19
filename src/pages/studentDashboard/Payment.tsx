import djangoService from "@/Django/django";
import { Button } from "@/components/ui/button"
import { admission } from "@/features/stdSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

const Payment = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [user, setUser] = useState<UserData | null>(null)

  const handleOnClick = async () => {
    try {
      const response = await djangoService.userPayment({
        id : user?.id || '',
        payment : true
      })
      if(response) {
        dispath(admission());
        navigate("/student-dashboard/overview")
      }
    } catch (error : any) {
      if(Number(error.message) >= 400) {
        console.log("fields are required");
      }
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      const authIdStr = localStorage.getItem("authId");
      const authIdJson = authIdStr ? JSON.parse(authIdStr) : null;
      await djangoService.getAllData({id : authIdJson})
        .then((userData) => {
          setUser(userData);
        })
    }
    fetchUser();
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-sm md:text-xl lg:text-3xl pl-3 pt-3 text-white">
          Payment Section<span className="text-slate-800 font-thin">| </span><span className="font-thin">Complete Your Payment</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-5px)] md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)] top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded lg:p-3 p-1">
        {user && <Button 
          className="bg-orange-600"
          onClick={handleOnClick}
          disabled={user.photo ? false : true}
        >
          Click to pay Ammout : 10,00,00,000
        </Button>}
      </div>
    </div>
  )
}

export default Payment
