import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

import "./MainPage.scss";
import { Layout, Checkbox, Space } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "material-ui-search-bar";
import { styled } from "@material-ui/core/styles";
import {
    ArrowLeftOutlined,
    BarsOutlined,
    SyncOutlined,
    UserOutlined,
} from "@ant-design/icons";
import KeywordsList from "../../components/KeywordsList/KeywordsList";
import { KeywordType, selectKeyword } from "../../store/slices/keyword";
import PostOverview from "../../components/PostOverview/PostOverview";
import { PostType, selectPost } from "../../store/slices/post";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const { Header, Content } = Layout;

export const CustomSearchBar = styled(SearchBar)({
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
    fontFamily: '"NanumGothic", sans-serif',
    fontSize: "10px",
});

function MainPage() {
    const keywordState = useSelector(selectKeyword);
    const postState = useSelector(selectPost);

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [refresh, setRefresh] = useState<Boolean>(true);
    const [keywordId, setKeywordId] = useState(0);
    const [postId, setPostId] = useState(0);
    const [tabValue, setTabValue] = React.useState("one");
    const [curKeyword, setCurKeyword] = useState<string>("");
    const [keywords, setKeywords] = useState<KeywordType[]>(
        keywordState.keywords
    );
    const [posts, setPosts] = useState<PostType[]>(postState.posts);

    const onClickClose = () => {
        setSearchQuery("");
    };
    const onSubmitSearchBox = () => {};
    const onClickRefreshButton = () => {
        setRefresh(true);
    };
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        const intervalId = setInterval(
            () => setKeywordId((keywordId) => (keywordId + 3) % 9),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    useEffect(() => {
        setCurKeyword(keywords[0].content);
    }, []);

    return (
        <Layout className="MainPage">
            <Header
                id="mainpage-upper-container"
                className="Header"
                style={{ backgroundColor: "white" }}
            >
                <div id="logo-container">
                    <img src="/RXLogo.svg" />
                </div>
                <div id="search-container">
                    <div id="search-box-container">
                        <CustomSearchBar
                            className="search-box"
                            value={searchQuery}
                            onChange={(searchVal) => setSearchQuery(searchVal)}
                            onCancelSearch={() => onClickClose()}
                            onRequestSearch={() => onSubmitSearchBox()}
                            placeholder="Search"
                        />
                    </div>
                    <KeywordsList
                        keywordId={keywordId}
                        keywords={keywords}
                    ></KeywordsList>
                </div>
                <div id="button-container">
                    <BarsOutlined id="menufold-button" className="button" />
                    <SyncOutlined
                        id="refresh-button"
                        className="button"
                        onClick={onClickRefreshButton}
                    />
                    <UserOutlined id="account-button" className="button" />
                </div>
            </Header>
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
                            <PostOverview post={posts[postId]}></PostOverview>
                        </div>
                        <div
                            id="tabs-container"
                            className="lowerContainer leftContainer"
                        >
                            <Box sx={{ width: "100%", typography: "body1" }}>
                                <TabContext value={tabValue}>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: "divider",
                                        }}
                                    >
                                        <TabList
                                            onChange={handleTabChange}
                                            textColor="secondary"
                                            indicatorColor="secondary"
                                        >
                                            <Tab label="Opinons" value="1" />
                                            <Tab
                                                label="Conferences"
                                                value="2"
                                            />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">Item One</TabPanel>
                                    <TabPanel value="2">Item Two</TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                    </div>
                    <div className="columnContainer">
                        <div
                            id="summaries-container"
                            className="upperContainer rightContainer"
                        >
                            posts
                        </div>
                        <div
                            id="top-keywords-container"
                            className="lowerContainer rightContainer"
                        >
                            tabs
                        </div>
                    </div>
                </Container>
            </Content>
        </Layout>
    );
}

export default MainPage;