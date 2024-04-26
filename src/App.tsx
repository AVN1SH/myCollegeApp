import { Outlet } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import Home from "./pages/Home"

const App = () => {
  return (
    <div className="">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
