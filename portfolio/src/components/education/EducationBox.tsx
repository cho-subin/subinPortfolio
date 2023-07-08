import React from 'react'

interface eduText {
    title1: string;
    title2: string;
    term: string;
}

const EducationBox: React.FC<eduText> = ({ title1, title2, term }) => {
    return (
        <div className='education_div-box'>
            <div className='education_div-spanContainer'>
                <span>{title1}</span>
                <span>&nbsp;{title2}</span>
            </div>
            <span>{term}</span>
        </div>
    )
}

export default EducationBox;
