import React from "react";
import { PostType } from "../../store/slices/post";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./OpinionLink.scss";

function OpinionLink({ post }: { post: PostType }) {
    return (
        <Link
            style={{
                color: "#000",
                textDecoration: "none"
            }}
            to={`/post/${post.id}`}
            className="OpinionLink"
        >
            <div id="op-container">
                <Avatar
                    alt={post.users.find((u) => u.id === post.author_id)?.name}
                    src={
                        post.users.find((u) => u.id === post.author_id)
                            ?.profile_image_url
                    }
                />
                <div id="op-right-container">
                    <div id="user-name">
                        {post.users.find((u) => u.id === post.author_id)?.name}
                    </div>
                    <div
                        id="op-text"
                    >
                        {post.content}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default OpinionLink;
