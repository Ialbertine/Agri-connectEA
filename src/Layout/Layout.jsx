import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'
import PreFooter from '../Component/PreFooter'
import Footer from '../Component/Footer'

const Layout = () => {
  return (
    <>
      <div className=''>
        <Header/>
        <div className=''>
        <Outlet/>
        </div>
        <PreFooter/>
        <Footer/>
      </div>
    </>


  )
}

export default Layout