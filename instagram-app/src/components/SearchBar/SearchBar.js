import React from 'react';
import './SearchBar.scss';

function SearchBar() {
    return (
        <div className="searchBar">
            <div className="left-side">
                <i className="fab fa-instagram fa-3x"></i>
                <p>|</p>
                <h2>Instagram</h2>
            </div>
            <div className="center">
                <input 
                    type="text"
                    placeholder="🔍 Search" 
                />
            </div>
            <div className="right-side">
                <i className="far fa-compass fa-3x"></i>
                <i className="far fa-heart fa-3x"></i>
                <i className="far fa-user fa-3x"></i>
            </div>
        </div>
    );
};

export default SearchBar;