import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PostDetail from "./containers/PostDetail/PostDetail";
import MyPage from "./containers/MyPage/MyPage";
import MainPage from "./containers/MainPage/MainPage";
import { keywordData } from "./data/keywordsReal";
import { useSelector } from "react-redux";
import { selectMyPost } from "./store/slices/mypost";

function App() {
    const mypostState = useSelector(selectMyPost);
    const [myposts, setMyPosts] = useState<number[]>(mypostState.myposts);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/post/:id" element={<PostDetail myposts={myposts} setMyPosts={setMyPosts}/>}></Route>
                    <Route path="/mypage" element={<MyPage />}></Route>
                    <Route path="/:keyword" element={<MainPage myposts={myposts} setMyPosts={setMyPosts}/>}></Route>
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
