import React from 'react';
import { useNavigate } from 'react-router-dom';

interface navigate{
    address : string;
    text : string
}

const HeadBtn: React.FC<navigate> = ({address, text}) => {

    const navigate = useNavigate();

    return (
        <div className='header_div-headBtn'>
            <span onClick={() => navigate(address)}
                style={text === "Portfolio" ? { fontSize: '1.6rem' } : { fontSize: '1.25rem' }}>
                {text}
            </span>
        </div>
    )
}

export default HeadBtn;
