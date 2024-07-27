import React from 'react'
import { Outlet } from 'react-router-dom'
import FarmerSideBar from './FarmerSidebar'

const FarmerLayout = (props) => {
  return (
    <div className='flex'>
      <div className=' fixed' >
        <FarmerSideBar />
      </div>
      <section className='w-[96rem]  pl-[42vh]'>
        <Outlet/>
        {props.children}
      </section>
    </div>
  )
}

export default FarmerLayout