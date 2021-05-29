import React from "react";
import propTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import wrapper from "../store/configureStore";

//index의 return부분이 여기 Component 안으로 들어감
const parkDevblog = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>DevBlog</title>
      </Head>
      <div>공통메뉴</div>
      <Component />
    </>
  );
};

parkDevblog.proTypes = {
  Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(parkDevblog);
