import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";
import Head from "next/head";
import styled from "styled-components";
import useinput from "../hooks/useinput";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = ({ signupfo }) => {
  const [Id, onChangeId] = useinput("");
  // const [Id, setId] = useState("");
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);
  const [NickName, onChangeNickName] = useinput("");
  // const [NickName, setNickName] = useState("");
  // const onChangeNickName = useCallback((e) => {
  //   setNickName(e.target.value);
  // }, []);
  const [Password, onChangePassword] = useinput("");
  // const [Password, setPassword] = useState("");
  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // }, []);
  const [PasswordError, setPasswordError] = useState(false); //비밀번호가 일치 하지 않으면 첫번쨰 true가 됨
  const [PasswordCheck, setPasswordCheck] = useState("");

  const onChangePasswordCheck = useCallback((e) => 
  { setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== Password); }, [Password] );
    
  const [Term, setTerm] = useState("");
  const [TermError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => 
  { setTerm(e.target.checked);
    setTermError(false);}, []);

  const onsubmit = useCallback(() => {
    if (Password !== PasswordCheck) 
    { return setPasswordError(true);}
    if (!Term) 
    { return setTermError(true);}
    console.log(Id, NickName, Password);
  }, [Password, PasswordCheck, Term]);

  const signupform = () => { signupfo(false);};

  return (
    <>
      <Head>
        <title>会員登録</title>
      </Head>
      <Form onFinish={onsubmit}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input name="user-id" value={Id} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-id">NickName</label>
          <br />
          <Input name="user-id" value={NickName} onChange={onChangeNickName} />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br />
          <Input name="user-password" type="password" value={Password} onChange={onChangePassword} required />
        </div>
        <div>
          <label htmlFor="user-password">Password Check</label>
          <br />
          <Input name="user-password-check" type="password" value={PasswordCheck} onChange={onChangePasswordCheck} required />
          {PasswordError && <ErrorMessage>暗証番号が一致していません。</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={Term} onChange={onChangeTerm}>
            내 말을 잘 들을것
          </Checkbox>
          {TermError && <ErrorMessage> 同意してください。</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">登録</Button>
          <Button onClick={signupform} type="danger">前のページ</Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
