// react 패키지에서 useState import
import React, {useState} from "react";

// 리액트의 상태(state)를 관리해주는 훅(Hook)함수 사용 예제

export default function Counter(){
    // 리액트 상태(state) 훅
    // useState() 함수는 두 개의 값을 가진 배열을 반환한다.
    // 하나는 상태(값을 저장하는 변수)이고 다른 하나는 상태(값)를 변경시키는 함수이다.
    // useState(0) : 여기서 0은 초기 상태값이다.
    // 리엑트는 세터함수가 호출되면 값의 변화가 있는 것으로 판단하고 이 컴포넌트를 다시 렌더링한다.
    // const [값, 값변경 함수] = useState(초기값) 형식이다
    const[count, setCount] = useState(0);

    // 상태 변경 함수
    function increment(){
        setCount(count+1);
    }
    // 위의 함수를 화살표 함수로 바꾸면
    // const increment = () => {setCount(count+1)}

    // 상태를 감소시키는 함수
    function decrement(){
        setCount(count-1);
    }

    return(
        <div>
            <h1>카운터</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
}