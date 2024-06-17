import React, { useEffect, useState } from "react";
import PostOverview from "../../components/PostOverview/PostOverview";
import HeaderComponent from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PostType, selectPost } from "../../store/slices/post";
import GPTInteraction from "../../components/GPTInteraction/GPTInteraction";
import { Avatar } from "@mui/material";
import "./PostDetail.scss";

function PostDetail({
    myposts,
    setMyPosts,
}: {
    myposts: number[];
    setMyPosts: React.Dispatch<React.SetStateAction<number[]>>;
}) {
    const { id } = useParams();
    const postState = useSelector(selectPost);

    if(!id) return <div></div>;

    const targetPost = postState.posts.find((post)=>post.id===parseInt(id));

    if (!targetPost) return <div><h1>404: Post doesn't exists</h1></div>


    const author = targetPost.users.find(
        (u) => u.id === targetPost.author_id
    )

    return (
        <div id="PostDetail">
            <HeaderComponent
                setCurKeyword={null}
                setRefresh={null}
                setIsMyPost={null}
            />
            <div className="postdetail-main-container">
                <div className="postdetail-overview">
                    <PostOverview
                        post={targetPost}
                        overview={false}
                        myposts={myposts}
                        setMyPosts={setMyPosts}
                    />
                </div>
                {/* <div className="upper">
                </div> */}
                <div className="right-container">
                    <div className="gpt-container">
                        <div className="gpt-header">
                            <h2>Ask GPT</h2>
                        </div>
                        <GPTInteraction tweet={targetPost.content}/>
                    </div>
                    {targetPost.urls.length>=1? <div className="links-container">
                        <h2>Links</h2>
                        <ul className="links-list">
                            <li key={0}><a href={`https://x.com/${author?.username}/status/${targetPost.postId}`} target="_blank">
                            Original post on X</a></li>
                            {targetPost.urls.map((url, i)=><li key={i+1}><a href={url} target="_blank">{url}</a></li>)}
                        </ul>
                        
                    </div>: null}
                    <div className="author-bio-container">
                        
                        <div className="author-bio-header">
                            <h2>Authors</h2>
                        </div>
                        <ul className="authors">
                            {targetPost.users.map((u, i)=><li key={i}>
                                <a href={u?.url||`https://x.com/${u.username}`} className="link-author-profile" target="_blank">
                                    <Avatar 
                                        alt={u.name} 
                                        src={u.profile_image_url} 
                                        sx={{ width: "30px",  height: "30px",}}
                                    />
                                    <div className="author-name">{u.name}</div>
                                </a>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostDetail;
