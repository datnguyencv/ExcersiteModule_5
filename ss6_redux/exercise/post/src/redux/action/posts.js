import { postService } from "../../services/postService";
import { CREATE_POSTS, GET_ALL_POSTS } from "./type";

export const getAllPost = () => async (dispatch) => {
  try {
    
    const res = await postService.getAll();
    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export const savePost = (posts) => async (dispatch) => {
  try {
    const res = await postService.save(posts);
    dispatch({
      type: CREATE_POSTS,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error", error);
  }
};
