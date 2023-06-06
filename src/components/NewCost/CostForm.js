import './CostForm.css'
import Reactimport, { useState } from 'react';

const CostForm = () => {

    /*   const [name, setName] = useState('');
      const [amount, setAmount] = useState('');
      const [date, setDate] = useState(''); */

    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: '',
    })

    const nameChangeHandler = (event) => {
        console.log(event.target.value);
        /*  setName(event.target.value) */
        setUserInput({
            ...userInput,
            name: event.target.value,
        })
    }

    const ammountChangeHandler = (event) => {
        console.log(event.target.value);
        /* setAmount(event.target.value) */
        setUserInput({
            ...userInput,
            amount: event.target.value,
        })
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        /* setDate(event.target.value) */
        setUserInput({
            ...userInput,
            date: event.target.value,
        })
    }

    return <form>
        <div className="new-cost__controls">
            <div className="new-cost__controls">
                <label>Название</label>
                <input type="text" onChange={nameChangeHandler} />
            </div>
            <div className="new-cost__controls">
                <label>Сумма</label>
                <input type="number" min='0.01' step='0.01' onChange={ammountChangeHandler} />
            </div>
            <div className="new-cost__controls">
                <label>Дата</label>
                <input type="date" min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler} />
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Добавить расход</button>
            </div>
        </div>
    </form>

}

export default CostForm