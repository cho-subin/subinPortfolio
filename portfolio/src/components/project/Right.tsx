import React from 'react';
import ProjectPersonnel from './Right/ProjectPersonnel';
import ProjectTerm from './Right/ProjectTerm';
import ProjectTitle from './Right/ProjectTitle';
import ProjectSkills from './Right/ProjectSkills';
import ProjectDetail from './Right/ProjectDetail';
import ProjectBoxTitle from './Right/ProjectBoxTitle';
import modiraDague from '../../img/모디라대구.jpeg';
import modira from '../../img/모디라-이미지1.png';
import { Projects } from '../../data/Project';

const Right: React.FC<Projects> = ({ title,  skills, term, personnel, text, github }) => {


    return (
        <div className='project_div-right'>
            <div className='project_div-right-box'>
                <img src={modiraDague} alt=''/>
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
