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
                        style={{
                            whiteSpace: "pre-wrap",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            height: "auto",
                            fontSize: "12px",
                            fontWeight: 500,
                            fontFamily: "NanumGothic",
                            width: "96%",
                            marginBottom: "2px",
                            padding: "0",
                        }}
                    >
                        {post.content}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default OpinionLink;
