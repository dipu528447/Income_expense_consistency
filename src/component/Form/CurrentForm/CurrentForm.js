import React, { useContext } from 'react';
import { userContext } from '../../../App';
import {useForm} from 'react-hook-form';
import CurrentList from './../../List/CurrentList/CurrentList';
import { type } from '@testing-library/user-event/dist/type';

const CurrentForm = (props) => {
    const {register, handleSubmit,resetField}=useForm();
    const [,, transaction, setTransaction] = useContext(userContext)
    
    function reload(){
        document.getElementById("name").value="";
        document.getElementById("date").value="";
        document.getElementById("type").value="income"
        document.getElementById("amount").value="";
    }
    function onSubmit(data){
        data.category = 'Current'
        console.log(transaction.length);
        data.id= 'C-'+transaction.length;
        const trans= [...transaction]
        trans.push(data)
        setTransaction(trans)
        reload()
    }
    return (
        <div className='form max-w-sm mx-auto w-96'>
            <h1 className='font-bold pb-4 text-xl'>
                Current Transaction
            </h1>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-4'>
                    <div className='input-group'>
                        <input type="text" {...register('name')} placeholder="salary, House Rent" className='form-input' id="name"/>
                    </div>
                    <select className='form-input' {...register('type')} id="type">
                        <option value="income" defaultValue>Income</option>
                        <option value="expense" defaultValue>Expense</option>
                        <option value="savings" defaultValue>Savings</option>
                    </select>
                    <div className='input-group'>
                        <input type="text" {...register('date')} placeholder="Month Name 2022 or Fiscal Year (e.g: Jan or 2022)" className='form-input' id="date"/>
                    </div>
                    <div className='input-group'>
                        <input type="number" {...register('amount')} placeholder="Amount" className='form-input' id="amount"/>
                    </div>
                    <div className="submit-btn">
                        <button className="border py-2 text-white bg-indigo-500 w-full">Make Transaction</button>
                    </div>
                </div>
            </form>
            <CurrentList/>
        </div>
    );
};

export default CurrentForm;