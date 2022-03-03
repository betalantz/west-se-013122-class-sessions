import React, { useState, useEffect } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const baseURL = "http://localhost:8001"

    const [inventory, setInventory] = useState([])
    const [reorders, setReorders] = useState([])

    useEffect(() => {
        fetch(baseURL + "/inventory")
          .then(res => res.json())
          .then(setInventory)
    }, [])

    function addToReorders(item){
        if(!reorders.includes(item)){
            setReorders([...reorders, item])
        }
        // const reorderItemIndex = reorders.findIndex(inventoryItem => inventoryItem.id === item.id)
        // if (reorderItemIndex < 0) {
        //     setReorders([...reorders, item])
        // }
    }

    function removeFromReorders(item){
        console.log('item: ', item);
        const newReorders = reorders.filter(reorderItem => reorderItem !== item)
        setReorders(newReorders)
    }

    

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} onAddClick={addToReorders}/>
            <ReorderInventoryList reorders={reorders} onRemoveClick={removeFromReorders}/>
        </div>
    );
}

export default InventoryManager;