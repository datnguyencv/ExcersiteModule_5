import { CREATE_POSTS, GET_ALL_POSTS } from "../action/type";

const initialState = [];

export const postsReducer = (posts = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return payload;
    case CREATE_POSTS:
      return [payload, ...posts];
    default:
      return posts;
  }
};