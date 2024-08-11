import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },
  reducers: {
    loadVideosData: (state, action) => {
        state.videos = action.payload;
    },
  },
});

export const {loadVideosData} = videosSlice.actions;
export default videosSlice.reducer;