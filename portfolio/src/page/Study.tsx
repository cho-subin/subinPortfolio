import React from 'react';
import StudyBox from '../components/study/StudyBox';
import '../css/Study.css';
import superCoding from '../img/super.jpeg';
import blog from '../img/blog.jpeg';
import JS from '../img/XL.jpeg';
import Header from '../components/header/Header';

const Study: React.FC = () => {
  
  return (
    <main className='study'>
      <Header current={'Study'} />
      <div className='study_div-container'>
        <div className='study_div-top'>
          <div className='study_div-title'>
            <span>Study</span>
          </div>
        </div>
        <div className='study_div-bottom'>
          <StudyBox
            img={superCoding}
            title={'슈퍼코딩 스터디'}
            term={'2023.06~'}
            text={<span style={{ whiteSpace: 'pre-line' }}>Javascript 공부와<br/>팀프로젝트 진행 예정입니다.</span>}
          />
          <StudyBox
            img={JS}
            title={'JS deep dive 스터디'}
            term={'2023.06~'}
            text={<span style={{ whiteSpace: 'pre-line' }}>직접 동아리를 만들어 여러 사람들과<br />주도적으로 Javascript 스터디 진행중입니다.</span>}
          />
          <StudyBox
            img={blog}
            title={'개발 블로그'}
            term={'2022.06~'}
            text={<span style={{ whiteSpace: 'pre-line' }}>기본적인 cs 지식과 프론트엔드 프로젝트와<br />연습을 통한 지식들을 기록하고 있습니다.</span>}
          />
        </div>
      </div>
    </main>
  )
}

export default Study;
