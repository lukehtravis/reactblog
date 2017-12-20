import { combineReducers } from 'redux';

function posts (state = {}) {
  return state;
}

function comments (state = {}) {
  return state;
}

export default combineReducers({
  posts,
  comments
})
