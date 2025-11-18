import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './navbar';
import Home from './home';
import Create from './Create';
function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}
export default App
