import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

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

  const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <div className="app">
      <Header onSearch={setSearchTerm} />
      <ListingsContainer listings={filteredListings} onRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
