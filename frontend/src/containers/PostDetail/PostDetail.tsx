import React from "react";
import PostOverview, {
    viewProps,
} from "../../components/PostOverview/PostOverview";
import HeaderComponent from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { PostType, selectPost } from "../../store/slices/post";
import "./PostDetail.scss";

function PostDetail() {
    const { strId } = useParams();
    const postState = useSelector(selectPost);
    const id = strId ? parseInt(strId) : 0;
    const dispatch = useDispatch<AppDispatch>();
    console.log(postState.posts);
    let targetPost: PostType = {
        id: -1,
        content: "404",
        keywords: [],
        summary: "",
        isOpinion: false,
        imgs: [],
        urls: [],
        author_id: "",
        postId: "",
        created_at: "",
        users: [],
    };
    postState.posts.forEach((e) => {
        if (e.id === id) targetPost = e;
    });
    return (
        <div id="postdetail-container">
            <HeaderComponent setCurKeyword={null} setRefresh={null} />
            <PostOverview post={targetPost} overview={false} />
        </div>
    );
}

export default PostDetail;
