import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
    reducer:{
        toggleSidebar: SidebarSlice,
        search:SearchSlice,
    }
})

export default store;