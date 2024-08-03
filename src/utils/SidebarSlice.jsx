import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name:"toggleSidebar",
    initialState:{
        open:true
    },
    reducers:{
        toggleMenu: (state)=>{
            state.open = !state.open;
        },
        closeMenu: (state)=>{
            state.open = false;
        }
    }
})

export const {toggleMenu,closeMenu} = sidebarSlice.actions;

export default sidebarSlice.reducer;