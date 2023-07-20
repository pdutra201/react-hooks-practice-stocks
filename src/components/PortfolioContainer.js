import React,{useState} from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, moveStock}) {
  const newList = portfolio.map(item =>  <Stock stock={item} key={item.id} moveStock={moveStock}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        newList
      }
    </div>
  );
}

export default PortfolioContainer;
