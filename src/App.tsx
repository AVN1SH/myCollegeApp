import { Outlet } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"

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
