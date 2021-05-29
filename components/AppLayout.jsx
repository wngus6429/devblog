import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import SideMenu from "../pages/sidemenu";
import "antd/dist/antd.css";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Clock from "./clock";
import Signup from "../pages/signup";
import { useSelector } from "react-redux";
{
  /* <Input.Search style={{ marginTop: 7, textAlign: "center" }} placeholder="Input Search Text" enterButton /> */
}
const SearchInput = styled(Input.Search)`
  margin-top: 7px;
  text-align: center;
`;

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user); //구조분해 할당, 성능차이 있으나 미미
  //const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  //const [isLoggedIn, setisLoggedIn] = useState(false);
  const [signup, setsignup] = useState(false);

  return (
    <>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item>
          <Link href="/">
            <a>Home画面</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>プロフィール</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput placeholder="Input Search Text" enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="https://www.naver.com">
            <a>네이버</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={5}>
        <Col xs={24} md={6}>
          <SideMenu />
          <Clock />
        </Col>
        <Col xs={24} md={13}>
          {children}
        </Col>
        <Col xs={24} md={5}>
          {signup ? <Signup signupfo={setsignup} /> : isLoggedIn ? <UserProfile /> : <LoginForm signupfo={setsignup} />}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/wngus6429?tab=repositories">
            GitHub
          </a>
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, //리액트의 node임. 화면에 그리는건 node임
};
//타입스크립트 라면 필요가 없겟지
//저장하면 알아서 빌드 해주는건 리액트 핫로더임 next에 들어잇음
export default AppLayout;

{
  /* <Input.Search style={{ verticalAlign: "middle", textAlign: "center" }} placeholder="Input Search Text" enterButton /> */
}
