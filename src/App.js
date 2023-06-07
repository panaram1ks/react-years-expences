/* import React from "react"; */
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react"

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2020, 2, 12),
    description: "Холодильник",
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1254.72
  },
  {
    id: 'c3',
    date: new Date(2021, 4, 1),
    description: "Джинсы",
    amount: 49.99
  }
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    /*  console.log(cost);
     console.log("App component"); */
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );

  /*   return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "Начнем изучение React!"),
      React.createElement(Costs, { costs: costs })
    ); */
}

export default App;
