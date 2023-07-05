import React from 'react'
import {Btn} from '../../page/Main';

const Button:React.FC<Btn> = ({ text, img }) => {

    const handleBtn = () => {

    }

    return (
        <div className='Main_div-btn'>
            <button>
                <span className='btn_text'>{text}</span>
                <img className='img' src={img} alt={text} onClick={handleBtn} />
            </button>
        </div>
    )
}

export default Button;
