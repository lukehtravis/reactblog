import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="body">
          <div class="categories">
            <div class="individualcategory">
              <a></a>
            </div>
          </div>
          <div class="posts">
            <h2 class="posttitle"></h2>
            <div class="author"></div>
            <div class="postdate"></div>
            <div class="postbody"></div>
            <div class="votescore"></div>
            <div class="addcomment"></div>
            <div class="comments">
              <div class="addcomment"></div>
              <div class="comment">
                <div class="commentdate"></div>
                <div class="commentauthor"></div>
                <div class="commentbody"></div>
                <div class="commentvotes"></div>
              </div>
            </div>
          </div>
          <div class="adddeletebutton">
            <button class="add">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
