import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";

export interface MyPostState {
    myposts: number[];
}

const initialState: MyPostState = {
    myposts: [0, 2, 4, 11, 24, 35, 33],
};

export const mypostSlice = createSlice({
    name: "mypost",
    initialState,
    reducers: {},
});

export const mypostActions = mypostSlice.actions;
export const selectMyPost = (state: RootState) => state.myposts;
export default mypostSlice.reducer;
