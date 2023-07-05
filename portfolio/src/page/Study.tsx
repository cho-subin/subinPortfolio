import React from 'react';
import '../css/Study.css';

const Study = () => {
  return (
    <main className='study'>
      <div className='study_div-container'>
        <div className='study_div-top'>
          <div className='study_div-title'>
            <span>Study</span>
          </div>
        </div>
        <div className='study_div-bottom'>
          <div className='study_div-box'>
            <div className='study_div-img'>

            </div>
            <div className='study_div-boxTitle'>
              <span>슈퍼코딩 스터디</span>
              <span>2023.06~</span>
              <span>Javascript 공부와<br/>팀프로젝트 진행 예정입니다.</span>
            </div>
          </div>
          <div className='study_div-box'>
            <div className='study_div-img'>

            </div>
            <div className='study_div-boxTitle'>
              <span>JS deep dive 스터디</span>
              <span>2023.06~</span>
              <span>Javascript 공부와<br/>팀프로젝트 진행 예정입니다.</span>
            </div>
          </div>
          <div className='study_div-box'>
            <div className='study_div-img'>

            </div>
            <div className='study_div-boxTitle'>
              <span>개발 블로그</span>
              <span>2023.06~</span>
              <span>Javascript 공부와<br/>팀프로젝트 진행 예정입니다.</span>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  )
}

export default Study;
