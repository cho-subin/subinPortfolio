import React, { useEffect, useState } from 'react';

const Title: React.FC = () => {

    const [landingTitle, setLandingTitle] = useState<string>("");  // 연산을 통해 빈 문자열에서 한 글자씩 늘어난다.
    const [count, setCount] = useState<number>(0);   // completedTitle[arrey]의 인덱스
    const [arrey, setArrey] = useState<number>(0);    // completedTitle 배열 인덱스
    const [stop, setStop] = useState<boolean>(false);    // 2초 멈추기
    const [deleting, setDeleting] = useState<boolean>(false);    // 원하는 배열 타이핑으로 다 쳤는지 유무

    useEffect(() => {

        const completedTitle: string[] = [
            "새로운 도전", "새로운 경험", "새로운 도전과 경험을 좋아하는"
        ];

        const typingInterval = setInterval(() => {

            if (stop){
                return;
            }

            setLandingTitle((prevTitleValue: string) => {
                // 타이핑 감소
                if (deleting) {
                    const result = prevTitleValue.slice(0, -1);
                    if (result === '') {
                        setDeleting(false);
                        setCount(0);
                    }
                    return result;
                // 타이핑 증가
                } else {
                    // if (completedTitle[arrey]) {
                        let result = prevTitleValue + completedTitle[arrey][count];

                        if (count >= completedTitle[arrey].length - 1) {
                            setDeleting(true);
                            setStop(true); // stop 값을 변경하여 멈춤
                            setTimeout(() => {
                                setStop(false); // 2초 후에 다시 시작
                            }, 2000);
                            setArrey(arrey + 1);

                            if (arrey >= completedTitle?.length - 1) {
                                setArrey(0);
                                // setStop(true); // stop 값을 변경하여 멈춤
                                // setDeleting(false);
                                // return completedTitle[arrey];
                            }
                        }
                        setCount(count + 1);
                        return result;
                    // }
                    // else{
                    //     setStop(true); // stop 값을 변경하여 멈춤
                    //     setDeleting(false);
                    //     return prevTitleValue;
                    // }
                    
                }
            });
        }, 150);

        // 컴포넌트가 사라질 때 인터벌 타이머를 정리하는 역할
        // 메모리 누수(memory leak)를 방지하고, 불필요한 작업을 중단
        return () => {
            clearInterval(typingInterval);
        };
    }, [ count, setLandingTitle, setCount, stop, setStop, deleting, arrey]);

    return (
        <div className='Main_div-intro'>
            <span>안녕하세요</span><br />
            <span className='Main_div-introTyping'>{landingTitle}</span><br/>
            <span>조수빈 입니다.</span>
        </div>
    )
}

export default Title;
