import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from './NewListingForm'

function App() {

  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("id")

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

  function handleAddListing(newListing) {
    const updatedListingsArray =  [...listings, newListing];
    setListings(updatedListingsArray);
  }

  const filteredListings = listings
      .filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((listingA, listingB) => {
        if (sortBy === "id") {
          return listingA.id = listingB.id
        } else {
          return listingA.location.localeCompare(listingB.location)
        }
      })
  
  return (
    <div className="app">
      <Header onSearch={setSearchTerm} onSort={setSortBy} />
      <NewListingForm onAddListing={handleAddListing} />
      <ListingsContainer listings={filteredListings} onRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
