import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import videoSlice from "./videosSlice"
import SearchSlice from "./SearchSlice";

const store = configureStore({
    reducer:{
        toggleSidebar: SidebarSlice,
        search:SearchSlice,
        videos:videoSlice,
    }
})

export default store;