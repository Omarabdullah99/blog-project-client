import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './component/Navbar'
import Footer from './component/Footer'

function App() {
 

  return (
    <>
    <Navigation />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
