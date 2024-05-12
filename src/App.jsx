
import "./App.css"
// Redux
import Media from "./pages/Media"
// React Router
import { Route, Routes} from "react-router-dom"

// Components


function App() {




  return (
    <div >
 
      <Routes>
        <Route path="/" element={<Media/>} />
 
      </Routes>
    </div>
  )
}

export default App
