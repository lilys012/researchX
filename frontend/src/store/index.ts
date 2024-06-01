import { configureStore } from "@reduxjs/toolkit";
import keywordRecuder from "./slices/keyword";
import postReducer from "./slices/post";

export const store = configureStore({
    reducer: { keywords: keywordRecuder, posts: postReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
