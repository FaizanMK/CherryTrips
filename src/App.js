import './App.css';

import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TourConfirmation from './Pages/Destination/TourConfirmation';
import Destination from './Pages/Destination/Destination';
import Tours from './Pages/Tours/Tours';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import { useState } from 'react';
import Login from './Pages/Registeration/Login';

function App() {
const [startDate, setStartDate]= useState('')
const [endDate, setEndDate]= useState('')


  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />} />
    <Route path='/confirm-tour' element={<TourConfirmation startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>} />
    <Route path='/Destination' element={<Destination/>} />
    <Route path='/Tours' element={<Tours/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Cart' element={<Cart/>} />
    <Route path='/Login' element={<Login/>} />


    
    </Routes>
  </BrowserRouter>
      
    
    </div>
  );
}

export default App;
