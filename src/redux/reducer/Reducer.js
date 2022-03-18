import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "addPhoto",
  name2: "addVideo",
  initialState: {
    addPhoto: null,
    addVideo: null,
  },
  reducers: {
    addData: (state, action) => {
      state.addPhoto = action.payload;
    }
    ,
    addData2: (state, action) => {
      state.addVideo = action.payload;
    }
  }
});

export const { addData ,addData2} = nameSlice.actions;
export default nameSlice.reducer;