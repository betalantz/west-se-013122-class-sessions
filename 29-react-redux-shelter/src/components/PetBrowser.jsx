import React, { useState } from "react";
// import { useSelector } from 'react-redux'
import { useFetchPetsQuery } from '../app/services/petsApi'  
import Pet from "./Pet";
import Filters from './Filters'


function PetBrowser() {

  const [type, setType] = useState("")

  // const pets = useSelector(state => state.pets)

  // the query hook returns the data slice from the store which is derived from the query
  // can pass 'type' as a query parameter
  const {data=[], isFetching} = useFetchPetsQuery(type)

  const petCards = data.map((pet) => (
    <Pet key={pet.id} pet={pet} />
  ));

  return (
    <div>
      <Filters onChangeType={setType}/>
      {isFetching ? <h1>Loading...</h1> : <div className="ui cards">{petCards}</div>}
    </div>
  );
}

export default PetBrowser;
