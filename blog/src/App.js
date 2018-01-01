import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import CategoryList from './components/CategoryList.js';
import CommentList from './components/CommentList.js';
import PostList from './components/PostList.js'

class App extends Component {
  render() {
    const url = 'http://localhost:3001';
    const KEY = 'KEY';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': KEY
    };

    const getMethod = { method: "GET" };

    fetch(`${url}/posts`, { headers }, { getMethod }).then(res =>
      res.json().then(json => {console.log(json)})
    );


    return (
      <div className="App">
        <div className="body">
          <CategoryList></CategoryList>
          <PostList></PostList>
          <div className="adddeletebutton">
            <button className="add"></button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(bigStore) {
  return bigStore
}

export default connect(mapStateToProps)(App);
