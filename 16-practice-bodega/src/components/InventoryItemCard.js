import React from 'react'

function InventoryItemCard({item, onCardClick}) {
    const { image, name, price} = item
    return(
        <div className="card" onClick={() => onCardClick(item)}>
            <img src={image}></img>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button onClick={() => console.log("Deleting the item...")}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;