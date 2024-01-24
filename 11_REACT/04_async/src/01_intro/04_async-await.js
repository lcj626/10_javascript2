

function increase(number){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const result = number +10;
            if(result > 50){
                const e = new Error("number tooBig");
                return reject(e);
            }
            resolve(result);
        }, 1000);
    });
    return promise;
}

/*
  await의 두가지 기능
  1. await가 달린 함수의 결과인 promise에 담긴 결과(promise 내부의 resolve에 담긴 결과)를 반환한다.
  2. await가 달린 비동기 처리들은 동기식으로 동작하게 한다.
*/

async function run(){ // async 앞에 - 내부적으로 동기화 시킬 수 있다
    try{
        let result = await increase(0); // await가 있음으로서 increase가 수행되고 난 이후에 result 실행
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);
        return result;

    }catch(e){
        console.log(e, "가 발생했네")
    }
}

// const value = run(); // 

// console.log(value);

const value = async () =>{ // 기다릴거야 선언
    const runValue = await run(); // run 수행될 때까지 기다려
    console.log("value : " + runValue); //이후 runValue 실행 
    return runValue;
}
const result = value(); // 스코프 블록 벗어나면 기다릴 필요 없다.
console.log(result);

