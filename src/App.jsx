import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MainWeb from './components /pages/mainWeb'
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWeb />} />
    
      </Routes>
    </Router>
  )
}

export default App
