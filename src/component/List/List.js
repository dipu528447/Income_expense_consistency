import React, { useContext } from 'react';
import { userContext } from '../../App';
import 'boxicons';

const List = () => {
    const [,,transaction,] = useContext(userContext)
    return (
        <div className='flex flex-col py-6 gap-3'>
            <h1 className='py-4 font-bold text-xl'>History</h1>
            {transaction.map((item,index)=><Transaction category={item} key={index}></Transaction>)}    
        </div>
    );
};

function Transaction({category}){
    const [,,transaction,setTransaction]= useContext(userContext)
    const delete_item= (type,name,amount)=>{
        setTransaction(transaction.filter(item=>item.name!==name))    
    }
    if(category.type==="")return null;
    return (
        <div className='item flex justify-content-between bg-gray-50 py-2 rounded-r' style={{borderRight: `8px solid ${category.type==='income'?"green":category.type==='savings'?"blue":"red"}`}}>
            <button className='px-3' onClick={()=>delete_item(category.type,category.name,category.amount)}><box-icon color={category.type==='income'?"green":category.type==='savings'?"blue":"red"} size="15" name="trash"></box-icon></button>
            <span className='w-32'>{category.name??""}</span>
            <span className='w-24'>{category.type??""}</span>
            <span className='w-24'>{category.amount??""}</span>
        </div>
    )
}
export default List;