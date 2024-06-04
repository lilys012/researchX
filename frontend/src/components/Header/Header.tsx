import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import KeywordsList from "../KeywordsList/KeywordsList";
import { Layout, Checkbox, Space } from "antd";
import { styled } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import {
    ArrowLeftOutlined,
    BarsOutlined,
    PushpinOutlined,
    SyncOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { selectPost, KeywordType } from "../../store/slices/post";
import "./Header.scss";

// TODO : saved posts

const { Header } = Layout;

export const CustomSearchBar = styled(SearchBar)({
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
    fontFamily: '"NanumGothic", sans-serif',
    fontSize: "10px",
});

function HeaderComponent({
    setCurKeyword,
    setRefresh,
    setIsMyPost,
}: {
    setCurKeyword: React.Dispatch<React.SetStateAction<string>> | null;
    setRefresh: React.Dispatch<React.SetStateAction<Boolean>> | null;
    setIsMyPost: React.Dispatch<React.SetStateAction<Boolean>> | null;
}) {
    const navigate = useNavigate();
    const postState = useSelector(selectPost);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [keywordId, setKeywordId] = useState(0);
    const [keywords, setKeywords] = useState<KeywordType[]>(postState.keywords);
    const onClickClose = () => {
        setSearchQuery("");
    };
    const onSubmitSearchBox = () => {
        if (setCurKeyword != null) setCurKeyword(searchQuery);
        setSearchQuery("");
    };
    const onClickRefreshButton = () => {
        if (setRefresh != null) setRefresh(true);
    };
    const onClickIsMyPostsButton = () => {
        if (setIsMyPost != null) setIsMyPost(true);
    };

    useEffect(() => {
        if (setCurKeyword != null) setCurKeyword(keywords[0].content);
    }, []);
    useEffect(() => {
        const intervalId = setInterval(
            () => setKeywordId((keywordId) => (keywordId + 3) % 9),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <Header
            id="mainpage-upper-container"
            className="Header"
            style={{ backgroundColor: "white" }}
        >
            <div
                id="logo-container"
                onClick={() => {
                    navigate("/");
                }}
            >
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
                    setCurKeyword={setCurKeyword}
                ></KeywordsList>
            </div>
            <div id="button-container">
                <SyncOutlined
                    id="refresh-button"
                    className="button"
                    onClick={onClickRefreshButton}
                />
                <PushpinOutlined
                    id="saved-button"
                    className="button"
                    onClick={onClickIsMyPostsButton}
                />
                {/* <UserOutlined id="account-button" className="button" /> */}
                <div id="user-main-badge">
                    <img
                        className="badge-image"
                        src={
                            "https://pbs.twimg.com/profile_images/1779541660164337664/Jy8Lkb57_normal.jpg"
                        }
                        style={{ borderRadius: "50%", marginLeft: "-5px" }}
                        alt="sample"
                        onClick={() => {
                            window.open(
                                "https://twitter.com/yoonsang_",
                                "_blank"
                            );
                        }}
                    />
                </div>
            </div>
        </Header>
    );
}

export default HeaderComponent;
