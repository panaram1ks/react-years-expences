import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from '../CostsFilter/CostsFilter';
import { useState } from 'react';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {

    const [inputYear, setInputYear] = useState('2021')

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === inputYear
    })

    const selectYearHandler = (year) => {
        setInputYear(year)
        props.onChangeYear(year)
    }

    return (
        <Card className='costs'>
            <CostsFilter onChangeYear={selectYearHandler} startYear={inputYear} />
            <CostsDiagram costs={filteredCosts} />
            <CostList costs={filteredCosts} />
        </Card>
    );
}

export default Costs;