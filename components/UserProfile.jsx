import React, { useCallback, useState } from "react";
import { Card, Avatar, Button, Popover } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import NicknameEdit from "./NicknameEdit";
import { useDispatch } from "react-redux";
import { logoutAction } from "../Reducers/index";
const { Meta } = Card;

const UserProfile = () => {
  const dispatch = useDispatch();
  const [userprofile, setuserprofile] = useState(false);
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  });
  const nicknameedit = useCallback(() => {
    setuserprofile(true);
  });

  return (
    <>
      {userprofile ? (
        <NicknameEdit homeprofile={setuserprofile} />
      ) : (
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[
            <SettingOutlined key="setting" />,
            <Popover
              key="more"
              content={
                <Button type="danger" onClick={nicknameedit}>
                  修正
                </Button>
              }
            >
              <EditOutlined key="edit" />
            </Popover>,
            <Popover
              key="more"
              content={
                <Button.Group>
                  <Button type="danger" onClick={onLogOut}>
                    LogOut
                  </Button>
                </Button.Group>
              }
            >
              <LogoutOutlined />
            </Popover>,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      )}
    </>
  );
};

export default UserProfile;
