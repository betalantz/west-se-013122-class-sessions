import React, { useState } from "react";
import { useSelector } from 'react-redux'
import Pet from "./Pet";


function PetBrowser() {

  const pets = useSelector(state => state.pets)

  const petCards = pets.map((pet) => (
    <Pet key={pet.id} pet={pet} />
  ));

  return (
    <div>
      <div className="ui cards">{petCards}</div>
    </div>
  );
}

export default PetBrowser;
