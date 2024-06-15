import React, { useEffect, useState } from "react";
import { PostType } from "../../store/slices/post";
import "./PostOverview.scss";
import { Avatar, Badge } from "@mui/material";
import { Col, Container, Row, Image } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
                        <div id="user-info">
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
                            />
                            <div id="post-right-container">
                                <div id="user-name">
                                    {
                                        post.users.find(
                                            (u) => u.id === post.author_id
                                        )?.name
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="badge">
                            {isInMyPost() ? (
                                <FavoriteIcon
                                    color="action"
                                    onClick={overview ? () => {} : removePost}
                                />
                            ) : (
                                <FavoriteBorderIcon
                                    color="action"
                                    onClick={overview ? () => {} : addPost}
                                />
                            )}
                        </div>
                    </div>
                    <div id="post-content-container">
                        {post.imgs.length ? (
                            <div id="post-content">
                                <span
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
                                        // maxHeight: "150px", // Optionally set a max height
                                    }}
                                >
                                    {post.content}
                                </span>
                                <Image src={post.imgs[0]} fluid />
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
                        {overview? 
                        <button onClick={()=>{navigate(`/post/${post.id}`)}}>View Full Post <FontAwesomeIcon icon={faArrowRight} /></button>: null}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostOverview;
