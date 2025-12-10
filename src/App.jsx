import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './navbar';
import Home from './home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Edit from './Edit';
function App() {
  const title="welcome to Ozaru's Blog";
  const likes=50;
  const link=" https://github.com/sameershrestha00/Blog ";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App
