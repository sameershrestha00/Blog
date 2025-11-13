import { useState } from 'react'
import Navbar from './navbar';
import Home from './home';
function App() {
  const title = 'Welcome to the new blog';
  const likes = 100;
  const person = {name:"Sameer", age:22};
  const link = "www.instagram.com/sameershrestha__";
  return (
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  )
}
export default App
