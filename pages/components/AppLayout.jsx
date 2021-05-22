import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <>
      <Link href="/">
        <a>노드버드</a>
      </Link>
      <Link href="/profile">
        <a>프로필</a>
      </Link>
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
      <div>공통메뉴</div>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, //리액트의 node임. 화면에 그리는건 node임
};
//타입스크립트 라면 필요가 없겟지
//저장하면 알아서 빌드 해주는건 리액트 핫로더임 next에 들어잇음
export default AppLayout;
