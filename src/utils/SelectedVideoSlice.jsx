import { createSlice } from "@reduxjs/toolkit";

const SelectedVideoSlice = createSlice({
    name:'selectedVideo',
    initialState:{
        video:{},
    },
    reducers:{
        addVideo(state,action){
            state.video = action.payload;
        }
    }
})
export const {addVideo} = SelectedVideoSlice.actions;

export default SelectedVideoSlice.reducer;
