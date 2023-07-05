import React, { useState } from 'react';

interface propsSkills {
    skills: {
        skill1: string;
        skill2: string;
        skill3: string;
        skill4?: string;
        skill5?: string;
    };
}

const Skills: React.FC<propsSkills> = ({skills}) => {

    const [skill, setSkill] = useState(skills);

    return (
        <div className='project_div-right-skill'>
            {/* Object.entries를 사용하여 객체의 속성과 값을 쌍으로 가지는 배열로 변환 */}
            {Object.entries(skill).map(([key, value]) => {
                return (
                    <div className='project_div-right-skillBtn' key={key}>
                        <span>{value}</span>
                    </div>
                );
            })}
            
        </div>
    )
}

export default Skills;