import React from "react";
import { PostType } from "../../store/slices/post";
import "./PostOverview.scss";

function PostOverview({ post }: { post: PostType | null }) {
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
                                src={"/account.svg"}
                                alt="sample"
                            />
                        </div>
                        <div id="post-right-container">
                            <div id="user-name">User1</div>
                        </div>
                    </div>
                    <div id="post-content-container">
                        {post.content === "" ? null : (
                            <div id="post-content">
                                <span id="post-text">{post.content}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostOverview;
