import React from 'react'

function Filter({showGreased, onCheckGreased, sortBy,onChangeSortBy}) {
  return (
    <div className="ui menu">
        <div className="ui item">
            <label>Sort by</label>
        </div>
        <div className="ui item">
            <select 
              value={sortBy}
              onChange={(e) => onChangeSortBy(e.target.value)}
              className="ui selection dropdown"
            >
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
        <div className="ui item">
            <label>Greased Pigs Only?</label>
        </div>
        <div className="ui item">
            <input 
              checked={showGreased}
              onChange={(e) => onCheckGreased(e.target.checked)}
              className="ui toggle checkbox"
              type="checkbox" />
        </div>
    </div>
  )
}

export default Filter