import React from 'react';
import { Projects } from '../../../data/Project';

// Pick 유틸리티 타입을 사용하여 Projects 인터페이스에서 skills 속성만 선택
const Skills: React.FC<Pick<Projects, 'skills'>> = ({ skills }) => {

    console.log('skills',skills);

    return (
        <div className='project_div-right-skill'>
            {skills.map((item, idx) => {
                return (
                    <div className='project_div-right-skillBtn' key={idx}>
                        <img src={item} alt='로고'/>
                    </div>
                );
            })}
            
        </div>
    )
}

export default Skills;
