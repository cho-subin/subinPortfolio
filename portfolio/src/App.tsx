import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Education from './page/Education';
import Main from './page/Main';
import Project from './page/Project';
import Study from './page/Study';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/study' element={<Study/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
