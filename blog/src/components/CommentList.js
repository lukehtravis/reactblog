import React, { Component } from 'react';
import Comment from './Comment.js'

class CommentList extends Component {
  render() {
    return (
      <div className="comments">
        <div className="addcomment"></div>
        <Comment></Comment>
      </div>
    )
  }
}

export default CommentList
