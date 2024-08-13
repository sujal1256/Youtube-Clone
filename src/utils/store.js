import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import videoSlice from "./videosSlice"
import SearchSlice from "./SearchSlice";
import SelectedVideoSlice from "./SelectedVideoSlice";

const store = configureStore({
    reducer:{
        toggleSidebar: SidebarSlice,
        search:SearchSlice,
        videos:videoSlice,
        selectedVideo:SelectedVideoSlice
    }
})

export default store;