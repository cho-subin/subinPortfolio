import React from 'react';
import '../../css/Title.css';

interface titleText{
    title : string;
}

const Title: React.FC<titleText> = ({title}) => {
    return (
        <div className='title_div'>
            <span>{title}</span>
        </div>
    )
}

export default Title;
