import React, { useContext } from 'react';
import { userContext } from '../../../App';
import 'boxicons'

const CurrentList = () => {
    const [,,transaction,] = useContext(userContext)
    return (
        <div className='flex flex-col py-6 gap-3'>
            <h1 className='py-4 font-bold text-xl'>Current History</h1>
            {transaction.map((item,index)=>{
                if(item.category==='Current')
                {
                    return <Transaction item={item} key={index}></Transaction>
                }
                return <></>
            })}    
        </div>
    );
};

function Transaction({item}){
    const [,,transaction,setTransaction]= useContext(userContext)
    const delete_item= (type,name,amount)=>{
        setTransaction(transaction.filter(product=>product.name!==name))    
    }
    if(item.type==="")return null;
    return (
        <div className='item flex justify-content-between bg-gray-50 py-2 rounded-r' style={{borderRight: `8px solid ${item.type==='income'?"green":item.type==='savings'?"blue":"red"}`}}>
            <button className='px-3' onClick={()=>delete_item(item.type,item.name,item.amount)}><box-icon color={item.type==='income'?"green":item.type==='savings'?"blue":"red"} size="15" name="trash"></box-icon></button>
            <span className='w-24'>{item.date??""}</span>
            <span className='w-24'>{item.name??""}</span>
            <span className='w-24'>{item.type??""}</span>
            <span className='w-24'>{item.amount??""}</span>
        </div>
    )
}
export default CurrentList;