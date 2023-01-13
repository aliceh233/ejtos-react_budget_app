import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';
import Currency from './components/ChangeCurrency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                    <h1> Company's Budget Allocation</h1>
                    <div className="row">
                        <div className="col-sm-3"><Budget></Budget></div>
                        <div className="col-sm-3"><Remaining></Remaining></div>
                        <div className="col-sm-3"><ExpenseTotal></ExpenseTotal></div>
                        <div className="col-sm-3"><Currency></Currency></div>
                    </div>
                    <h2>Allocation</h2>
                        <ExpenseList></ExpenseList>
                    <h2>Change Allocation</h2>
                        <AllocationForm></AllocationForm>
            </div>
        </AppProvider>
    );
};
export default App;