import React, { useEffect, useState } from 'react'
import { VIDEOS_API } from '../constants';
import VideoCard from './VideoCard';

const VideoSection = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    getVideos();
  },[])

  console.log(data);
  
  async function getVideos(){
    const json = await fetch(VIDEOS_API);
    const data = await json.json();
    setData(data.items);  
  }
  if(data.length === 0) return;
  return (
    <div className='flex flex-wrap w-full justify-around gap-5 p-5'>
      
    {data.map(video=>{
      return <VideoCard key={video.id} info={{...video}}/>
    })}
    </div>
  )
}

export default VideoSection;