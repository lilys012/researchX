import React from "react";
import { PostType } from "../../store/slices/post";
import "./PostOverview.scss";
import { Avatar } from "@mui/material";
import { Col, Container, Row, Image } from "react-bootstrap";

export interface viewProps {
    post: PostType | null;
    overview: boolean;
}

function PostOverview({ post, overview }: viewProps) {
    return (
        <div
            id="post-container"
            // className="p-1 mt-2 ms-2"
            // onClick={post.clickPost}
        >
            {post === null ? (
                <div></div>
            ) : (
                <div id="main-post-div">
                    <div id="user-info">
                        <Avatar
                            alt={
                                post.users.find((u) => u.id === post.author_id)
                                    ?.name
                            }
                            src={
                                post.users.find((u) => u.id === post.author_id)
                                    ?.profile_image_url
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
                    <div id="post-content-container">
                        {post.imgs.length ? (
                            <div id="post-content">
                                <span
                                    id="post-text"
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
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
                                        overflow: "hidden",
                                        WebkitLineClamp: 18, // Set the number of lines to show before truncation
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
