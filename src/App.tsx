import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import djangoService from "./Django/django";
import { login, logout } from "./features/authSlice";
import { admission } from "./features/stdSlice";
import { Toaster } from "sonner";

const App = () => {
  const location = useLocation();
  const { pathname } = location;
  const [path, setPath] = useState(location.pathname);
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  useEffect((() => {
    const fetchUser = async () => {
      const authIdStr = localStorage.getItem("authId");
      const authIdJson = authIdStr ? JSON.parse(authIdStr) : null;
      await djangoService.getAllData({id : authIdJson})
        .then((userData) => {
          if(userData) {
            dispatch(login(userData));
            if(userData.pay) dispatch(admission());
          } else {
            dispatch(logout())
          }
        })
        // .finally(() => setLoading(false))
    }

    fetchUser();
  }), []);

  useEffect(() => {
    document.body.classList.add('bg-gray-100');
  }, [])

  return (
    <div className="">
      <NavBar />
      <main>
        <Outlet />
        <Toaster />
      </main>
      {!path.includes("dashboard") && <Footer />}
    </div>
  )
}

export default App
