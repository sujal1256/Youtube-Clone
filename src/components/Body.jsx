import React from 'react'
import SideBar from './SideBar'
import VideoSection from './VideoSection'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=' h-[100vh] flex bg-slate-50 overflow-hidden'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body