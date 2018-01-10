import React, { Component } from 'react';
import logo from './logo.svg';
import {
  fetchPosts
} from './actions/index.js';
import './App.css';
import {connect} from 'react-redux';
import CategoryList from './components/CategoryList.js';
import CommentList from './components/CommentList.js';
import PostList from './components/PostList.js'
import * as api from "./utils/api.js";

class App extends Component {
  state = {
    posts: {}
  }




  /*componentDidMount() {
    this.props.fetchPosts()
      .then(result => result.posts)
      .then(result => {
        this.setState({ posts: result })
      })
  }*/

  render() {
    const url = 'http://localhost:3001';
    const KEY = 'KEY';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': KEY
    };


    return (
      <div className="App">
        <div className="body">
          <CategoryList></CategoryList>
          <PostList></PostList>
          <div className="adddeletebutton">
            <button onClick={this.test} className="add">click</button>

          </div>
        </div>
      </div>
    );
  }
}

//export default connect(mapStateToProps, {fetchPosts})(App);
export default App;
