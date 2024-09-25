import Body from "./Body";
import Header from "./Header";
import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoSection from "./VideoSection";
import WatchPage from "./WatchPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadVideosData } from "../utils/videosSlice";
import { VIDEOS_API } from "../constants";
import SearchResults from "./SearchResults";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoSection />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getVideos() {
      const json = await fetch(VIDEOS_API);
      const data = await json.json();
      dispatch(loadVideosData(data.items));
    }

    getVideos();
  }, [dispatch]); // 'dispatch' added to the dependency array

  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
