import { useEffect, useState } from "react";


// const Quiz = () =>{

//   const quiz = {
//      number1 : '대한민국의 수도는?',
//      number2 : '고양이는 영어로?'
//   }

//   const answer = {
//      answer1 : '서울',
//      answer2 : 'cat'
//   }

//   const CorrectAnswer = () =>{
//       if(quiz === answer){

//       }
//   }

// }


// export const Answer = () =>{
//   const [isDone, setIsDone] = useState(false);

//   return (
//       <>
//           {isDone && CorrectAnswer}
//       </>
//   )
// }


const Quiz = () =>{
    const [input, SetInput] = useState("");
    const [isDone, setIsDone] = useState(false);


    useEffect(()=>{
        if(isDone){
            alert("정답 입니다")
        }else{
            alert("환영 합니다")
        }
    },[isDone]);


    const value = "정답";

    const onChangeText = (e) =>{
        SetInput(e.target.value);
    }

    const onChangeDone = () =>{
        if(input === value){
            setIsDone(r => !r); // isDone을 ㅗ하면 props 바뀌면 못 씀
        }
    }

    return (
        <>
            <h1>문제</h1>
            <input type="text" value={input} onChange={onChangeText}/>
            <button onClick={onChangeDone}>정답 확인</button>
        </>
    )
}

export default Quiz;







