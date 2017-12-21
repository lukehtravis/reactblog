import { combineReducers } from 'redux';

import {
  ADD_POST,
  UPVOTE_POST,
} from '../actions'

function posts (state = {}, action) {
  switch (action.type) {
    case ADD_POST :
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe,
      }
    case UPVOTE_POST :
      return state

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
