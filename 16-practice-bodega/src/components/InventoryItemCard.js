import React from 'react'

function InventoryItemCard({item}) {
    return(
        <div className="card" onClick={() => console.log("Clicking the item...")}>
            <img src=''></img>
            <h3>ITEM NAME</h3>
            <h4>$ITEM PRICE</h4>
            <button onClick={() => console.log("Deleting the item...")}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;