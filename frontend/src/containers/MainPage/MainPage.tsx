import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

import "./MainPage.scss";
import { Layout, Checkbox, Space, Button } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "material-ui-search-bar";
import { styled } from "@material-ui/core/styles";

const { Header, Content } = Layout;

export const CustomSearchBar = styled(SearchBar)({
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
    fontFamily: '"NanumGothic", sans-serif',
    fontSize: "10px",
});

function MainPage() {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const onClickClose = () => {
        setSearchQuery("");
    };
    const onSubmitSearchBox = () => {};

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
                <div id="search-box-container">
                    <CustomSearchBar
                        className="search-box"
                        value={searchQuery}
                        onChange={(searchVal) => setSearchQuery(searchVal)}
                        onCancelSearch={() => onClickClose()}
                        onRequestSearch={() => onSubmitSearchBox()}
                        placeholder=""
                    />
                </div>
                <div></div>
            </Header>
        </Layout>
    );
}

export default MainPage;
