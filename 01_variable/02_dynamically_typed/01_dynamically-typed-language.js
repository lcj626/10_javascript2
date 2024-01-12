/*
  01_Dynamically-typed-language

  정적 타입(static / Strong Type)언어 (C,C++, java, kotlin) 등
  변수를 선언할 때 데이터 타입을 사전에 선언(명시적 타입 선언)해야 한다.
  변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다.
  컴파일 시점에 타입 체크를 수행하는 타입의 일관성을 강제하여 런타임 에러를 줄인다.

  동적 타입
  자바스크립트는 var, let, const 키워드를 사용해 변수를 선언할 뿐 데이터 타입을 사전에 선언하지 않는다.
  즉, 동적 타입 언어는 변수 선언이 아닌 할당에 의해 타입이 결정(타입 추론)되며
  재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
  변수의 값이 언제든지 변경 될 수 있기 때문에 값을 확인하기 전에는 타입을 확실할 수 없다.
  개발자의 의도와 상관 없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다.
  즉, 유연성은 높지만 신뢰성은 떨어진다.
  이로 인해 변수를 사용하기 전 데이터 체크를 하기도 하는데 이는 번거롭기도 하고 코드의 양도 증가한다.
*/


let test;
console.log(typeof test);

test=1;
console.log(typeof test);

test = "javascript";
console.log(typeof test);

test = null;
console.log(typeof test);

