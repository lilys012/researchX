import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PostDetail from "./containers/PostDetail/PostDetail";
import MyPage from "./containers/MyPage/MyPage";
import MainPage from "./containers/MainPage/MainPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/postdetail/:id"
                        element={<PostDetail />}
                    ></Route>
                    <Route path="/mypage" element={<MyPage />}></Route>
                    <Route path="/" element={<MainPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
