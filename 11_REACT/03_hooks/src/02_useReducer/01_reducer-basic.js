import { useReducer, useState } from "react"


export const Counter = () =>{
    const [counter, setCounter] = useState(0); // set -> 컴포넌트 내부에서만 쓸 수 있다
    
    const plus = () =>{
        setCounter(r => r+1);
    }

    const minus = () =>{
        setCounter(r => r-1);
    }

    return(
        <>
            <h1>counter : {counter}</h1>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    )
}




// -----------------------------------------------------------------------------------

const reducer = (state, action) =>{ //reducer 함수 정의 -> reducer 사용한것은 아님 
    switch(action.type){
        case 'DECREMENT' :
            return {value : state.value -1}
        case 'INCREMENT' :
            return {value : state.value +1}
        default :
            return state;
    }
}

const UseReducerBasic = ()=>{

    const [state, dispatch] = useReducer(reducer, {value:0});
    // const [counter, setCounter] = useState({value:0}); 
    // {value:0} -> reducer 함수의 state로 들어간다 reducer -> 외부(위에 reducer 함수)에서 정의한 메소드, dispatch로 들어간다

    return (
        <>
            <h1>counter : {state.value}</h1>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>-1</button>
            <button onClick={()=> dispatch({type:'INCREMENT'})}>+1</button>
        </>
    )
}

// 외부에서 메소드 한번만 정의해서 그것을 가져와서 계속해서 쓰기 위해 만드는게 reducer -> input box에 값 바꿀 때 많이 쓴다

export default UseReducerBasic;