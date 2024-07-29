import React from 'react'
import SideBar from './SideBar'
import VideoSection from './VideoSection'

const Body = () => {
  return (
    <div className=' h-[100vh] flex '>
        <SideBar />
        <VideoSection />
    </div>
  )
}

export default Body