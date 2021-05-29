export const initialState = {
  mainPosts: [],
};
//왜 User, Image, Comment만 첫글자에 대문자냐? db에서 쓰는 시퀄라이즈랑 관계있는데.어떤 정보와 다른 정보가 관게가 있으면 그것을 합쳐줌
//합쳐준 애들은 대문자가 되기 때문 , id나 content는 게시글 속성이고
//미리 서버 개발자한테 물어보는게 좋지
//action은 객체이다
const ADD_POST = "ADD_POST";
//이렇게 빼주면 좋은점이 밑에 ,case ADD_POST처럼 const값을 재활용 할수 있음
//그리고 변수 선언으로 인해 오타 방지
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }; //dummyPost가 앞에 있어야 함 뒤에 있으면 게시글 맨 아래에 추가됨
    default:
      return state;
  }
};

export default reducer;
