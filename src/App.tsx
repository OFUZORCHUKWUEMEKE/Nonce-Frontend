import { useState } from 'react'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Savings from './pages/Savings';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/transaction' element={<Transactions />} />
          <Route path='/saving' element={<Savings/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
