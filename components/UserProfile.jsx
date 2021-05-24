import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";

const { Meta } = Card;

const UserProfile = ({ setisLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setisLoggedIn(false);
  });

  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Button onClick={onLogOut}>LogOut</Button>
      트리킥
    </>
  );
};

export default UserProfile;
