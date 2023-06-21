import React, {useState, useEffect} from "react";

export default function UseEffectTest(){
    // 상태 선언
    const[count, setCount] = useState(0);

    // 컴포넌트가 재 렌더링 되고 자동으로 호출됨
    // 리액트 훅(Hook)의 일종
    useEffect(() => {
        console.log("useEffect함수 호출됨.");
    },[]);

    return(
        <div>
            <p>{count}</p>
            <button onClick={() =>{setCount(count + 1)}}>증가</button>
        </div>
    )
}