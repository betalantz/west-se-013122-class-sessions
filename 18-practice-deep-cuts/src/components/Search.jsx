import React from 'react'

function Search() {
  return (
    <div className="search">
        <input
        type="text"
        placeholder="Search your Tracks"
        onChange={() => console.log("Searching...")}
        />
        <i className="">🔎</i>

  </div>
  )
}

export default Search