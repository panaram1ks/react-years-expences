import './CostForm.css'
import { useState } from 'react';

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    /*     const [userInput, setUserInput] = useState({
            name: '',
            amount: '',
            date: '',
        }) */

    const nameChangeHandler = (event) => {
        console.log(event.target.value);
        setInputName(event.target.value)

        /*       setUserInput({
            ...userInput, // GET previousState Component's condition
            name: event.target.value,
        }) */

        // The most safe way update Component's previousState
        /*       setUserInput((previousState) => {
                  return {
                      ...previousState,
                      name: event.target.value
                  }
              }) */
    }

    const ammountChangeHandler = (event) => {
        console.log(event.target.value);
        setInputAmount(event.target.value)
        /*     setUserInput({
                ...userInput,
                amount: event.target.value,
            }) */
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setInputDate(event.target.value)
        /*    setUserInput({
               ...userInput,
               date: event.target.value,
           }) */
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }

        // console.log(costData);
        props.onSaveCostData(costData)
        setInputName('')
        setInputAmount('')
        setInputDate('')
    }

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__controls">
                <label>Название</label>
                <input type="text" onChange={nameChangeHandler} value={inputName} />
            </div>
            <div className="new-cost__controls">
                <label>Сумма</label>
                <input type="number" min='0.01' step='0.01' onChange={ammountChangeHandler} value={inputAmount} />
            </div>
            <div className="new-cost__controls">
                <label>Дата</label>
                <input type="date" min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler} value={inputDate} />
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Добавить расход</button>
            </div>
        </div>
    </form>

}

export default CostForm