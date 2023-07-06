import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface navigate {
    address: string;
    text: string;
    current: string;
}

const HeadBtn: React.FC<navigate> = ({ address, text, current }) => {

    const navigate = useNavigate();

    console.log(current);

    const [isCurrent, setIsCurrent] = useState<boolean>(false);

    useEffect(()=>{
        setIsCurrent(text === current);
    }, [text, current]);

    const handleClickBtn=()=>{
        if(text === current) setIsCurrent(true);
        else setIsCurrent(false);
    }

    return (
        <div className='header_div-headBtn'>
            {current === 'Portfolio' ? (
                <span onClick={() => navigate(address)}
                    style={
                        text === "Portfolio" ? { fontSize: '1.6rem', color: '#ffffff', } : { fontSize: '1.25rem' }
                    }>
                    {text}
                </span>
            ) : (
                    <span className={`header_span-headBtn ${isCurrent ?"Current":""}`}
                    onClick={() => navigate(address)} onChange={() => { handleClickBtn()}}
                    style={
                        text === "Portfolio" ? { fontSize: '1.6rem', color: '#b7c5ff' } : { fontSize: '1.25rem' }
                    }>
                    {text}
                </span>
            )}
        </div>
    )
}

export default HeadBtn;
