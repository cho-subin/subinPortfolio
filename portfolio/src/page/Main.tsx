import React from 'react';
import '../css/Main.css';

const Main = () => {
  return (
    <main className='Main'>
        <div className="linear_gradient">
            <div className='Main_div-introContainer'>
                  <div className='Main_div-intro'>
                      <span>안녕하세요</span><br/>
                      <span>새로운 도전과 경험을 좋아하는</span><br/>
                      <span>조수빈 입니다.</span>
                  </div>
                  <div className='Main_div-subintro'>
                      <span>변화를 두려워하지않고 새로움과 도전정신을 추구하며 해낼 수 있다는 긍정적인 사고로<br />
                        맡은 일은 끝까지 놓지않고 해내는것이 저의 장점이자 신념입니다.</span>
                  </div>
            </div>
            <div className='Main_div-btnContainer'>
                <div className='Main_div-btn'>
                    <button>gitgub</button>
                </div>
                <div className='Main_div-btn'>
                    <button>blog</button>
                </div>
            </div>
        </div>
        
    </main>
  )
}

export default Main;
