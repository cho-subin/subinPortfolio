import React from 'react';

interface studyText {
    img:any;
    title: string;
    term: string;
    text1: string;
    text2: string;
}

const StudyBox: React.FC<studyText> = ({ img, title, term, text1, text2 }) => {
    return (
        <div className='study_div-box'>
            <div className='study_div-img'>
                <img src={img} alt={title}/>
            </div>
            <div className='study_div-boxTitle'>
                <span>{title}</span>
                <span>{term}</span>
                <span>{text1}</span>
                <span>{text2}</span>
            </div>
        </div>
    )
}

export default StudyBox;
