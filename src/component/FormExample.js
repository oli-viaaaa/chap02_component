import React, { useState } from "react";

export default function FormExample() {
  // 상태 변수 선언
  const [name, setName] = useState("");

  // 상태값 변경 핸들러
  const changeName = (e) => {
    console.log("changeName 함수 호출됨", e.target.value);
    setName(e.target.value);
  };

  // 서브밋 버튼 클릭 핸들러
  const submitClick = (e) => {
    e.preventDefault();
    console.log("폼 서브밋됨:", name);
  };

  // onChange={changeName} 를 주석처리하면
  // 입력한 값이 안보임. 상태값을 변화시켜주지 못하기 때문에.
  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={submitClick}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} 
          onChange={changeName} 
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}