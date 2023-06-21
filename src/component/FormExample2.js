import React, {useState} from "react";

export default function FormExample2(){
    // 상태 변수 두개
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");

    // 서브밋 이벤트 핸들러 함수
    const submitClick =(e) => {
        e.preventDefault();
        console.log("폼 서브밋 됨:", name, email);
    };

    return(
        <div>
            <h1>Form Example2</h1>
            <form onSubmit={submitClick}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}