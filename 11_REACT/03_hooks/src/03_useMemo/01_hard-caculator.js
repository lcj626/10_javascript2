import { useState } from "react";
/*
  목적 : 큰 값의 계산을 바로바로 해주기 위한 코드?
  목적 : 많은 연산이 수행되는 문제로 인해 화면에 렌더링이 늦어진다.
  의문 : 그렇다면 setTimeout으로 루프를 막아버리면?
*/

const hardCalculator = (num) =>{
  console.log("어려운 계산");

  // for(let i=0; i<1999999; i++){

  // }
  
  // 자바스크립트는 스레드가 한 개 뿐이다(자바는 멀티)
  // 이벤트 루프(이벤트 대기시켜 놓고 스레드 딴 거 수행)때문에 3초 딜레이 걸어도 화면에 바로 출력됨 
  // for문과의 차이점 : for문은 도는동안 프로세스 점유하고 있어야 한다 점유하고 있는 동안 딴 거 못한다. 스레드가 동작되어야 딴 거 함

  

  // event loop는 영향을 받지 않는다.
  // react는 자식 요소에 promise를 가질 수 없다

  const timeValue = setTimeout(()=>{return 1999999}, 3000);
  console.log(timeValue);

  return num + timeValue;
}


const HardCalculator = () => {
    const [hardNumber, setHardNumber] =useState(0);
    const hardSum = hardCalculator(hardNumber);
    return (
        <>
            <h3>어려운 계산기</h3>
            <input type="number"
                value={hardNumber}
                onChange={e => setHardNumber(parseInt(e.target.value))}/>
            <span>+1999999 = {hardSum}</span>
        </>
    );
}

export default HardCalculator;