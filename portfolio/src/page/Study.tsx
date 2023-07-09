import React from 'react';
import StudyBox from '../components/study/StudyBox';
import '../css/Study.css';
import Header from '../components/header/Header';
import Title from '../components/public/Title';
import { studies } from '../data/Study';
import studyData from '../data/Study.json';

const Study: React.FC = () => {

  const study : studies[] = studyData;

  return (
    <main className='study'>
      <Header current={'Study'} />
      <div className='study_div-container'>
        <div className='study_div-top'>
          <Title title={'Study'}/>
        </div>
        <div className='study_div-bottom'>
          {study.map((item, idx)=>{
            return(
              <StudyBox key={idx}
                img={item.img}
                title={item.title}
                term={item.term}
                text1={item.text[0]}
                text2={item.text[1]}
              />
            )
          })}
          
        </div>
      </div>
    </main>
  )
}

export default Study;
