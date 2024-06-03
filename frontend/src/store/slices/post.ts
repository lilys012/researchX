import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";

export type PostType = {
    id: number;
    content: string;
    imgs: string[];
    keyword: string;
    summary: string;
    isOpinion: boolean;
};

export interface PostState {
    posts: PostType[];
}

const initialState: PostState = {
    posts: [],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
});

export const fetchInitPosts = createAsyncThunk(
    "post/fetchInitPosts",
    async () => {
        const response = await axios.get("http://localhost:3000/data/postData.json")
        return response.data;
    }
);
export const fetchPost = createAsyncThunk(
    "post/fetchPost",
    async (data: { id: number }) => {
        const { id } = data;
        const response = await axios.get("http://localhost:3000/data/postData.json")
        let targetPost: PostType|null = null;
        response.data.array.forEach((e: PostType) => {
            if(e.id === id) targetPost = e;
        });
        if (targetPost===null) return null;
        return targetPost
    }
);

export const postActions = postSlice.actions;
export const selectPost = (state: RootState) => state.posts;
export default postSlice.reducer;
