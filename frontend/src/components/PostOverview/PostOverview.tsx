import React, { useEffect, useState } from "react";
import { PostType } from "../../store/slices/post";
import "./PostOverview.scss";
import { Avatar, Badge } from "@mui/material";
// import { Col, Container, Row, Image } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { ImageList, ImageListItem } from '@mui/material';

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
        const cols=numImg>=2? 2: 1;

        return (
        <ul
            // sx={{
            //     height: "250px", 
            //     width: "100%",
            //     overflow: "hidden",
            // }}
            // cols={cols}
            // gap={4}
            className="image-list"
        >
            {post.imgs.slice(0, 2).map((img, i)=>{
                return(
                <li >
                    <a href={img} className="img-link">
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
                        <a id="user-info" href={userUrl()}>
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
                                        maxHeight: "60px", // Optionally set a max height
                                    }}
                                >
                                    {post.content}
                                </div>
                                
                                
                                {imgContainer()}
                                {/* <ul className="image-list">
                                    {post.imgs.slice(0, 4).map((img, i)=>{
                                        return <li className="image-wrapper" key={i}>
                                            <img src={img} alt="image in the post" />
                                        </li>
                                    })}
                                </ul> */}
                                {/* <Image src={post.imgs[0]} fluid /> */}
                                <div className="showall-btn-container">
                                    {overview ? (
                                        <button
                                            onClick={() => {
                                                navigate(`/post/${post.id}`);
                                            }}
                                        >
                                            <span>View Full Post</span>
                                        </button>
                                    ) : null}
                                </div>
                            
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
