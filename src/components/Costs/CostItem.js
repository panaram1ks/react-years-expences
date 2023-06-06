import CostDate from './CostDate';
import './CostItem.css';
import Card from '../UI/Card';
import React, { useState } from 'react';

const CostItem = (props) => {

    const[description, setDescription] = useState(props.description);    

    const changeDescriptionHandler = () => {
      /*   description = 'New text' */
        setDescription('New text')
        console.log(description);
    }

    return (
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
            </div>
            <div className='cost-item__price'>${props.amount}</div>
            <button onClick={changeDescriptionHandler}>Изменить Описание</button>
        </Card>
    );
}

export default CostItem;