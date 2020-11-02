import { FETCH_USER, FETCH_POST, FETCH_COMMENT } from "../Actions/ActionsType";
const initialState = {
  userList: [],
  postList: [],
  commentList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, userList: action.payload };
    case FETCH_POST:
      return { ...state, postList: action.payload };
    case FETCH_COMMENT:
      return { ...state, commentList: action.payload };
    default:
      return state;
  }
};
export default reducer;
