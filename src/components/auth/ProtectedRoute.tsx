import { AuthState } from "@/features/authSlice";
import { PropsWithChildren, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state : AuthState) => state.status);
  const loading = useSelector((state : AuthState) => state.loading);

  useEffect(() => {
    console.log(authStatus)
    console.log(loading)
    if(!loading && !authStatus) {
      navigate("/", {replace : true});
    }
  }, [navigate, authStatus, loading])

  return children
}

export default ProtectedRoute
