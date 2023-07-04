import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Education from './page/Education';
import Main from './page/Main';
import Project from './page/Project';
import Study from './page/Study';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/' element={<Project/>}/>
          <Route path='/' element={<Education/>}/>
          <Route path='/' element={<Study/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
