import React, { useEffect, useState } from "react";
import PostOverview from "../../components/PostOverview/PostOverview";
import HeaderComponent from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PostType, selectPost } from "../../store/slices/post";
import GPTInteraction from "../../components/GPTInteraction/GPTInteraction";
import { Avatar } from "@mui/material";
import "./PostDetail.scss";

function PostDetail({
    myposts,
    setMyPosts,
}: {
    myposts: number[];
    setMyPosts: React.Dispatch<React.SetStateAction<number[]>>;
}) {
    const { id } = useParams();
    const postState = useSelector(selectPost);
    const [targetPost, setTargetPost] = useState<PostType>({
        id: -1,
        content: "404",
        keywords: [],
        summary: "",
        isOpinion: false,
        imgs: [],
        urls: [],
        author_id: "",
        postId: "",
        created_at: "",
        users: [],
    });
    useEffect(() => {
        postState.posts.forEach((e) => {
            if (id && e.id === parseInt(id)) setTargetPost(e);
        });
    }, [id]);
    return (
        <div id="PostDetail">
            <HeaderComponent
                setCurKeyword={null}
                setRefresh={null}
                setIsMyPost={null}
            />
            <div className="postdetail-main-container">
                <div className="upper">
                    <div className="postdetail-overview">
                        <PostOverview
                            post={targetPost}
                            overview={false}
                            myposts={myposts}
                            setMyPosts={setMyPosts}
                        />
                    </div>
                    <div className="gpt-container">
                        <div className="gpt-header">
                            <h2>Ask GPT</h2>
                        </div>
                        <GPTInteraction tweet={targetPost.content}/>
                    </div>
                </div>
                <div className="lower">
                    <div className="author-bio-container">
                        <div className="author-bio-header">
                            <h2>Authors</h2>
                        </div>
                        <ul className="authors">
                            {targetPost.users.map((u, i)=><li key={i}>
                                <a href={u?.url||`https://x.com/${u.username}`} className="link-author-profile">
                                    <Avatar alt={u.name} src={u.profile_image_url} />
                                    <div className="author-name">{u.name}</div>
                                </a>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostDetail;
