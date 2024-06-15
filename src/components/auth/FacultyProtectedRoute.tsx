import { RootState } from "@/store/store";
import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

const FacultyProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const navigate = useNavigate();
  const userData = useSelector((state : RootState) => state.authSlice.userData);
  const loading = useSelector((state : RootState) => state.authSlice.loading);

  useEffect(() => {
    if(!loading && !(userData?.role === 'faculty')) {
      navigate("/", {replace : true});
    }
  }, [navigate, userData?.role, loading])

  return children
}

export default FacultyProtectedRoute
