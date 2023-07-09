import React from 'react';

interface propsText {
    text: {
        text1: string;
        text2: string;
        text3: string;
        text4: string;
        text5?: string;
        text6?: string;
    };
}

const ProjectDetail: React.FC<propsText> = ({ text }) => {

    return (
        <div className='project_div-right-detail'>
            {Object.entries(text).map(([key,value])=>{
                return(
                    // React.Fragment : 추가적인 DOM 노드를 생성하지 않고 여러 개의 자식 요소를 그룹화하는 역할
                    <React.Fragment key={key}>
                        <span key={key}>{value}</span><br/>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default ProjectDetail;
