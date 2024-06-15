import { RootState } from "@/store/store";
import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const navigate = useNavigate();
  const authStatus = useSelector((state : RootState) => state.authSlice.status);
  const loading = useSelector((state : RootState) => state.authSlice.loading);

  useEffect(() => {
    if(!loading && !authStatus) {
      navigate("/", {replace : true});
    }
  }, [navigate, authStatus, loading])

  return children
}

export default ProtectedRoute
