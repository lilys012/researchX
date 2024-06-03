import React from "react";
import { PostType } from "../../store/slices/post";
import "./PostOverview.scss";

export interface viewProps {
    post: PostType | null;
    overview: boolean;
}

//TODO overview일 때 post 내용 말 줄이기 표시 (truncate?)

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
                        <div id="user-main-badge">
                            <img
                                className="badge-image"
                                src={
                                    post.users.find(
                                        (u) => u.id == post.author_id
                                    )?.profile_image_url
                                }
                                style={{ borderRadius: "50%" }}
                                alt="sample"
                            />
                        </div>
                        <div id="post-right-container">
                            <div id="user-name">
                                {
                                    post.users.find(
                                        (u) => u.id == post.author_id
                                    )?.name
                                }
                            </div>
                        </div>
                    </div>
                    <div id="post-content-container">
                        {post.content === "" ? null : (
                            <div id="post-content">
                                <span
                                    id="post-text"
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        WebkitLineClamp: 9, // Set the number of lines to show before truncation
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
