import React from "react";

const SearchBar = ({ onSearchChange, query }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="first name"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={() => onSearchChange("")}>Clean</button>
    </div>
  );
};

export default SearchBar;