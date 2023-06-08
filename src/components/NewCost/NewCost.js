import './NewCost.css'
import CostForm from './CostForm'
import { useState } from 'react'

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false)

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        //console.log(costData);
        props.onAddCost(costData)
        setIsFormVisible(false)
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const hideFormHandler = () => {
        setIsFormVisible(false)
    }

    return (
        <div className='new-cost'>
            {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
            {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} hideForm={hideFormHandler} />}
        </div>
    )

}

export default NewCost