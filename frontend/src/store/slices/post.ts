import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { postData } from "../../data/postData"

export type PostType = {
    id: number;
    content: string;
    imgs: string[];
    keyword: string;
    summary: string;
    isOpinion: boolean;
};

// const initData = 
//{
    /*
PostType
id: number (assigned)
content: string (note_tweet/tweet)
keywords: string[] (LLM assigned) + (note_tweet/entities/hashtags)
summary: string (assigned)
isOpinion: number (assigned)
imgs: string[] (includes/media)
urls: string[] (includes/urls/expanded_url)
postId: number (note_tweet/id)
createdAt: string (note_tweet/created_at)
userinfo: UserType (users)
*/
//}

export interface PostState {
    posts: PostType[];
}

const initialState: PostState = {
    posts: postData,
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {

    },
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
