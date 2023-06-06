import CostDate from './CostDate';
import './CostItem.css';
import Card from '../UI/Card';

const CostItem = (props) => {

    const changeDescriptionHandler = () => {console.log("Click!");}

    return (
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
            </div>
            <div className='cost-item__price'>${props.amount}</div>
            <button onClick={changeDescriptionHandler}>Изменить Описание</button>
        </Card>
    );
}

export default CostItem;