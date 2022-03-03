import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({reorders, onRemoveClick}) {
    const reorderCards = reorders.map(itemObj => (
        <InventoryItemCard 
          key={itemObj.id} 
          item={itemObj} 
          onCardClick={onRemoveClick}
        />
    ))
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderCards}
            </div>
        </div>
    );
}

export default ReorderInventoryList;