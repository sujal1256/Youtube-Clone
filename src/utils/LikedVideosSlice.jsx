import { createSlice } from "@reduxjs/toolkit";

const LikedVideoSlice = createSlice({
  name: "likedVideos",
  initialState: {
    likedVideos: [],
  },
  reducers: {
    addLikedVideo(state, action) {
      state.likedVideos.push(action.payload);
    },
    removeLikedVideo(state, action) {
      const { id } = action.payload;
      state.likedVideos = state.likedVideos.filter((e) => e.id !== id);
    },
  },
});

export const { addLikedVideo, removeLikedVideo } = LikedVideoSlice.actions;

export default LikedVideoSlice.reducer;
