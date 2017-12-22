import React, { Component } from 'react';
import Post from './Post.js'

class PostList extends Component {
  render() {
    return (
      <div className="posts">
        <Post></Post>
      </div>
    )
  }
}

export default PostList
