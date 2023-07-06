import React from 'react';
import '../../css/Header.css';
import HeadBtn from './HeadBtn';
import HeadLine from './HeadLine';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header_div-container'>
        <div className='header_div-title'>
          <HeadBtn address={'/'} text={'Portfolio'} />
        </div>
        <div className='header_div-menu'>
          <HeadBtn address={'/project'} text={'Project'} />
          <HeadLine/>
          <HeadBtn address={'/education'} text={'Education'} />
          <HeadLine />
          <HeadBtn address={'/study'} text={'Study'} />
        </div>
      </div>
    </header>
  )
}

export default Header
