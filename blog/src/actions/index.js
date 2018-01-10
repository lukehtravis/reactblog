import * as api from "../utils/api.js";
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const VOTE = 'VOTE';
export const GET_POST = 'GET_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';

export const getPostsByCategory = (posts, category) => {
  return {
    type: GET_POSTS_BY_CATEGORY,
    posts,
    category
  }
}

export const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts,
  }
}

export const fetchPosts = () => (dispatch) => {
  return api.getAllPosts()
    .then((posts) => {
      return dispatch(getAllPosts(posts))
    })
};

export const addPostAction = (post) => {
  return {
    type: ADD_POST,
    post,
  }
}

export const addPost = (postData) => (dispatch) => {
  return api.addPost(postData)
    .then(postData => dispatch(addPostAction(postData)))
}

export const getPostAction = (post) => {
  return {
    type: GET_POST,
    post
  }
}

export const getPost = (id) => (dispatch) => {
  return api.getPost(id)
    .then(post => dispatch(getPostAction(post)))
}

export const editPost = (post) => (dispatch) => {
  return api.editPost(post)
    .then(post => dispatch(getPostAction(post)))
}

export const deletePostAction = (post) => {
  return {
    type: DELETE_POST,
    post
  }
}

export const deletePost = (post) => (dispatch) => {
  return api.deletePost(post)
    .then(post => dispatch(deletePostAction(post)))
}
