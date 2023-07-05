import React from 'react';
import Left from '../components/project/Left';
import Right from '../components/project/Right';
import '../css/Project.css';

const Project: React.FC = () => {
  return (
    <main className='project'>
      <div className='project_div-container'>
        <Left/>
        <Right/>
      </div>
    </main>
  )
}

export default Project;
