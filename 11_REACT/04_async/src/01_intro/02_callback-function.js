

function increase(number, callback){
    setTimeout(()=>{
        const result = number +10;

        if(callback){
            callback(result);
        }
    },1000);
}

increase(0, result=>console.log(result)); // 0=number, result=>~ =callback


/*
  여러번 순차적으로 결과들을 콜백 함수로 던지기 위해서는 중첩을 사용해서 호출할 수 있다.
  하지만 이러한 형태는 가독성도 좋지 않고 유지보수도 힘들기 때문에 피해야 하는 패턴 중 하나이다.
  이러한 형태를 콜백 지옥이라고 하고 사용하지 않는 것이 좋다.
*/

const api = fetch().then(r => r.json()).then(jValue => jValue).catch(e => console.log(e));
// 메소드 체이닝
// then -> 다음으로 넘어가 r=>r.json ->r을 r.json으로 바꾸는 것

increase(0, result=>{
    console.log(result);
    increase(result, result=>{
        console.log(result);
        increase(result, result=>{
            console.log(result);
            increase(result, result=>{
                console.log(result);
                increase(result,result=>{
                    console.log(result)
                    increase(result,result=>{
                        console.log(result);
                    })
                })
            })
        })
    })
});

