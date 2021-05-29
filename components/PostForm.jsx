import React, { useCallback, useRef, useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";
//import useinput from "../hooks/useinput";

const PostForm = ({ cancelform }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [Text, setText] = useState("");
  const [Title, setTitle] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  //   useEffect(() => {
  //     if (addPostDone) {
  //       setText("");
  //     }
  //   }, [addPostDone]);

  const cancelfunc = useCallback(() => {
    cancelform(false);
  });

  const onSubmit = useCallback(() => {
    console.log("글쓰기", Title, Text);
    dispatch(addPost);
    setText("");
    setTitle("");
  }, []);
  //액션은 객체이다

  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <>
      {isLoggedIn && (
        <Form style={{ margin: "20px 0 20px" }} encType="multipart/form-data" onFinish={onSubmit}>
          <Input.Group compact>
            <Select defaultValue="React">
              <Option value="React">React</Option>
              <Option value="Js">JS</Option>
            </Select>
            <Input style={{ width: "50%" }} value={Title} onChange={onChangeTitle} placeholder="Input TiTle" />
            {/* <Input style={{ width: "50%" }} placeholder="Input Text" defaultValue="Xihu District, Hangzhou" /> */}
          </Input.Group>
          <Input.TextArea value={Text} onChange={onChangeText} maxLength={140} placeholder="어그로 글 삭제, 꼬우면 나가셈" />
          <div>
            <input type="file" multiple hidden ref={imageInput} />
            <Button onClick={onClickImageUpload}>イメージアップロード</Button>
            <Button type="primary" style={{ float: "right" }} htmlType="submit">
              作成
            </Button>
            <Button type="danger" style={{ float: "right" }} onClick={cancelfunc}>
              取り消し
            </Button>
          </div>
          <div>
            {imagePaths.map((v) => {
              <div key={v} style={{ display: "inline-block" }}>
                <img src={v} style={{ width: "200px" }} alt={v} />
                <div>
                  <Button>削除</Button>
                </div>
              </div>;
            })}
          </div>
        </Form>
      )}
    </>
  );
};

export default PostForm;

//hidden은 밑에 다른 Button (이미지 삽입) 을 사용하기 위해서 안보이게 한것
