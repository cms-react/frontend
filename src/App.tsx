import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Router>
     <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
     
    </>
  )
}

export default App
