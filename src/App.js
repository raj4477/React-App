// import logo from './logo.svg';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.css';
import Home from './pages/home';
import Blog from './pages/Blog/index'
import { AddBlog } from './pages/AddedBlog';
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/createblog' element={<AddBlog/>} />

        {/* <Navigate to='/' /> */}
      </Routes>
    </div>
  );
}

export default App;
