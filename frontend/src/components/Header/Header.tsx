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
  SyncOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { KeywordType, selectKeyword } from "../../store/slices/keyword";
import "./Header.scss";

const { Header } = Layout;

export const CustomSearchBar = styled(SearchBar)({
  backgroundColor: "#F5F5F5",
  borderRadius: "10px",
  fontFamily: '"NanumGothic", sans-serif',
  fontSize: "10px",
});

function HeaderComponent(){
  const navigate = useNavigate();
  const keywordState = useSelector(selectKeyword);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [refresh, setRefresh] = useState<Boolean>(true);
  const [curKeyword, setCurKeyword] = useState<string>("");
  const [keywordId, setKeywordId] = useState(0);
  const [keywords, setKeywords] = useState<KeywordType[]>(
    keywordState.keywords
);
  const onClickClose = () => {
    setSearchQuery("");
};
const onSubmitSearchBox = () => {};
const onClickRefreshButton = () => {
    setRefresh(true);
};
useEffect(() => {
  setCurKeyword(keywords[0].content);
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
                <div id="logo-container" onClick={()=>{navigate('/')}}>
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
                    <BarsOutlined id="menufold-button" className="button" />
                    <SyncOutlined
                        id="refresh-button"
                        className="button"
                        onClick={onClickRefreshButton}
                    />
                    <UserOutlined id="account-button" className="button" />
                </div>
            </Header>
  )
}

export default HeaderComponent;