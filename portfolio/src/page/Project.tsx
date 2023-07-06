import React from 'react';
import Header from '../components/header/Header';
import Left from '../components/project/Left';
import Right from '../components/project/Right';
import '../css/Project.css';

const Project: React.FC = () => {
  return (
    <main className='project'>
      <Header current = {'Project'}/>
      <div className='project_div-container'>
        <Left/>
        <Right/>
      </div>
    </main>
  )
}

export default Project;
