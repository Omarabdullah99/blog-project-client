// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className='bg-gray-900 py-5 mb-1'>
    <div>
    <h3 className="text-center text-2xl font-bold text-white">Contact me:</h3>
    <div className='Socila flex justify-center items-center flex-wrap gap-5 mb-6 '>
    <a href="https://www.linkedin.com/in/omar-abdullah-07151a194/" target="_blank" rel="noopener noreferrer">
    <BsLinkedin className='text-xl text-white' />
  </a>
  <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
    <MdOutlineEmail className='text-xl text-white' />
  </a>
  <a href="https://www.facebook.com/omarabdullah.omar.37/" target="_blank" rel="noopener noreferrer">
    <BsFacebook className='text-xl text-white' />
  </a>
  <a href="https://www.instagram.com/omar_abdullah303" target="_blank" rel="noopener noreferrer">
    <BsInstagram className='text-xl text-white' />
  </a>
    </div>
    </div>

    <div className="info text-center text-white">
    <h2>Omar Abdullah</h2>
    <p>@CopyRight 2023</p>
    <p >All right reserved Powered by the <span className='font-bold'>Omar Abdullah</span></p>
    </div>

    </div>
  )
}

export default Footer