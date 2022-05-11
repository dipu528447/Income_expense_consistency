import React from 'react';
import Graph from './../Graph/Graph';
import Form from './../Form/Form';
const Dashboard = () => {    
    return (
        <div className='grid md:grid-cols-2 gap-4'>
            <Graph/> 
            <Form/>
        </div>
    );
};

export default Dashboard;