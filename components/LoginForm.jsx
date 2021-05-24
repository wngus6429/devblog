import React, { useCallback, useState, useMemo } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrap = styled.div`
  margin-top: 5px; //css적듯이
`;

const LogForm = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setisLoggedIn }) => {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  const InputStyle = useMemo(
    () => ({
      width: 250,
    }),
    []
  );

  //컴포넌트 prop에 넘겨주는 함수는 useCallback을 써야 최적화가 된다
  const onChangeId = useCallback((e) => {
    setid(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setpassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setisLoggedIn(true);
  }, [id, password]);
  //Saga 랑, reducer가 거의 동시에 실행된다 보면됨
  //강의 : saga 쪼개고 reducer와 연결하기 11분경
  //label htmlFor랑 밑에 input name 이랑 연결 시킨거임
  //type="primary 는 색을 담당한다
  //htmlType="submit" 이 되어 있어야 위에 Form이 작동함 그리고 onFinish 가 호출이 된다
  //그리고 onFinish에는 e.preventDefault()가 이미 되어져 있음

  return (
    <>
      <LogForm onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input style={InputStyle} name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br />
          <Input style={InputStyle} name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </div>
        <ButtonWrap>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Link href="/signup">
            <a>
              <Button type="danger">会員登録</Button>
            </a>
          </Link>
        </ButtonWrap>
      </LogForm>
    </>
  );
};

export default LoginForm;
