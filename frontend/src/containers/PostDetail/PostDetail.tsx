import React from "react";
import PostOverview from "../../components/PostOverview/PostOverview";
import HeaderComponent from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PostType, selectPost } from "../../store/slices/post";
import GPTInteraction from "../../components/GPTInteraction/GPTInteraction";
import "./PostDetail.scss";

function PostDetail() {
    const { strId } = useParams();
    const postState = useSelector(selectPost);
    const id = strId? parseInt(strId): 0;
    
    
    let targetPost: PostType = {
        id: -1,
        content: "404",
        keyword: "",
        summary: "",
        isOpinion: false,
        imgs: [],
    };

    postState.posts.forEach(e => {
        if(e.id === id) targetPost = e;
    })
    return <div id='PostDetail'>
        <HeaderComponent />
        <div className="postdetail-main-container">
            <div className="upper">
                <div className="postdetail-overview">
                    <PostOverview post={targetPost} overview={false} />
                </div>
                <div className="gpt-container">
                    <GPTInteraction />
                </div>
            </div>
            <div className="lower">
                <div className="author-bio">Author Bio</div>
            </div>
        </div>
    </div>;
}

export default PostDetail;
