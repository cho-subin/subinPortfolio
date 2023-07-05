import React from 'react';
import '../css/Project.css';

const Project = () => {
  return (
    <main className='project'>
      <div className='project_div-container'>
        <div className='project_div-left'>
          <div className='project_div-left-title'>
            <span>Project</span>
          </div>
          <div className='project_div-left-subTitle'>
            <span>Modira(전국)</span><br />
            <span>Velog Clone Coding</span><br />
            <span>Modira(대구)</span>
          </div>
        </div>
        <div className='project_div-right'>
          <div className='project_div-right-box'>
            <div className='project_div-right-boxTitle'>
              <span>Modira 팀프로젝트</span>
            </div>
            <div className='project_div-right-skill'>
              <div className='project_div-right-skillBtn'>
                <span>react</span>
              </div>
              <div className='project_div-right-skillBtn'>
                <span>react</span>
              </div>
              <div className='project_div-right-skillBtn'>
                <span>react</span>
              </div>
              <div className='project_div-right-skillBtn'>
                <span>react</span>
              </div>
              <div className='project_div-right-skillBtn'>
                <span>react</span>
              </div>
              <div className='project_div-right-skillBtn'>
                <span>react</span>
              </div>
            </div>
            <div className='project_div-right-term'>
              <span>총 6주</span>
              <span>2022.08~09</span>
            </div>
            <div className='project_div-right-personnel'>
              <span>참여인원</span>
              <span>6명</span>
            </div>
            <div className='project_div-right-detail'>
              <span>- 만든 서비스를 사용해본 유저들의 피드백을 받고 기능 보완</span><br />
              <span>- 무한 스크롤링을 이용해 데이터최적화 성능 개선</span><br />
              <span>- 무한 스크롤링을 이용해 데이터최적화 성능 개선</span><br />
              <span>- 무한 스크롤링을 이용해 데이터최적화 성능 개선</span><br />
              <span>- 무한 스크롤링을 이용해 데이터최적화 성능 개선</span><br />
              <span>- 무한 스크롤링을 이용해 데이터최적화 성능 개선</span>
            </div>
          </div>
          <div className='project_div-right-title'>
            <span>Modira 팀프로젝트</span>
            <span>https://github.com/whtnqls124578/cssPractice</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Project;
