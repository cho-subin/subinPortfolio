import React from 'react';

interface propsTerm {
    term: {
        term1: string;
        term2: string;
    };
}

const ProjectTerm: React.FC<propsTerm> = ({term}) => {
    return (
        <div className='project_div-right-term'>
            <span>{term.term1}</span>
            <span>{term.term2}</span>
        </div>
    )
}

export default ProjectTerm;
