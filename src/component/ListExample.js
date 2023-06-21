import React, { useState } from 'react';

export default function ListExample() {
  // 배열 상태 변수 선언하고 빈배열 초기화
  // useState([]) : 배열 상태 변수 초기값
  const [list, setList] = useState([]);
  // 상태 변수 inputText  선언
  const [inputText, setInputText] = useState('');

  // 입력값 변경 함수
  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  // 아이템 추가 함수
  // 아이템 추가될 때마다 배열 상태 값이 바뀌고
  // 그 때마다 화면이 재렌더링됨.
  function handleAddItem() {
    // 상태 변수가 비어있지 않으면
    if (inputText.trim() !== '') {
      const newItem = {
        text: inputText.trim()
      };

      // setList 함수를 호출하여 배열 상태 변수 list를 업데이트
      // 이전 상태 배열 변수를 복사하여 새로운 배열을 만들고
      // 거기에 새로운 아이템을 추가한다.
      // 새로운 배열을 만들고 복사하는 이유는 기존의 배열 상태 변수는
      // 수정하지 않는 것이 원칙이다. 새로운 것을 만들어서 기존의
      // 것을 수정하지 않고 대체하는 것이다. [불변성의 원칙] 
      // 스프레드 연산자(...)를 사용하여 이전 배열의 모든 항목을 
      // 새로운 배열에 복사(, 그리고 newItem을 추가)
      setList(prevList => [...prevList, newItem]);

      // 아이템 입력칸 초기화(클리어)
      setInputText('');
    }
  }

  // 아이템 삭제 함수
  function removeItem(index) {
    setList(prevList => 
         prevList.filter((item, i) => i !== index));
  }
  return (
    <div>
      <h1>List Example</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter item text"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.text}
            <button onClick={() => 
               removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}