import React, { useMemo } from "react";
import { Button, Form, Input } from "antd";

const NicknameEdit = ({ homeprofile }) => {
  const style = useMemo(() => {
    border: "1px solid";
  }, []);
  const inputstyle = useMemo(() => {
    width: 350;
  }, []);
  const homepro = () => {
    homeprofile(false);
  };
  return (
    <>
      <Form style={style}>
        <Input.Search style={inputstyle} addonBefore="Nickname" enterButton="수정" />
      </Form>
      <Button onClick={homepro}>前のページ</Button>
    </>
  );
};

export default NicknameEdit;
