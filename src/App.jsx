import {Routes, Route} from "react-router-dom"
import NavBar from "./NavBar"
import Red from "./Red"
import Blue from "./Blue"
import Home from "./Home"
import './App.css'

function App() {
  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <NavBar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
