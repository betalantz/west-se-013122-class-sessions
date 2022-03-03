import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  const listingCards = listings.map(listing => (
    <ListingCard 
      key={listing.id}
      listing={listing}
    />
  ))
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
