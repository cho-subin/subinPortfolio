import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Left from '../components/project/Left';
import Right from '../components/project/Right';
import '../css/Project.css';
import projectData from '../data/Project.json';
import { Projects } from '../data/Project';
import stopCurrentIndex from 'lodash';

const Project: React.FC = () => {

  const project:Projects[] = projectData;
  const [currentIndex, setCurrentIndex] = useState<number>(0);


  // console.log(project[currentIndex])
  console.log('currentIndex', currentIndex);

  // subTitle을 클릭했을때 해당 subTitle 내용으로 넘어가기
  const handleChangeBtn = (newIndex: number) =>{
    setCurrentIndex(newIndex);
  }

  //스크롤 했을때 다음 currentIndex의 subTitle 내용으로 넘어가기
  const handleScrollDown = stopCurrentIndex.debounce(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < 2) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  }, 65); // ms 디바운스 지연 시간 설정
  
  const handleScrollUp = stopCurrentIndex.debounce(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0){
        return prevIndex - 1;
      }
      return prevIndex;
    });
  }, 70); // ms 디바운스 지연 시간 설정

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        handleScrollDown();
      }
      else if (e.deltaY < 0) {
        handleScrollUp();
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [/* handleScroll의 setCurrentIndex때문에 상태가 업데이트 되어서 의존성배열 없이도 useEffect 훅이 다시 실행될 수 있다. */]);

  return (
    <main className='project' >
      <Header current={'Project'} />
      <div className='project_div-container'>
        {/* 상태와 함수를 정의해서 하위 컴포넌트 전달 */}
        <Left currentIndex={currentIndex} onIndexChange={handleChangeBtn} />
        <Right
          title={project[currentIndex]?.title}
          github={project[currentIndex]?.github}
          img={project[currentIndex]?.img}
          skills={project[currentIndex]?.skills}
          personnel={project[currentIndex]?.personnel}
          term={project[currentIndex]?.term}
          text={project[currentIndex]?.text}
        />
      </div>
    </main>
  )
}

export default Project;
