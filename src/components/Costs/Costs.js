import CostItem from './CostItem';
import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from '../CostsFilter/CostsFilter';
import { useState } from 'react';

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
            {filteredCosts.map(
                (cost) => <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount} />
            )}
        </Card>
    );
}

export default Costs;
/*
*/