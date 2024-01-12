// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

let test = {
  a : "",
  b : 1,
  fun: 0,
};


console.log(test.a);
console.log(!!test.fun); //! 0을 boolean 타입으로 바꾸면 false니까 test.fun에 ! 하나 붙이면 true가 나오고 !! 붙이면 도로 false가 나온다
if(!test.fun){
  console.log("true");
}else{
  console.log("false");
}



// let test = {
//   a : null,
//   b : 1
// };


// // test라는 객체의 프로퍼티에 b의 값이 존재해?
// //if(test1?.b)
// if(test && test.a){
//   console.log("true");
// }else{
//   console.log("false");
// }

// // test라는 객체의 프로퍼티 b에 값이 존재하는 경우
// console.log(test.b && "a");
// console.log("=====================");
// test.b ? console.log("true"): console.log("false");

// // console.log(test1?.b);
