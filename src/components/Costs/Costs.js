import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from '../CostsFilter/CostsFilter';
import { useState } from 'react';
import CostList from './CostList';

const Costs = (props) => {

    const [inputYear, setInputYear] = useState('2021')

    /* const costs = props.costs; */

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === inputYear
    })

    const selectYearHandler = (year) => {
        setInputYear(year)
    }



    return (
        <Card className='costs'>
            <CostsFilter onChangeYear={selectYearHandler} startYear={inputYear} />
            <CostList costs={filteredCosts} />
        </Card>
    );
}

export default Costs;
/*
*/