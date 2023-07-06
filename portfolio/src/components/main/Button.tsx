import React from 'react';
interface Btn {
    text: string
    img: string
    link: string
}

const Button:React.FC<Btn> = ({ text, img, link }) => {

    const handleBtn = () => {
        window.open(link, '_blank');
    }

    return (
        <div className='Main_div-btn'>
            <button onClick={handleBtn}>
                <span className='btn_text'>{text}</span>
                <img className='img' src={img} alt={text} />
            </button>
        </div>
    )
}

export default Button;
