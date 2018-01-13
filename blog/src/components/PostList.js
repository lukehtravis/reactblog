import {
  fetchPosts
} from '../actions/index.js';
import React, { Component } from 'react';
import Post from './Post.js'
import * as api from "../utils/api.js";
import {connect} from 'react-redux';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
      .then(result => result.posts)
      .then(result => {
        this.setState({ posts: result })
      })
  }
  render() {
    return (
      <div className="posts">
        <Post></Post>
      </div>
    )
  }
}

const mapStateToProps = (post) => {
  return  post ;
};

export default connect(mapStateToProps, {fetchPosts})(PostList);
