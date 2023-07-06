import React from 'react';
import ProjectPersonnel from './Right/ProjectPersonnel';
import ProjectTerm from './Right/ProjectTerm';
import ProjectTitle from './Right/ProjectTitle';
import ProjectSkills from './Right/ProjectSkills';
import ProjectDetail from './Right/ProjectDetail';
import ProjectBoxTitle from './Right/ProjectBoxTitle';
import { Projects } from '../../data/Project';

const Right: React.FC<Projects> = ({ title,  skills, img, term, personnel, text, github }) => {


    return (
        <div className='project_div-right'>
            <div className='project_div-right-box'>
                < img className='project_div-right-bgi' src={img} alt={title}/>
                <div className='project_div-hoverBox'>
                    <ProjectTitle title={title} />
                    <ProjectSkills skills={skills} />
                    <ProjectTerm term={term} />
                    <ProjectPersonnel personnel={personnel} />
                    <ProjectDetail text={text} />
                </div>
                
            </div>
            <ProjectBoxTitle github={github} title={title} />
        </div>
    )
}

export default Right;
