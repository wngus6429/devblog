import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import SideMenu from "../pages/sidemenu";
import "antd/dist/antd.css";

const AppLayout = ({ children }) => {
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
          <Input.Search style={{ marginTop: 7, textAlign: "center" }} placeholder="Input Search Text" enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>会員登録</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={5}>
        <Col xs={24} md={8}>
          <SideMenu />
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={4}>
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
