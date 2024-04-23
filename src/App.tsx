import { Button } from "./components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHouse, faSolarPanel} from "@fortawesome/free-solid-svg-icons"

const App = () => {
  return (
    <div className="text-xl font-bold underline">
      Hello world..!
      <Button>Click me</Button>
      <button
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        <FontAwesomeIcon icon={faHouse} />
        <FontAwesomeIcon icon={faSolarPanel} />
        Button
      </button>
    </div>
  )
}

export default App
