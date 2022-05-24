import React, { useEffect, useState } from 'react';
import GoldPriceService from '../GoldPriceService/GoldPriceService';
import NavBar from './../NavBar/NavBar';

const GoldPrice = () => {
    const [trans,setTrans] = useState([])
    const [goldRate, setGoldRate] = useState(0);
    useEffect(()=>{
        getExpense();
        
    },[])
    const getExpense= async()=>{
        const data = await GoldPriceService.getAllExpense();
        setTrans(data.docs.map((doc)=>({...doc.data(),id:doc.id})))   
    }
    const generate=()=>{
        var joiningYear=document.getElementById('joining_year').value
        var startingSalary=document.getElementById('salary').value;
        var percentage=document.getElementById('salary_percentage').value;
        startingSalary=parseInt(startingSalary);
        percentage=parseInt(percentage);
        console.log(startingSalary,percentage);
        for(var i=joiningYear;i<=2016;i++){
            startingSalary=startingSalary+((startingSalary*percentage)/100);
        }
        startingSalary=startingSalary.toFixed(2);
        startingSalary=parseInt(startingSalary);
        console.log(trans);
        var k=trans.filter(item=>item.year=='2016')
        k=parseInt(k[0].price);
        setGoldRate(startingSalary/k);

    }
    return (
        <div>
            <NavBar/>
            <br/>
            <div className='form max-w-sm mx-auto w-96'>
                <div className='grid gap-4'>
                    <div className='input-group'>
                        <input type="text" placeholder="Starting Salary Amount" className='form-input' id="salary"/>
                    </div>
                    <div className='input-group'>
                        <input type="text" placeholder="Salary Increment Percentage" className='form-input' id="salary_percentage"/>
                    </div>
                    <div className='input-group'>
                        <input type="text" placeholder="Joining year" className='form-input' id="joining_year"/>
                    </div>
                    <div className="submit-btn">
                        <button className="border py-2 text-white bg-indigo-500 w-full" onClick={generate}>Generate</button>
                    </div>
                    <div className='item flex justify-content-between bg-gray-50 py-2 rounded-r' >
                        <span className='w-full'>Affordability to purchase gold: <span style={{"color": "red","fontSize": "22px"}}>{goldRate.toFixed(2)}</span> gram</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoldPrice;