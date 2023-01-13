import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'

const Currency = () => {
    const { currency, dispatch} = useContext(AppContext);

    const setCurrency = (e) => {
        dispatch({
            type:'CHG_CURRENCY',
            payload: e,
        })
    }
    return (
        <div>
            <select defaultValue={currency} onChange={(event) => setCurrency(event.target.value)} class="form-select form-select-lg" aria-label=".form-select-sm example">
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;