import React from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    return(
        <div className="container">
            <CurrentInventoryList />
            <ReorderInventoryList />
        </div>
    );
}

export default InventoryManager;