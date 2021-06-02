import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { Button } from "antd";
import PostPost from "../components/PostPost";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const [write, setwrite] = useState(false);
  const writeform = useCallback(() => {
    setwrite((truefalse) => !truefalse); //true , false 번갈아가며 가능
    // if (!write) { setwrite(true);} else { setwrite(false);}
  });
  return (
    <>
      <AppLayout>
        {/* {me && <Button type={danger}>글쓰기</Button>} */}
        {isLoggedIn && (
          <Button type="danger" onClick={writeform}>
            글쓰기
          </Button>
        )}
        <PostPost />
        {write ? <PostForm cancelform={setwrite} /> : mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </AppLayout>
    </>
  );
};

export default Home;

//next는 위에 import React from 'react', 이 구문이 필요가 없다.
//next는 pages폴더를 인식한다 필수임 그래야 코드스플리팅이됨
//React 할때는 router 해줘야 각 pages폴더에 만든걸 들어갈수 있엇는데
//Next에서는 그냥 하면 되더라
