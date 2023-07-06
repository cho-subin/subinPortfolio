import React from 'react';
import SubTitle from './Left/SubTitle';

interface LeftProps{
    currentIndex : number;
    onIndexChange : (newIndex: number) => void;
}

const Left: React.FC<LeftProps> = ({ currentIndex, onIndexChange }) => {
  return (
      <div className='project_div-left'>
          <div className='project_div-left-title'>
              <span>Project</span>
          </div>
          {/* 부모 컴포넌트의 상태와 함수를 하위 컴포넌트에 전달 */}
          <SubTitle currentIndex={currentIndex} onIndexChange={onIndexChange} />
      </div>
  )
}

export default Left;
