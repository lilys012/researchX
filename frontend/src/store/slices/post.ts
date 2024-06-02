import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

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
    posts: [
        {
            id: 0,
            content:
                "OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 reportOpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report",
            imgs: [],
                keyword: "GPT-4",
            summary: "OpenAI's GPT-4 report",
            isOpinion: false,
        },
        {
            id: 1,
            content:
                "Meta's Llama3 Meta's Llama3 Meta's Llama3Meta's Llama3 Meta's Llama3 Meta's Llama3 Meta's Llama3 Meta's Llama3 Meta's Llama3  Meta's Llama3 Meta's Llama3",
            imgs: [],
            keyword: "Llama",
            summary: "Meta's Llama3 Meta's Llama3 Meta's Llama3 ",
            isOpinion: false,
        },
        {
            id: 2,
            content:
                "OpenAI's GPT-5 report OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 reportOpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report",
            imgs: [],
            keyword: "GPT-4",
            summary: "OpenAI's GPT-5 report",
            isOpinion: false,
        },
        {
            id: 3,
            content: "Transformer I'll be back Attennion is all you need",
            imgs: [],
            keyword: "Large Language Models",
            summary: "Transformer",
            isOpinion: false,
        },
        {
            id: 4,
            content:
                "OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 reportOpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report",
            imgs: [],
            keyword: "GPT-4",
            summary:
                "This work deals with some novel idea about in-context learning.",
            isOpinion: false,
        },
        {
            id: 5,
            content:
                "OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 reportOpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report",
            imgs: [],
            keyword: "GPT-4",
            summary:
                "This work deals with some novel idea about in-context learning.",
            isOpinion: false,
        },
        {
            id: 6,
            content:
                "OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 reportOpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report",
            imgs: [],
            keyword: "GPT-4",
            summary:
                "This work deals with some novel idea about in-context learning.",
            isOpinion: false,
        },
        {
            id: 7,
            content: "Transformer I'll be back Attennion is all you need",
            imgs: [],
            keyword: "Large Language Models",
            summary: "Transformer",
            isOpinion: true,
        },
        {
            id: 8,
            content: "Transformer2 I'll be back Attennion is all you need",
            imgs: [],
            keyword: "Large Language Models",
            summary: "Transformer2",
            isOpinion: true,
        },
        {
            id: 9,
            content:
                "OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 reportOpenAI's GPT-4 report OpenAI's GPT-4 report OpenAI's GPT-4 report",
            imgs: [],
            keyword: "GPT-4",
            summary:
                "This work deals with some novel idea about in-context learning.",
            isOpinion: false,
        },
    ],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
});

export const postActions = postSlice.actions;
export const selectPost = (state: RootState) => state.posts;
export default postSlice.reducer;
