import { HYDRATE } from "next-redux-wrapper"; //리덕스 서버사이드랜더링을 위해 하이드레이트 사용
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// 이런식으로 동적으로 하는게 좋다. 유저가 마음대로 이름 짓기 가능하게
// const changeNickname = (data) => {
//    return{
//   type: "CHANGE_NICKNAME", data;
// }};
//changeNickname('boogicho');

// (이전 상태, 액션) => 다음 상태 , combineReducers는 리듀서 합쳐줌
// HYDRATE를 위해서 index reducer를 추가한 상태 28까지
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});
//user.js든지 post.js 에서 오는거 리덕스가 알아서 해줌
// 액션에 필요한 추가 데이터는 payload라는 이름을 사용함.

export default rootReducer;
