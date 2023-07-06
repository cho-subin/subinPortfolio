import React from 'react';

interface currentPage{
    current : string
}

const HeadLine: React.FC<currentPage> = ({ current }) => {
    return (
        <div className='header_div-line'>
            <span style={
                current === "Portfolio" ? { color: '#ffffff' } : { color: '#dbdbdb' }
            }>
                /</span>
        </div>
    )
}

export default HeadLine;
