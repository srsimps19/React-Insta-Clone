import React from 'react';
import './SearchBar.scss';

const SearchBar = props => {
  return (
    <div className="searchBar">
      <div className="left-side">
        <i className="fab fa-instagram fa-3x"></i>
        <p>|</p>
        <h2>Instagram</h2>
      </div>
      <div className="center">
        <input type="text" placeholder="🔍 Search" onChange={props.searchPosts} />
      </div>
      <div className="right-side">
          <i className="far fa-compass fa-3x" />
          <i className="far fa-heart fa-3x" />
          <i className="far fa-user-circle fa-3x" />
      </div>
    </div>
  );
};

export default SearchBar;