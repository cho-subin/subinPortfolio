import React from 'react';

interface propsTitle{
    title:string;
}

const ProjectTitle: React.FC<propsTitle> = ({title}) => {

    console.log(title)
    return (
        <div className='project_div-right-boxTitle'>
            <span>{title}</span>
        </div>
    )
}

export default ProjectTitle;
