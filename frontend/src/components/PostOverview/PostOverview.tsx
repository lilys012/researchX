import React, { useEffect, useState } from "react";
import { PostType } from "../../store/slices/post";
import "./PostOverview.scss";
import { Avatar, Badge } from "@mui/material";
// import { Col, Container, Row, Image } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

export interface viewProps {
    post: PostType | null;
    overview: boolean;
    myposts: number[];
    setMyPosts: React.Dispatch<React.SetStateAction<number[]>>;
}

function PostOverview({ post, overview, myposts, setMyPosts }: viewProps) {
    const navigate = useNavigate();
    const isInMyPost = () => {
        if (post) {
            for (let i = myposts.length - 1; i >= 0; i--) {
                if (myposts[i] === post.id) return true;
            }
        }
        return false;
    };

    const removePost = () => {
        if (post) {
            setMyPosts((prevPosts: number[]) => {
                return prevPosts.filter((p) => p !== post.id);
            });
        }
    };
    const addPost = () => {
        if (post) {
            setMyPosts((prevPosts: number[]) => {
                return [post.id, ...prevPosts];
            });
        }
    };
    
    const userUrl = ()=>{
        if (post==null) return "";
        const username = post.users.find((u) => u.id === post.author_id)?.username
        return `https://x.com/${username}`
    }

    const imgContainer = ()=>{
        if(post===null) return;
        else if(post.imgs.length===0) return;

        const numImg = post.imgs.length;
        const numShow = overview? 2: numImg;

        return (
        <ul
            className={overview?`image-list image-oveview`: "image-list image-showall"}
        >
            {post.imgs.slice(0, numShow).map((img, i)=>{
                return(
                <li key={i} className={numImg===1? "n1": "n"}>
                    <a href={img} className="img-link" target="_blank">
                        <img src={img} alt=""/>
                    </a>
                </li>
            )})}
        </ul>)
    }

    return (
        <div
            id="post-container"
            className="PostOverview"
            // className="p-1 mt-2 ms-2"
            // onClick={post.clickPost}
        > 
            {post === null ? (
                <div></div>
            ) : (
                <div id="main-post-div">
                    <div id="upper-post-div">
                        <a id="user-info" href={userUrl()} target="_blank">
                            <Avatar
                                alt={
                                    post.users.find(
                                        (u) => u.id === post.author_id
                                    )?.name
                                }
                                src={
                                    post.users.find(
                                        (u) => u.id === post.author_id
                                    )?.profile_image_url
                                }
                                sx={{
                                    border: "1px solid #3E4F5B"
                                }}
                            />
                            <div id="user-right-container">
                                <div id="user-username">
                                    @{
                                        post.users.find(
                                            (u) => u.id === post.author_id
                                        )?.username
                                    }
                                </div>
                                <div id="user-name">
                                    {
                                        post.users.find(
                                            (u) => u.id === post.author_id
                                        )?.name
                                    }
                                </div>
                            </div>
                        </a>
                        <div className="badge">
                            {isInMyPost() ? (
                                <FavoriteIcon
                                    color="action"
                                    // onClick={overview ? () => {} : removePost}
                                    onClick={removePost}
                                />
                            ) : (
                                <FavoriteBorderIcon
                                    color="action"
                                    // onClick={overview ? () => {} : addPost}
                                    onClick={addPost}
                                />
                            )}
                        </div>
                    </div>
                    <div id="post-content-container">
                        {post.imgs.length ? (
                            <div id="post-content">
                                <div
                                    id="post-text"
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        overflowY: overview
                                            ? "hidden"
                                            : "scroll",
                                        overflowX: "hidden",
                                        WebkitLineClamp: 14, // Set the number of lines to show before truncation
                                        height: "auto", // Adjust the height based on the content
                                        maxHeight: overview? "60px": "250px", // Optionally set a max height
                                    }}
                                >
                                    {post.content}
                                </div>
                                
                                <div className="img-container">
                                    {imgContainer()}
                                </div>
                                
                                {overview ? ( <div className="showall-btn-container">
                                    <button
                                        onClick={() => {
                                            navigate(`/post/${post.id}`);
                                        }}
                                    >
                                        <span>View Full Post</span>
                                    </button>
                                </div>) : null}
                            </div>
                        ) : (
                            <div id="post-content">
                                <span
                                    id="post-text-full"
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        overflowY: overview
                                            ? "hidden"
                                            : "scroll",
                                        overflowX: "hidden",
                                        maxWidth: "70%",
                                        WebkitLineClamp: 14, // Set the number of lines to show before truncation
                                        height: "auto", // Adjust the height based on the content
                                        // maxHeight: "150px", // Optionally set a max height
                                    }}
                                >
                                    {post.content}
                                </span>
                            </div>
                        )}
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostOverview;
