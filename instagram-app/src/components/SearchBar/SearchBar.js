import React from 'react';
import './SearchBar.scss';

function SearchBar() {
    return (
        <div className="searchBar">
            <div className="left-side">
                <i className="fab fa-instagram"></i>
                <p>|</p>
                <h2>Instagram</h2>
            </div>
            <div className="center">
                <input 
                    type="text"
                    placeholder="Search" 
                />
            </div>
            <div className="right-side">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
};

export default SearchBar;