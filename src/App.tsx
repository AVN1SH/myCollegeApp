import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import { useEffect, useState } from "react";

const App = () => {
  const location = useLocation();
  const { pathname } = location;
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

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
