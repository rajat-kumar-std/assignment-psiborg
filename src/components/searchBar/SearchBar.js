import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsCamera } from 'react-icons/bs';
import './searchBar.css';
const SearchBar = () => {
  return (
    <div className="search-container">
      <BiSearch />
      <input type="text" placeholder="Search" />
      <span>|</span>
      <BsCamera />
    </div>
  );
};

export default SearchBar;
