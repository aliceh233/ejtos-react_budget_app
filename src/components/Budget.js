import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const {  budget, currency, dispatch, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (e) => {
        if (budget < totalExpenses) {
            alert("Budget should not be lower than the total expense " + currency + totalExpenses);
            dispatch({
                type:'SET_BUDGET',
                payload: totalExpenses,
            })
        }
        if (budget > 20000) {
            alert("Budget should not exceed 20000");
            dispatch({
                type:'SET_BUDGET',
                payload: totalExpenses,
            })
        }
        dispatch({
            type:'SET_BUDGET',
            payload: e,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input 
                max="20000"
                type="number"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}></input></span>
        </div>
    );
};

export default Budget;