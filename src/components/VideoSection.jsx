import React, { useEffect, useState } from 'react'
import { VIDEOS_API } from '../constants';

const VideoSection = () => {
  // const [data,setData] = useState([]);

  useEffect(()=>{
    
    const data = getVideos();
    // setData(data);
  },[])

  // console.log(data);
  
  async function getVideos(){
    const json = await fetch(VIDEOS_API);
    const daa = await json.json();
    console.log(daa);
    
    return daa;
  }
  return (
    <div>VideoSection</div>
  )
}

export default VideoSection