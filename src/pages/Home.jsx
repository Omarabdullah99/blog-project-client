// eslint-disable-next-line no-unused-vars
import React from 'react'
import Banner from '../component/Banner'
import BlogePage from '../component/BlogePage'

const Home = () => {
  return (

    <div   >
    <Banner />
    <div className='w-[90%] mx-auto'>
    <BlogePage />
    </div>
    
    </div>
  
  )
}

export default Home