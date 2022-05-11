import React, { useContext } from 'react';
import { userContext } from '../../App';
import {useForm} from 'react-hook-form';
import List from '../List/List';

const Form = () => {
    const {register, handleSubmit,resetField}=useForm();
    const [,, transaction, setTransaction] = useContext(userContext)
    function reload(){
        document.getElementById("name").value="";
        document.getElementById("type").value="income"
        document.getElementById("amount").value="";
    }
    function onSubmit(data){
        const trans= [...transaction]
        console.log(trans);
        trans.push(data)
        setTransaction(trans)
        reload()
    }
    return (
        <div className='form max-w-sm mx-auto w-96'>
            <h1 className='font-bold pb-4 text-xl'>
                Transaction
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
                        <input type="number" {...register('amount')} placeholder="Amount" className='form-input' id="amount"/>
                    </div>
                    <div className="submit-btn">
                            <button className="border py-2 text-white bg-indigo-500 w-full">Make Transaction</button>
                    </div>
                </div>
            </form>
            <List/>
        </div>
    );
};

export default Form;