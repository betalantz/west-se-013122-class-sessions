import React from 'react'

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="search">
        <input
        value={searchTerm}
        type="text"
        placeholder="Search your Tracks"
        onChange={(e) => onSearchChange(e.target.value)}
        />
        <i className="">🔎</i>

  </div>
  )
}

export default Search