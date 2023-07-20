import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, moveStock}) {
  const stockList = stocks.map(stock => <Stock stock={stock} key={stock.id} moveStock={moveStock}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
