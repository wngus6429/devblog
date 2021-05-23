import React from "react";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <>
      <AppLayout>
        <div>Hello, Next~!</div>
      </AppLayout>
    </>
  );
};

export default Home;

//next는 위에 import React from 'react', 이 구문이 필요가 없다.
//next는 pages폴더를 인식한다 필수임 그래야 코드스플리팅이됨
//React 할때는 router 해줘야 각 pages폴더에 만든걸 들어갈수 있엇는데
//Next에서는 그냥 하면 되더라
