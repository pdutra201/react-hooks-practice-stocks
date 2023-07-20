import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, setStocks}) {
  const [portfolio, setPortfolio] = useState([])
  const [typeFilter, setTypeFilter] = useState("")
  
  function moveStock(stock){
    
    if (portfolio.filter(item => item.name === stock.name).length === 1){
      setPortfolio(portfolio.filter(item => item.name !== stock.name))  
    }
    else{
      setPortfolio([...portfolio, stock])
    }
    }
    const filteredStocks = stocks.filter(stock => stock.type.includes(typeFilter))
    const filteredPortfolio = portfolio.filter(stock => stock.type.includes(typeFilter))
  return (

    <div>
      <SearchBar setTypeFilter={setTypeFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} moveStock={moveStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={filteredPortfolio} moveStock={moveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
