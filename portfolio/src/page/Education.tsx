import React from 'react';
import EducationBox from '../components/education/EducationBox';
import Header from '../components/header/Header';
import Title from '../components/public/Title';
import '../css/Education.css';
import { Educations } from '../data/Education';
import educationData from '../data/Education.json';

const Education: React.FC = () => {

  const education: Educations[] = educationData;

  return (
    <main className='education'>
      <Header current={'Education'} />
      <div className='education_div-container'>
        <div className='education_div-top'>
          <Title title={'Education'}/>
        </div>
        <div className='education_div-bottom'>
          {education.map((item, idx)=>{
            return(
              <React.Fragment key={idx}>
                <EducationBox title1={item.title[0]} title2={item.title[1]} term={item.term} />
              </React.Fragment>
            )
          })}
        </div>
      </div>
      
    </main>
  )
}

export default Education;
