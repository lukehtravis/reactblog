import React, { Component } from 'react';
import Category from './Category.js';
import {connect} from 'react-redux';

class CategoryList extends Component {
  render() {
    return (
      <div className="categories">
        <Category></Category>
      </div>
    )
  }
}

function mapStateToProps(posts) {
  return posts
}

export default connect(mapStateToProps)(CategoryList);
