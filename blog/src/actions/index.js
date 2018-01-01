import * as api from "../utils/api.js";
export const ADD_POST = 'ADD_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'

export function addPost ({ timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: ADD_POST,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  }
}

export function fetchAllPosts() {
  return {
    type: FETCH_ALL_POSTS,
    payload: api.getAllPosts()
  };
}

export function upvotePost ({ id, voteScore }) {
  return {
    type: UPVOTE_POST,
    id,
    voteScore
  }
}
