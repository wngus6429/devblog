import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const listData = [];
for (let i = 0; i < 20; i++) {
  listData.push({
    href: "https://ant.design",
    title: `Antd 디자인 패턴 ${i}`,
    avatar: 'https://user-images.githubusercontent.com/55697824/120096260-60833000-c165-11eb-965e-4172ca7cb41e.PNG',
    description: "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "Antd의 PostCard 디자인",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const PostCard = ({ post }) => {
  return (
    <>
      <List itemLayout="vertical" size="large" pagination={{ onChange: (page) => { console.log(page);}, pageSize: 3 }}
        dataSource={listData} footer={<div> <b>Ant Design</b> footer</div>}
        renderItem={(item) => (
          <List.Item key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
};

export default PostCard;

//배열안에 jsx들을 넣을때는 key를 항상 붙여야함
//popover는 ... 에다가 손 올리면 여러가지 더 보기 버튼
//type="danger"는 빨간색, primary 파란색

// import { EllipsisOutlined, HeartOutlined } from "@ant-design/icons";
// import { Card, Popover } from "antd";
// import PostImages from "./PostImages";
// import React from "react";

// const PostCard = ({ post }) => {
//   return (
//     <>
//       <div>PostCard</div>
//       <Card
//         cover={post.Images[0] && <PostImages images={post.Images} action={[<HeartOutlined key="heart" />, <EllipsisOutlined key="elli" />]} />}
//       ></Card>
//       <img
//         src="data:image/png;base64,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"
//         alt=""
//       />
//     </>
//   );
// };

// export default PostCard;
