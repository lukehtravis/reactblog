export const ADD_POST = 'ADD_POST'
export const UPVOTE_POST = 'UPVOTE_POST'

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

export function upvotePost ({ id, voteScore }) {
  return {
    type: UPVOTE_POST,
    id,
    voteScore
  }
}
