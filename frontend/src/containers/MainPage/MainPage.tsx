import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { AppDispatch } from "../../store";
import PostOverview from "../../components/PostOverview/PostOverview";
import { KeywordType, PostType, selectPost } from "../../store/slices/post";
import PostScroll from "../../components/PostScroll/PostScroll";
import WordCloud from "../../components/WordCloud/WordCloud";
import HeaderComponent from "../../components/Header/Header";

import "./MainPage.scss";
import { Layout, Checkbox, Space } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { List } from "@mui/material";

const { Content } = Layout;

function MainPage() {
    const { keyword } = useParams();

    const postState = useSelector(selectPost);
    const [postId, setPostId] = useState(0);
    const [tabValue, setTabValue] = React.useState("1");
    const [curKeyword, setCurKeyword] = useState<string>("");
    const [posts, setPosts] = useState<PostType[]>(postState.posts);
    const [keywords, setKeywords] = useState<KeywordType[]>(postState.keywords);
    const [acPosts, setAcPosts] = useState<PostType[]>([]);
    const [opPosts, setOpPosts] = useState<PostType[]>([]);
    const [refresh, setRefresh] = useState<Boolean>(false);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const wordcloudJSX = useMemo(() => {
        return <WordCloud setCurKeyword={setCurKeyword} posts={posts} />;
    }, [curKeyword]);

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const calculateTokenRecall = (keyword: string, content: string) => {
        const contentTokens = content.split(/\s+/);
        const keywordTokens = keyword.split(/\s+/);
        const recall = keywordTokens.reduce((count, token) => {
            return contentTokens.includes(token) ? count + 1 : count;
        }, 0);
        return recall / keywordTokens.length;
    };

    const sortPosts = (posts: PostType[], curKeyword: string) => {
        return posts.sort((a, b) => {
            const aContainsKeyword = a.keywords.includes(curKeyword);
            const bContainsKeyword = b.keywords.includes(curKeyword);

            if (aContainsKeyword && !bContainsKeyword) return -1;
            if (!aContainsKeyword && bContainsKeyword) return 1;

            if (aContainsKeyword && bContainsKeyword) {
                const aRecall = calculateTokenRecall(curKeyword, a.content);
                const bRecall = calculateTokenRecall(curKeyword, b.content);
                if (aRecall !== bRecall) return bRecall - aRecall;
                return (
                    new Date(b.created_at).getDate() -
                    new Date(a.created_at).getDate()
                );
            }

            const aRecall = calculateTokenRecall(curKeyword, a.content);
            const bRecall = calculateTokenRecall(curKeyword, b.content);

            if (aRecall !== bRecall) return bRecall - aRecall;
            return (
                new Date(b.created_at).getDate() -
                new Date(a.created_at).getDate()
            );
        });
    };

    const shuffleArray = (array: PostType[]) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    };

    const getCurPost = () => {
        let curPost = posts[0];
        for (let i = posts.length - 1; i > 0; i--) {
            if (posts[i].id == postId) {
                curPost = posts[i];
                break;
            }
        }
        return curPost;
    };

    useEffect(() => {
        if (keyword)
            setCurKeyword(keyword === "main" ? keywords[0].content : keyword);
    }, [keyword]);

    useEffect(() => {
        if (curKeyword) navigate(`/${curKeyword}`);
    }, [curKeyword]);

    useEffect(() => {
        setAcPosts(
            sortPosts(
                posts.filter((post) => post.isOpinion === false),
                curKeyword
            )
        );
        setOpPosts(
            sortPosts(
                posts.filter((post) => post.isOpinion === true),
                curKeyword
            )
        );
    }, [posts, curKeyword]);

    useEffect(() => {
        if (refresh) {
            const shuffledPosts = shuffleArray(postState.posts);
            const sampleSize = Math.ceil(shuffledPosts.length * 1.0);
            setPosts(shuffledPosts.slice(0, sampleSize));
            setRefresh(false);
        }
    }, [refresh]);

    useEffect(() => {
        if (acPosts.length) setPostId(acPosts[0].id);
    }, [acPosts]);

    return (
        <Layout className="MainPage">
            <HeaderComponent
                setCurKeyword={setCurKeyword}
                setRefresh={setRefresh}
            />
            <Content className="Content">
                <Container className="Container">
                    <div className="columnContainer">
                        <div
                            id="posts-container"
                            className="upperContainer leftContainer"
                        >
                            <h1
                                style={{ textAlign: "left", marginLeft: "3px" }}
                            >
                                {curKeyword}
                            </h1>
                            <Link
                                to={`/post/${
                                    posts.length ? getCurPost().id : 0
                                }`}
                                style={{
                                    color: "#000",
                                }}
                            >
                                <PostOverview
                                    post={posts.length ? getCurPost() : null}
                                    overview={true}
                                />
                            </Link>
                        </div>
                        <div
                            id="tabs-container"
                            className="lowerContainer leftContainer"
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    typography: "body1",
                                    marginTop: "15px",
                                }}
                            >
                                <TabContext value={tabValue}>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: "divider",
                                        }}
                                    >
                                        <TabList
                                            onChange={handleTabChange}
                                            // textColor="secondary"
                                            // indicatorColor="secondary"
                                        >
                                            <Tab label="Opinons" value="1" />
                                            <Tab
                                                label="Conferences"
                                                value="2"
                                            />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <List
                                            sx={{
                                                width: "100%",
                                                bgcolor: "background.paper",
                                                position: "relative",
                                                overflow: "auto",
                                                maxHeight: 200,
                                                "& ul": { padding: 0 },
                                            }}
                                            subheader={<li />}
                                        >
                                            {opPosts.map((post) => {
                                                return (
                                                    <Link
                                                        style={{
                                                            color: "#000",
                                                        }}
                                                        to={`/post/${post.id}`}
                                                    >
                                                        <div id="op-container">
                                                            <div id="user-main-badge">
                                                                <img
                                                                    className="badge-image"
                                                                    src={
                                                                        post.users.find(
                                                                            (
                                                                                u
                                                                            ) =>
                                                                                u.id ==
                                                                                post.author_id
                                                                        )
                                                                            ?.profile_image_url
                                                                    }
                                                                    style={{
                                                                        borderRadius:
                                                                            "50%",
                                                                    }}
                                                                    alt="sample"
                                                                />
                                                            </div>
                                                            <div id="op-right-container">
                                                                <div id="user-name">
                                                                    {
                                                                        post.users.find(
                                                                            (
                                                                                u
                                                                            ) =>
                                                                                u.id ==
                                                                                post.author_id
                                                                        )?.name
                                                                    }
                                                                </div>
                                                                <span
                                                                    id="op-text"
                                                                    style={{
                                                                        whiteSpace:
                                                                            "pre-wrap",
                                                                        display:
                                                                            "-webkit-box",
                                                                        WebkitBoxOrient:
                                                                            "vertical",
                                                                        overflow:
                                                                            "hidden",
                                                                        WebkitLineClamp: 1,
                                                                        height: "auto",
                                                                        fontSize:
                                                                            "14px",
                                                                        fontWeight: 500,
                                                                        fontFamily:
                                                                            "NanumGothic",
                                                                        width: "96%",
                                                                        marginBottom:
                                                                            "2px",
                                                                        padding:
                                                                            "0",
                                                                    }}
                                                                >
                                                                    {
                                                                        post.content
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </List>
                                    </TabPanel>
                                    <TabPanel value="2">Conferences</TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                    </div>
                    <div className="columnContainer">
                        <div
                            id="summaries-container"
                            className="upperContainer rightContainer"
                        >
                            <PostScroll
                                posts={acPosts}
                                postId={postId}
                                setPostId={setPostId}
                            ></PostScroll>
                        </div>
                        <div
                            id="top-keywords-container"
                            className="lowerContainer rightContainer"
                        >
                            <div
                                style={{
                                    textAlign: "left",
                                    marginLeft: "10px",
                                }}
                            >
                                <h2>Top Keywords in {curKeyword}</h2>
                            </div>
                            <div id="word-container">{wordcloudJSX}</div>
                        </div>
                    </div>
                </Container>
            </Content>
        </Layout>
    );
}

export default MainPage;
