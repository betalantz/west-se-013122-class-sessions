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
        // const newReorders = reorders.filter(reorderItem => reorderItem !== item)
        // setReorders(newReorders)
        removeItemFromArray(reorders, item, setReorders)
    }

    function removeItemFromArray(array, item, setterFn){
        const newArr = array.filter(arrItem => arrItem !== item)
        setterFn(newArr)
    }
    
    function handleDelete(e, item){
        e.stopPropagation()
        console.log('item: ', item);
        fetch(baseURL + `/inventory/${item.id}`, { method: 'DELETE' })
        
        // const newReorders = reorders.filter(reorderItem => reorderItem !== item)
        // setReorders(newReorders)
        // const newInventory = inventory.filter(inventoryItem => inventoryItem !== item)
        // setInventory(newInventory);
        removeItemFromArray(reorders, item, setReorders)
        removeItemFromArray(inventory, item, setInventory)
    }   

    return(
        <div className="container">
            <CurrentInventoryList 
              inventory={inventory} 
              onAddClick={addToReorders} 
              onDelete={handleDelete}
            />
            <ReorderInventoryList 
              reorders={reorders} 
              onRemoveClick={removeFromReorders} 
              onDelete={handleDelete}
            />
        </div>
    );
}

export default InventoryManager;