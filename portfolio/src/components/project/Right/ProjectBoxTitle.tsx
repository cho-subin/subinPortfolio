import React from 'react';

interface propsGithub {
    title: string;
    github: string;
}

const ProjectBoxTitle: React.FC<propsGithub> = ({ title, github }) => {
    return (
        <div className='project_div-right-title'>
            <span>{title}</span>
            <span onClick={() => { window.open(github)}}>{github}</span>
        </div>
    )
}

export default ProjectBoxTitle;
