import React from 'react';
import Button from '../components/main/Button';
import Title from '../components/main/Title';
import github from '../img/githubIcon.png';
import blog from '../img/blog.jpeg';
import '../css/Main.css';
import Header from '../components/header/Header';

const Main: React.FC = () => {
  return (
    <main className='Main'>
      <Header current={'Portfolio'} />
      <div className="linear_gradient">
        <div className='Main_div-introContainer'>
          <Title />
          <div className='Main_div-subintro'>
            <span>변화를 두려워 하지않고 새로움과 도전정신을 추구하며</span>
            <span> 해낼 수 있다는 긍정적인 사고로 맡은 일은 끝까지</span>
            <span> 놓지않고 해내는것이 저의 장점이자 신념입니다.</span>
          </div>
        </div>
        <div className='Main_div-btnContainer'>
          <Button img={github} text={'github'} link={'https://github.com/whtnqls124578'} />
          <Button img={blog} text={'blog'} link={'https://subincoding.tistory.com/'} />
        </div>

      </div>
    </main>
  )
}

export default Main;
