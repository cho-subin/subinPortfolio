import React from 'react'

interface eduText{
    title:string;
    term:string;
}

const EducationBox: React.FC<eduText> = ({title, term}) => {
  return (
      <div className='education_div-box'>
          <span>{title}</span>
          <span>{term}</span>
      </div>
  )
}

export default EducationBox;
