import React, {useState} from "react";

export default function UserForm(){
    // 객체 상태 선언
    // 변수 세개를 사용하지 않고
    // 객체를 만들어서 한꺼번에 상태 관리
    // 이렇게 안하면 독립적인 3개의 상태 만들어서 처리해야함.
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
    });

    // 상태 변경 처리 함수(처리기)
    // 스프레드 연산자로 기존 객체를 복사한 후에
    // 복사한 객체에 추가된 내용을 변경 적용함.
    // [디버깅] [F12] 열어서 상태가 변경된 상황을 확인할것!!

    const changeUser = (event) => {
        console.log("상태변셩 함수 호출됨");
        // 배열 상태 변경[참조]
        // setList(prevList => [...prevList, newItem]);
        // 객체 상태 변경
        setUser({...user, [event.target.name]:event.target.value});
    };

    // 서브밋 처리 핸들러 함수
    // 서브밋을 하면 객체의 값을 출력해보면 변경된 내용을 알 수 있음.
    const submitClick =(event) =>{
        event.preventDefault();
        console.log("Submitted:", user);
    };
    return (
        <div>
          <h1>User 객체를 상태값 변경 예제</h1>
          <form onSubmit={submitClick}>
            <div>
              <label htmlFor="id">ID:</label>
              <input type="text" id="id" name="id" 
                    value={user.id} onChange={changeUser}
                    placeholder="Enter ID"
              />
            </div>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={user.name}
                    onChange={changeUser}
                    placeholder="Enter name"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={changeUser}
                placeholder="Enter email"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}
