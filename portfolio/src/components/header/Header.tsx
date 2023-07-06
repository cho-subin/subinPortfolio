import React from 'react';
import '../../css/Header.css';
import HeadBtn from './HeadBtn';
import HeadLine from './HeadLine';

interface currentPage {
  current: string;
}

const Header: React.FC<currentPage> = ({ current }) => {

  return (
    <header className='header'>
      <div className='header_div-container'>
        <div className='header_div-title'>
          <HeadBtn address={'/'} text={'Portfolio'} current={current} />
        </div>
        <div className='header_div-menu'>
          <HeadBtn address={'/project'} text={'Project'} current={current} />
          <HeadLine current={current}/>
          <HeadBtn address={'/education'} text={'Education'} current={current} />
          <HeadLine current={current} />
          <HeadBtn address={'/study'} text={'Study'} current={current} />
        </div>
      </div>
    </header>
  )
}

export default Header
