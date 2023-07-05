import React from 'react';

interface propsPersonnel {
    personnel: string;
}

const ProjectPersonnel: React.FC<propsPersonnel> = ({ personnel }) => {
    return (
        <div className='project_div-right-personnel'>
            <span>참여인원</span>
            <span>{personnel}</span>
        </div>
    )
}

export default ProjectPersonnel;
