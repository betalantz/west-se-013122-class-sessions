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

  function handleRemoveListing(listingId){
    console.log('listing: ', listingId)
    // we could also do the DELETE fetch here, but we'll do it on the ListingCard
    const newListings = listings.filter(listing => listing.id !== listingId)
    setListings(newListings)
  }
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
