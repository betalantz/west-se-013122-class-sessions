import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onRemoveStock }) {
  const stockCompArr = stocks.map(stock => (
    <Stock 
      key={stock.id}
      id={stock.id} 
      name={stock.name} 
      price={stock.price} 
      onClickStock={onRemoveStock} 
    />
  ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {stockCompArr}
    </div>
  );
}

export default PortfolioContainer;
