import React from "react";
import "./PostScroll.scss";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { PostType } from "../../store/slices/post";

function PostScroll({
    posts,
    postId,
    setPostId,
}: {
    posts: PostType[];
    postId: number;
    setPostId: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 500,
                bgcolor: "background.paper",
                marginTop: "30px",
            }}
            id="scroll-container"
        >
            <List
                sx={{
                    width: "100%",
                    maxWidth: 500,
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 350,
                    "& ul": { padding: 0 },
                }}
                subheader={<li />}
            >
                {posts.map((post) => {
                    return (
                        <ListItemButton
                            selected={postId === post.id}
                            onClick={(e) => setPostId(post.id)}
                            className="listItem"
                        >
                            <ListItemText primary={post.summary} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
    );
}

export default PostScroll;
