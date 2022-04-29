import React from "react";

function Filters({ onChangeType }) {
  function handleChange(event) {
    onChangeType(event.target.value);
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field" style={{width: '30vw', margin: '0 auto', padding: '20 20'}}>
        <select name="type" id="type" aria-label="type" onChange={handleChange}>
          <option value="">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      {/* <div className="field">
        <button onClick={onFindPetsClick} className="ui secondary button">
          Find pets
        </button>
      </div> */}
    </div>
  );
}

export default Filters;
