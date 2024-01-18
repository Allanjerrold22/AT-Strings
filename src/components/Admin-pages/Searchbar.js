import React, { useState } from 'react';
import './admin.css'; // You can create a CSS file to style the search bar

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div
        className={`search-icon-box ${inputValue ? 'active' : ''}`}
      >
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
