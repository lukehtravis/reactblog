import React, {Component} from 'react';
import CommentList from './CommentList.js'

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2 className="posttitle"></h2>
        <div className="author"></div>
        <div className="postdate"></div>
        <div className="postbody"></div>
        <div className="votescore"></div>
        <CommentList></CommentList>
      </div>
    )
  }
}

export default Post
