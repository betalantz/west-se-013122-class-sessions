import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList({ inventory, onAddClick, onDelete }) {
    const itemCards = inventory.map((itemObj) => (
        <InventoryItemCard 
          key={itemObj.id} 
          item={itemObj} 
          onCardClick={onAddClick}
          onDelete={onDelete}
        />
        ))
    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {itemCards}
            </div>
        </div>
    );
}

export default CurrentInventoryList;