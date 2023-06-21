// 리액트에서 제공해주는 state(상태)를 사용하기 위한 import
import { useState } from "react";

export default function StateTest(){
    // 상태(state) Hook
    // useState() : 배열이 리턴된다.
    // 상태, 상태를 바꾸는 함수
    const[name, setName] = useState("희준");

    // 이름을 저장하는 변수
    // let name = "희준";

    // 이름을 바꿔주는 함수
    function changeNameOrigin(){
        // console.log("이름 변경함수 호출됨. name", name);
        // name = name ==="희준" ? "예나" : "희준"; // 삼항연산자
        // document.getElementById("name").innerHTML = name;
    }

    function changeName(){
        const updateName = (name==="희준")? "예나" : "희준";
        setName(updateName);
    }

    return(
        <div>
            <h1>State 상태</h1>
            {/*<h2 id="name">{name}</h2>*/}
            <h2>{name}</h2>
            {/* <button onClick={changeNameOrigin}>이름변경</button> */}
            <button onClick={changeName}>이름변경</button>
        </div>
    );
}