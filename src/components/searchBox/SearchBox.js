import React from "react"
import "./SearchBox.scss"
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ placeholder, value, onChange }) => {
  return (
    <div className={`search-box`}>
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}        
      />
      <FaSearch className="search-box-icon" />      
    </div>
  )
}

export default SearchBox