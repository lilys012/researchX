import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

import "./MainPage.scss";
import { Layout, Checkbox, Space, Button } from "antd";
import { ArrowLeftOutlined, SyncOutlined } from "@ant-design/icons";

function MainPage() {
    return (
        <Layout className="MainPage">
            <p>MainPage</p>
        </Layout>
    );
}

export default MainPage;
