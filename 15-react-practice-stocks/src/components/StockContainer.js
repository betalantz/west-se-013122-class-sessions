import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock }) {
  const stockCompArr = stocks.map(stock => (
    <Stock 
      key={stock.id}
      id={stock.id} 
      name={stock.name} 
      price={stock.price} 
      onClickStock={onAddStock} 
    />
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {stockCompArr}
    </div>
  );
}

export default StockContainer;
