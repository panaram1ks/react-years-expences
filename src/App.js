/* import React from "react"; */
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99
    },
    {
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.72
    },
    {
      date: new Date(2021, 4, 1),
      description: "Джинсы",
      amount: 49.99
    }
  ];

  return (
    <div>
      <NewCost />
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
