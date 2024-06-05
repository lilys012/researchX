import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export type KeywordType = {
    id: number;
    content: string;
};

export interface KeywordState {
    keywords: KeywordType[];
}

const initialState: KeywordState = {
    keywords: [
        { id: 0, content: "GPT-4" },
        { id: 1, content: "Large Language Models" },
        { id: 2, content: "Diffusion" },
        { id: 3, content: "Mamba" },
        { id: 4, content: "Alphafold" },
        { id: 5, content: "Diffusion" },
        { id: 6, content: "Transformer" },
        { id: 7, content: "Llama 3" },
        { id: 8, content: "Speech Processing" },
    ],
};

export const keywordSlice = createSlice({
    name: "keyword",
    initialState,
    reducers: {},
});

export const keywordActions = keywordSlice.actions;
export const selectKeyword = (state: RootState) => state.keywords;
export default keywordSlice.reducer;
