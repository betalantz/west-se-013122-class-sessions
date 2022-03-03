import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({reorders, onRemoveClick, onDelete}) {
    const reorderCards = reorders.map(itemObj => (
        <InventoryItemCard 
          key={itemObj.id} 
          item={itemObj} 
          onCardClick={onRemoveClick}
          onDelete={onDelete}
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