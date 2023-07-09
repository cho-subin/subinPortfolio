import React, { useState } from 'react';
import Header from '../components/header/Header';
import Left from '../components/project/Left';
import Right from '../components/project/Right';
import '../css/Project.css';
import projectData from '../data/Project.json';
import { Projects } from '../data/Project';

const Project: React.FC = () => {

  const project:Projects[] = projectData;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  console.log(project[currentIndex])
  console.log('currentIndex', currentIndex);

  const handleChangeBtn = (newIndex: number) =>{
    setCurrentIndex(newIndex);
  }

  return (
    <main className='project'>
      <Header current={'Project'} />
      <div className='project_div-container'>
        {/* 상태와 함수를 정의해서 하위 컴포넌트 전달 */}
        <Left currentIndex={currentIndex} onIndexChange={handleChangeBtn} />
        <Right
          title={project[currentIndex].title}
          github={project[currentIndex].github}
          img={project[currentIndex].img}
          skills={project[currentIndex].skills}
          personnel={project[currentIndex].personnel}
          term={project[currentIndex].term}
          text={project[currentIndex].text}
        />
      </div>
    </main>
  )
}

export default Project;
