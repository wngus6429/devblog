import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const sidemenu = () => {
  const [collapsed, setcollapsed] = useState(false);

  const toggleCollapsed = () => {
    setcollapsed(!collapsed);
  };
  return (
    <>
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={toggleCollapsed}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" theme="dark" inlineCollapsed={collapsed}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            開発者
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            基本情報技術者試験
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            FrontEnd, BackEnd
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="React">
            <Menu.Item key="4">React 基礎</Menu.Item>
            <Menu.Item key="5">React 基礎２</Menu.Item>
            <Menu.Item key="6">React 基礎３</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<MailOutlined />} title="React Hooks">
            <Menu.Item key="7">React Hooks 基礎</Menu.Item>
            <Menu.Item key="8">React Hooks 基礎２</Menu.Item>
            <Menu.Item key="9">React Hooks 基礎３</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="React Game">
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub4" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </>
  );
};

export default sidemenu;
