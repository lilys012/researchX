import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export type PostType = {
    id: number;
    content: string;
    keyword: string;
};

export interface PostState {
    posts: PostType[];
}

const initialState: PostState = {
    posts: [{ id: 0, content: "OpenAI's GPT-4 report", keyword: "GPT-4" }],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
});

export const postActions = postSlice.actions;
export const selectPost = (state: RootState) => state.posts;
export default postSlice.reducer;
