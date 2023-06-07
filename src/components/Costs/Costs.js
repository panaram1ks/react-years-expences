import CostItem from './CostItem';
import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from '../CostsFilter/CostsFilter';
import { useState } from 'react';

const Costs = (props) => {

    const [inputYear, setInputYear] = useState('2021')

    const costs = props.costs;

    const selectYearHandler = (year) => {
        setInputYear(year)
    }

    return (
        <Card className='costs'>
            <CostsFilter onChangeYear={selectYearHandler} startYear={inputYear} />
            <CostItem
                date={costs[0].date}
                description={costs[0].description}
                amount={costs[0].amount} />
            <CostItem
                date={costs[1].date}
                description={costs[1].description}
                amount={costs[1].amount} />
            <CostItem
                date={costs[2].date}
                description={costs[2].description}
                amount={costs[2].amount} />
        </Card>
    );
}

export default Costs;
/*
*/