import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="commentdate"></div>
        <div className="commentauthor"></div>
        <div className="commentbody"></div>
        <div className="commentvotes"></div>
      </div>
    )
  }
}

export default Comment
