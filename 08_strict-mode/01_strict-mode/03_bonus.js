// 암시적인 글로벌 변수 선언 금지

function test(){
  id = "test";
  console.log(id);
}
test();
console.log(id);


//------------------------------------------------

// 2. 변수, 함수, 매개변수 삭제 금지
var strictVar = 5;
delete strictVar;


//---------------------------------------
// 3. 중복된 매개변수 이름 금지
function strictParamsExample(param1, param1){
  //V.E(global)
  //L.E(V.C{param1}, R.c{global})
  console.log(param1); //마지막 매개변수로 초기화 됨
  console.log(arguments);
}

strictParamsExample(1,2); //마지막으로 들어온 것(2) 에 할당 됨



//-------------------------------------------------------
//4. 엄격모드에서는 this 사용이 금지
function strictThisExample(){
    'use strict';
    console.log(this);//this 찍으면 global 객체 나옴 but 엄격모드 하면 undefined->엄격모드는 this 지원 안함
}
strictThisExample();

//------------------------------------------------
