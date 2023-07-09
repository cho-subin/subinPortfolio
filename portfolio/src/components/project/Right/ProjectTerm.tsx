import React from 'react';
import { Projects } from '../../../data/Project';

// Pick 유틸리티 타입을 사용하여 Projects 인터페이스에서 term 속성만 선택
const ProjectTerm: React.FC<Pick<Projects, 'term'>> = ({ term }) => {
    
    return (
        <div className='project_div-right-term'>
            {term?.map((item, idx) => {
                return (
                    <>
                        <span key={idx}>{item}</span>
                    </>

                );
            })}
        </div>
    )
}

export default ProjectTerm;
