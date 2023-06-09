
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
 /*  const [tempCosts, setTempCosts] = useState(costs) */

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  let tempCosts = costs;

  const changeListCosts = (year) => {
    console.log(year);
    console.log('old value' + costs);
    tempCosts = costs.filter(el => {
      return el.date.getFullYear() == year
    })
    console.log('new value' + tempCosts);
    /* setTempCosts(temp) */
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={tempCosts} onChangeYear={changeListCosts} />
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
