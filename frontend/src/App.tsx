import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PostDetail from "./containers/PostDetail/PostDetail";
import MyPage from "./containers/MyPage/MyPage";
import MainPage from "./containers/MainPage/MainPage";
import { keywordData } from "./data/keywordsReal";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/post/:id" element={<PostDetail />}></Route>
                    <Route path="/mypage" element={<MyPage />}></Route>
                    <Route path="/:keyword" element={<MainPage />}></Route>
                    <Route
                        path="*"
                        element={<Navigate replace to="/main" />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
