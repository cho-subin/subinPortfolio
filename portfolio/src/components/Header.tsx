import React from 'react'
import '../css/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header_div-container'>
        <div className='header_div-title'>
            <span>portfolio</span>
        </div>
        <div className='header_div-menu'>
            <div className='header_div-project'>
                <span>Project</span>
            </div>
            <div className='header_div-line'>
                <span>/</span>
            </div>
            <div className='header_div-education'>
                <span>Education</span>
            </div>
            <div className='header_div-line'>
                <span>/</span>
            </div>
            <div className='header_div-study'>
                <span>Study</span>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
