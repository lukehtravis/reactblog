import { combineReducers } from 'redux';

import {
  ADD_POST,
  GET_ALL_POSTS
} from '../actions'

const initialState =   {"8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  }}

function posts (state = initialState, action) {
  switch (action.type) {
    case ADD_POST :
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe,
      }
    case GET_ALL_POSTS :
      return {
        ...state,
        posts: action.posts
      }

    default :
      return state
  }
}

function comments (state = {}, action) {
  return state;
}

export default combineReducers({
  posts,
  comments
})
