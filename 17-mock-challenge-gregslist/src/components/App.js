import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(setListings)
  }, [])

  function handleRemoveListing(listing){
    // we could also do the DELETE fetch here, but we'll do it on the ListingCard
  }
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings}/>
    </div>
  );
}

export default App;
