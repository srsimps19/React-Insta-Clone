import React from 'react';

function SearchBar() {
    return (
        <div>
            <i className="fab fa-instagram"></i>
            <p>|</p>
            <h2>Instagram</h2>
            <input 
                type="text"
                placeholder="Search" 
            />
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
        </div>
    );
};

export default SearchBar;