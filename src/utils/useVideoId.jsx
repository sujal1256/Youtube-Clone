import { useEffect, useState } from "react";
import {VIDEO_DATA_API,API_KEY} from '../constants'
const useVideoId = (id) => {
  const [videoData, setData] = useState();

  useEffect(() => {
    getData(id);
  }, [id]);
  async function getData(id) {
    const json = await fetch(`${VIDEO_DATA_API}${id}&key=${API_KEY}`);
    const data = await json.json();
    setData(data?.items?.[0]);
  }
  
  return videoData;
};

export default useVideoId;
