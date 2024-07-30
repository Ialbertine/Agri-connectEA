import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Navbar = (props) => {
  return (
    <div className='flex'>
      <div className=' fixed' >
        <SideBar />
      </div>
      <section className='w-[96rem]  pl-[36vh]'>
        <Outlet/>
        {props.children}
      </section>
    </div>
  )
}

export default Navbar