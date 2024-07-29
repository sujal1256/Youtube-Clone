import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name:"toggleSidebar",
    initialState:{
        open:true
    },
    reducers:{
        click: (state)=>{
            state.open = !state.open;
        }
    }
})

export const {click} = sidebarSlice.actions;

export default sidebarSlice.reducer;