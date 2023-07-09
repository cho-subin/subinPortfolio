import React from 'react';
import { Projects } from '../../../data/Project';

// Pick 유틸리티 타입을 사용하여 Projects 인터페이스에서 text 속성만 선택
const ProjectDetail: React.FC<Pick<Projects, 'text'>> = ({ text }) => {

    // console.log('text', text);

    return (
        <div className='project_div-right-detail'>
            {text?.map((item,idx)=>{
                return(
                    // React.Fragment : 추가적인 DOM 노드를 생성하지 않고 여러 개의 자식 요소를 그룹화하는 역할
                    <React.Fragment key={idx}>
                        <span>{item}</span><br/>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default ProjectDetail;
