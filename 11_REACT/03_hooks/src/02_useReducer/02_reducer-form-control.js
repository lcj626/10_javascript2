import { useReducer } from "react"


const reducer = (state, action) => {
    console.log(action);
    return{
        ...state, // state 요소를 스프레드 연산자로 복사해서 넣는다.
        [action.name] : action.value // 이벤트 객체를 action에 담을 것
    }
}

export const Input = () =>{
    const [state, dispatch] = useReducer(reducer, {
        pass:'',
        passCheck:''
    });
    const onChangeHandler = e =>dispatch(e.target);

    // useEffect(()=>{
    //     if(state.pass === state.passCheck){
    //         alert("");
    //     }
    // })
    
    return(
        <>
            <input type="text" name="pass" onChange={onChangeHandler}/>
            <br/>
            <input type="text" name="passCheck" onChange={onChangeHandler}/>
            <br/>
            <div>
                <h3>{state.pass}</h3>
                <h3>{state.passCheck}</h3>
            </div>
        </>
    )
}


const ReducerFormControl = () =>{
    const [state, dispatch] = useReducer(reducer, {
        name:'',
        nickname:''
    });

    const {name,nickname} = state;

    const onChangeHandler = e =>dispatch(e.target); // e.target 은 name과 value 속성 가짐

    return(
        <>
            <label>이름 : </label>
            <input type="text" name="name" onChange={onChangeHandler}/>
            <br/>
            <label>닉네임 : </label>
            <input type="text" name="nickname" onChange={onChangeHandler}/>
            <br/>
            <div>
                <h3>입력한 이름: {name}</h3>
                <h3>입력한 닉네임: {nickname}</h3>
            </div>
        </>
    )
}

export default ReducerFormControl;