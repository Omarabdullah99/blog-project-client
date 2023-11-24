import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './component/Navbar'
import Footer from './component/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { setUser } from './reudx/features/AuthSlice'

function App() {
  const dispatch= useDispatch()

  //!register/login korar por refresh korle oita chole jay. ai problem solve korar jonno
  const user= JSON.parse(localStorage.getItem("blogprofile"))
  useEffect(() => {
    dispatch(setUser(user))
    
  }, [])

  console.log("app",user)
 

  return (
    <>
    <Navigation />
    <Outlet />
    <ToastContainer />
    </>
  )
}

export default App
