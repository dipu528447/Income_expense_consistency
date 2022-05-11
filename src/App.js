import { createContext, useState } from 'react';
import './App.css';

import Login from './component/Login/Login';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.Config';
import NewAccount from './component/NewUser/NewAccount';
import Dashboard from './component/Dashboard/Dashboard';
import {Route,Routes} from 'react-router-dom';
import PrivateRoute from './component/RequiredAuth/PrivateRoute';


export const userContext = createContext();
function App() {
  const [user, setUser] = useState([])
  const [transaction,setTransaction] = useState([{name:'',type:'',amount:0}])
  initializeApp(firebaseConfig);
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-700 text-white rounded">Salary and Expense Consistency System</h1>  
        <userContext.Provider value={[user,setUser,transaction,setTransaction]}>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/NewAccount" element={<NewAccount/>} />
                <Route path="/dashboard" element={
                <PrivateRoute><Dashboard></Dashboard></PrivateRoute>}/>
            </Routes>
          </userContext.Provider>
      </div>
    </div>
  );
}

export default App;
