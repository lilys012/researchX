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
                // marginTop: "30px",
            }}
            id="scroll-container"
        >
            <List
                id="scroll-list"
                sx={{
                    width: "100%",
                    maxWidth: 500,
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    borderRadius: "10px",
                    maxHeight: 600,
                    "& ul": { padding: 0 },
                    "&& .Mui-selected, && .Mui-selected:hover": {
                        bgcolor: "#3E4F5B",
                        "&, & .MuiListItemIcon-root": {
                            color: "white",
                        },
                    },
                }}
                subheader={<li />}
            >
                {posts.map((post) => {
                    return (
                        <ListItemButton
                            selected={postId === post.id}
                            onClick={(e) => setPostId(post.id)}
                            className="listItem"
                            sx={{
                                // border: "2px solid black",
                                // borderRadius: "20px",
                                margin: "2px",
                                padding: "2px",
                                borderBottom: "1px solid #3E4F5B"
                            }}
                            key={post.id}
                        >
                            <ListItemText
                                primaryTypographyProps={{
                                    style: {
                                        fontFamily: "NanumGothic",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        width: "96%",
                                        paddingLeft: "2%",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        whiteSpace: "pre-wrap",
                                        height: "40px",
                                        
                                    },
                                }}
                                primary={post.summary}
                            />
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
    );
}

export default PostScroll;
