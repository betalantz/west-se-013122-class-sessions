import React, { useState } from "react";
// import { useSelector } from 'react-redux'
import { useFetchPetsQuery } from '../app/services/petsApi'  
import Pet from "./Pet";


function PetBrowser() {

  // const pets = useSelector(state => state.pets)

  const {data=[], isFetching} = useFetchPetsQuery()

  const petCards = data.map((pet) => (
    <Pet key={pet.id} pet={pet} />
  ));

  return (
    <div>
      {isFetching ? <h1>Loading...</h1> : <div className="ui cards">{petCards}</div>}
    </div>
  );
}

export default PetBrowser;
