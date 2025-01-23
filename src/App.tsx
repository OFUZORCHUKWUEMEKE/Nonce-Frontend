import { useState } from 'react'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Savings from './pages/Savings';
import { createAppKit, useAppKitAccount } from '@reown/appkit/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { metadata, projectId, solanaWeb3JsAdapter } from './config';

// Create modal
createAppKit({
  projectId,
  metadata,
  networks: [solana, solanaTestnet, solanaDevnet],
  adapters: [solanaWeb3JsAdapter],
})

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/transaction' element={<Transactions />} />
          <Route path='/saving' element={<Savings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
