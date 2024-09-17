import React from 'react'
import "./app.css"
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Main from './Components/Main/Main.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
