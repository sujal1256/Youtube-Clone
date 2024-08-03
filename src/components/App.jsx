import Body from "./Body";
import Header from "./Header";
import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoSection from "./VideoSection";
import WatchPage from "./WatchPage";

const appRouter = createBrowserRouter([{
  path:'/',
  element: <Body />,
  children:[
    {
      path:'/',
      element: <VideoSection />
    },
    {
      path:'/watch',
      element: <WatchPage />
    }
  ]
}])
function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
