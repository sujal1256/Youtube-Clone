import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";

const store = configureStore({
    reducer:{
        toggleSidebar: SidebarSlice
    }
})

export default store;