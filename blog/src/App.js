import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="body">
          <div className="categories">
            <div className="individualcategory">
              <a></a>
            </div>
          </div>
          <div className="posts">
            <h2 className="posttitle"></h2>
            <div className="author"></div>
            <div className="postdate"></div>
            <div className="postbody"></div>
            <div className="votescore"></div>
            <div className="addcomment"></div>
            <div className="comments">
              <div className="addcomment"></div>
              <div className="comment">
                <div className="commentdate"></div>
                <div className="commentauthor"></div>
                <div className="commentbody"></div>
                <div className="commentvotes"></div>
              </div>
            </div>
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
