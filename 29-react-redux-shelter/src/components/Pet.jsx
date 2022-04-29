import React from "react";
import { useDispatch } from 'react-redux';
import { adoptPet } from '../features/pets/petsSlice'

function Pet({ pet }) {

  const dispatch = useDispatch()

  const handleAdoptPet = () => {
    dispatch(adoptPet(pet.id))
  }
  
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === "female" ? "♀" : "♂"}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptPet}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
