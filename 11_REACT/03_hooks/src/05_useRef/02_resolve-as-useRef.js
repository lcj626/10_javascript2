import { useRef, useState } from "react";


const UseRefCounter = () =>{
      console.log("useRefCounter 렌더링 됨");

      const [count, setCount] = useState(0);

      let variable = 0;

      const countRef = useRef(0);

      const increaseCount = () =>{
          setCount(count+1);
      }


      const increaseVariable = ()=>{// 카운트 눌렀을 때 초기화 된다.
          variable +=1;
          console.log("variable : " +variable);
    }



      const increaseCountRef = ()=>{ // 카운트 증가 눌렀을 때 기존에 있는 값을 꺼내온다(참조형 값 꺼내옴)
          countRef.current = countRef.current+1;
          console.log("countRef : " + countRef.current) // current - useRef가 가리키는 현재 값
      }

      return (
          <>
              <h1> counter : {count} </h1>
              <h1> variable : {variable} </h1>
              <h1> countRef : {countRef.current} </h1>
              <button onClick={increaseCount}>카운트 증가</button>
              <button onClick={increaseVariable}>variable 증가</button>
              <button onClick={increaseCountRef}>카운트 ref 증가</button>
          </>
      )
}

export default UseRefCounter;