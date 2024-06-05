import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { postData } from "../../data/postDataReal";
import { keywordData } from "../../data/keywordsReal";

export type UserType = {
    url: string | null;
    username: string;
    created_at: string;
    id: string;
    name: string;
    profile_image_url: string;
};

export type KeywordType = {
    id: number;
    content: string;
};

export type PostType = {
    id: number;
    keywords: string[];
    summary: string;
    isOpinion: boolean;
    content: string;
    imgs: string[];
    urls: string[];
    author_id: string;
    created_at: string;
    postId: string;
    users: UserType[];
};

export interface PostState {
    posts: PostType[];
    keywords: KeywordType[];
}

const initialState: PostState = {
    posts: postData,
    keywords: keywordData,
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
});

// export const fetchInitPosts = createAsyncThunk(
//     "post/fetchInitPosts",
//     async () => {
//         const response = await axios.get("http://localhost:3000/data/postData.json")
//         return response.data;
//     }
// );
// export const fetchPost = createAsyncThunk(
//     "post/fetchPost",
//     async (data: { id: number }) => {
//         const { id } = data;
//         const response = await axios.get("http://localhost:3000/data/postData.json")
//         let targetPost: PostType|null = null;
//         response.data.array.forEach((e: PostType) => {
//             if(e.id === id) targetPost = e;
//         });
//         if (targetPost===null) return null;
//         return targetPost
//     }
// );

export const postActions = postSlice.actions;
export const selectPost = (state: RootState) => state.posts;
export default postSlice.reducer;
