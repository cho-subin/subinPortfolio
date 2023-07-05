import React, { useState } from 'react'
import ProjectPersonnel from './Right/ProjectPersonnel'
import ProjectTerm from './Right/ProjectTerm'
import ProjectTitle from './Right/ProjectTitle'
import ProjectSkills from './Right/ProjectSkills'
import ProjectDetail from './Right/ProjectDetail'
import ProjectBoxTitle from './Right/ProjectBoxTitle'
import projectData from '../../data/Project.json';
import { Project } from '../../data/Project';

const Right = () => {

    const [project, setProject] = useState<Project[]>(projectData);
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    return (
        <div className='project_div-right'>
            <div className='project_div-right-box'>
                <ProjectTitle title = {project[currentIndex].title}/>
                <ProjectSkills skills={project[currentIndex].skills} />
                <ProjectTerm term={project[currentIndex].term}/>
                <ProjectPersonnel personnel={project[currentIndex].personnel}/>
                <ProjectDetail text={project[currentIndex].text}/>
            </div>
            <ProjectBoxTitle github={project[currentIndex].github} title={project[currentIndex].title} />
        </div>
    )
}

export default Right
