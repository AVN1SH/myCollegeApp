import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import djangoService from "./Django/django";
import { AuthState, login, logout } from "./features/authSlice";
import { RootState } from "./store/store";

const App = () => {
  const location = useLocation();
  const { pathname } = location;
  const [path, setPath] = useState(location.pathname);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  useEffect((() => {
    const fetchUser = async () => {
      const authIdStr = localStorage.getItem("authId");
      const authIdJson = authIdStr ? JSON.parse(authIdStr) : null;
      await djangoService.getCurrentUser({id : authIdJson})
        .then((userData) => {
          if(userData) {
            dispatch(login(userData))
          } else {
            dispatch(logout())
          }
        })
        .finally(() => setLoading(false))
    }

    fetchUser();
  }), []);

  return (
    <div className="">
      <NavBar />
      <main>
        <Outlet />
      </main>
      {!path.includes("dashboard") && <Footer />}
    </div>
  )
}

export default App
