import { useEffect, useState } from "react"


const CallBackProblem = ()=>{
    
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    const printNumber = ()=>{ // 함수 호출문 -> 랜더링이 일어나지 않음  랜더링 다시 되면 함수 재생성 -> 주소값 변경
        console.log(`current number : ${number}`);
    }

    /*
        number 또는 toggle state가 변경될 때 함수 생성이 다시 되는것은 불필요하다
        하지만 매번 함수가 다시 생성되어 반환되고 useEffect에서는 해당 지역 변수에 변화가 있다고 인지하게 된다.
    */

    useEffect(()=>{ // 화면에 그려질 때 출력
        console.log("printNumber 값 변화 인지됨");
    },[printNumber]); 
    // 의존성인 printNumber가 랜더링으로 재생성되어 주소값 바뀌면  값이 변경된거로 인식 useEffect 동작 ->토글버튼 눌려도 랜더링된다고 인식

    return(
        <>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}/>
            
            <button onClick={()=>setToggle(!toggle)}>{String(toggle)}</button>
            <br/>
            <button onClick={printNumber}>printNumberState</button>
        </>
    )
}

export default CallBackProblem;