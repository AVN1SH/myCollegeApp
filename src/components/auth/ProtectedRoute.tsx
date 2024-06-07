import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate("/", {replace : true});
    }
  }, [navigate, user])

  return children
}

export default ProtectedRoute
