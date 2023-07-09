import React from 'react';

interface subTitleProps {
    currentIndex: number;
    onIndexChange: (newIndex: number) => void;
}

const SubTitle: React.FC<subTitleProps> = ({ currentIndex, onIndexChange }) => {

    const subTitle:{index : number, title : string}[] = ([
        { index: 0, title: 'Modira(전국)' },
        { index: 1, title: 'Velog Clone Coding' },
        { index: 2, title: 'Modira(대구)' }
    ]);

    // 클릭 이벤트가 발생할 때 부모의 onIndexChange 함수를 호출해서 새로운 값을 부모컴포넌트로 전달
    const handleBtnClick = (newIndex: number) =>{
        onIndexChange(newIndex);
    }

    return (
        <div className='project_div-left-subTitle'>
            {subTitle.map((item, idx) => {
                return (
                    <>
                        <span key={idx} onClick={()=>handleBtnClick(item?.index)}
                            className={currentIndex === item.index? 'active' : '' }>
                            {item.title}
                        </span><br />
                    </>
                )

            })}

        </div>
    )
}

export default SubTitle;
