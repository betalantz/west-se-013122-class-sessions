import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(setStocks)
  }, [])
  
  function addToPortfolio(id){
    const stockToAdd = stocks.find(stock => stock.id === id)
    if (!portfolio.includes(stockToAdd)) {
      setPortfolio([...portfolio, stockToAdd])
    }
  }

  function removeFromPortfolio(id){
    const filteredPortfolio = portfolio.filter(stock => stock.id !== id)
    setPortfolio(filteredPortfolio)
  }

  function selectSort(sortString){
    setSortBy(sortString)
  }

  const sortedStocks = [...stocks].sort((stockA, stockB) => {
    if (sortBy === "Alphabetically") {
      return stockA.name.localeCompare(stockB.name)
    } else {
      return stockA.price - stockB.price
    }
  })

  const filteredStocks = sortedStocks.filter(stock => stock.type === filterBy)

  
  return (
    <div>
      <SearchBar 
        onChangeSort={selectSort} 
        sortBy={sortBy}
        filterBy={filterBy}
        onChangeFilter={setFilterBy} 
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onAddStock={addToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} onRemoveStock={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
