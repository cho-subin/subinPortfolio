import React from 'react';

interface studyText {
    img:any;
    title: string;
    term: string;
    text: React.ReactNode; //jsx 엘리먼트 전달
}

const StudyBox: React.FC<studyText> = ({ img, title, term, text }) => {
    return (
        <div className='study_div-box'>
            <div className='study_div-img'>
                <img src={img} alt={title}/>
            </div>
            <div className='study_div-boxTitle'>
                <span>{title}</span>
                <span>{term}</span>
                {text}
            </div>
        </div>
    )
}

export default StudyBox;
