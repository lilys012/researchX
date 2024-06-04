import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch } from "../../store";
import PostOverview from "../../components/PostOverview/PostOverview";
import { KeywordType, PostType, selectPost } from "../../store/slices/post";
import PostScroll from "../../components/PostScroll/PostScroll";
import WordCloud from "../../components/WordCloud/WordCloud";
import HeaderComponent from "../../components/Header/Header";

import "./MainPage.scss";
import { Layout } from "antd";
import Container from "react-bootstrap/Container";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { List } from "@mui/material";
import OpinionLink from "../../components/OpinionLink/OpinionLink";

const { Content } = Layout;

function MainPage({
    myposts,
    setMyPosts,
}: {
    myposts: number[];
    setMyPosts: React.Dispatch<React.SetStateAction<number[]>>;
}) {
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
    const [isMyPost, setIsMyPost] = useState<Boolean>(false);

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
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                );
            }

            const aRecall = calculateTokenRecall(curKeyword, a.content);
            const bRecall = calculateTokenRecall(curKeyword, b.content);

            if (aRecall !== bRecall) return bRecall - aRecall;
            return (
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            );
        });
    };

    const shuffleArray = (array: PostType[]) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    };

    const getCurPost = () => {
        // return post s.t. its id equals postId
        let curPost = posts[0];
        for (let i = posts.length - 1; i > 0; i--) {
            if (posts[i].id === postId) {
                curPost = posts[i];
                break;
            }
        }
        return curPost;
    };

    const getMyPost = () => {
        // return array containing saved posts
        let curPost: PostType[] = [];
        for (let i = myposts.length - 1; i >= 0; i--) {
            curPost = [...curPost, posts[myposts[i]]];
        }
        return curPost;
    };

    useEffect(() => {
        // initial redirection from 'main'
        if (keyword)
            setCurKeyword(keyword === "main" ? keywords[0].content : keyword);
    }, [keyword]);

    useEffect(() => {
        // navigation if curKeyword changes
        if (curKeyword) navigate(`/${curKeyword}`);
    }, [curKeyword]);

    useEffect(() => {
        // classify into academic and opinions
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
        // refresh posts
        if (refresh && curKeyword !== "Saved Posts") {
            const shuffledPosts = shuffleArray(postState.posts);
            const sampleSize = Math.ceil(shuffledPosts.length * 1.0);
            setPosts(shuffledPosts.slice(0, sampleSize));
            setRefresh(false);
        }
    }, [refresh]);

    useEffect(() => {
        // set default overview post
        if (acPosts.length && curKeyword !== "Saved Posts")
            setPostId(acPosts[0].id);
    }, [acPosts]);

    useEffect(() => {
        // handle showing saved posts
        if (isMyPost) {
            setCurKeyword("Saved Posts");
            setIsMyPost(false);
            setPostId(myposts[myposts.length - 1]);
        }
    }, [isMyPost]);

    return (
        <Layout className="MainPage">
            <HeaderComponent
                setCurKeyword={setCurKeyword}
                setRefresh={setRefresh}
                setIsMyPost={setIsMyPost}
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
                                    myposts={myposts}
                                    setMyPosts={setMyPosts}
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
                                    <TabPanel
                                        value="1"
                                        sx={{ padding: "10px" }}
                                    >
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
                                            {curKeyword === "Saved Posts"
                                                ? getMyPost()
                                                      .filter(
                                                          (post) =>
                                                              post.isOpinion ===
                                                              true
                                                      )
                                                      .map((post) => {
                                                          return (
                                                              <OpinionLink
                                                                  post={post}
                                                                  key={post.id}
                                                              />
                                                          );
                                                      })
                                                : opPosts.map((post) => {
                                                      return (
                                                          <OpinionLink
                                                              post={post}
                                                              key={post.id}
                                                          />
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
                                posts={
                                    curKeyword === "Saved Posts"
                                        ? getMyPost().filter(
                                              (post) => post.isOpinion === false
                                          )
                                        : acPosts
                                }
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
