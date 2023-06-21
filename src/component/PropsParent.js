import React from 'react';
import PropsChild from './PropsChild';

export default function PropsParent() {
    // 1. 객체형태로 보내는 경우
    const salaries = {oh: 300, park: 230, jung: 280};
  
    // 2. 배열 형태로 보내는 경우
    // const salaries = [300, 230, 280];

  return (
    <div>
      <h1>Salary Information</h1>
      <PropsChild salaries={salaries} />
      
    </div>
  );
}

