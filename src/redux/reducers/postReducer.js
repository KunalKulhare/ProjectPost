import {
    SET_POSTS_LOADING,
    ADD_POST,
  
  } from "../action/postActions";
  
  const initialState = {
    postsLoading: true,
    posts: [],
  };
  
  export default function postReducer(state = initialState, action) {
    switch (action.type) {
      case SET_POSTS_LOADING:
        state = { ...state, postsLoading: action.payload };
        return state;
      case ADD_POST:
        state = { ...state, posts: [...state.posts, action.payload] };
        return state;
     
      default:
        return state;
    }
  }
  