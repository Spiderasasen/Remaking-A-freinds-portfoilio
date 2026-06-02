import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About_Me from './pages/About_Me.jsx'

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About_Me/>}/>
        </Routes>
      </Router>
  )
}

export default App
