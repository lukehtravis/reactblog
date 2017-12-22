import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import CategoryList from './components/CategoryList.js'
import CommentList from './components/CommentList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <CategoryList></CategoryList>
          <div className="posts">
            <h2 className="posttitle"></h2>
            <div className="author"></div>
            <div className="postdate"></div>
            <div className="postbody"></div>
            <div className="votescore"></div>
            <CommentList></CommentList>
          </div>
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
