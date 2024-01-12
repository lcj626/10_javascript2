/*
  01_object(객체)
  자바스크립트는 객체 기반 프로그래밍 언어로 원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체이다.
  객체는 0개 이상의 프로펄티로 구성 된 집합이며 프로퍼티는 키(key)와 값(value)로 구성된다.
  자바스크립트에서 사용할 수 잇는 모든 값은 프로퍼티 값이 될 수 있다.
  프로퍼티 값이 함수일 경우 method라고 부른다.
*/

/*
  객체 생성 방법
  자바, c++과 같은 클래스 기반의 객체 지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 함께 생성자를 호출하여
  인스턴스를 생성하는 방식으로 객체를 생성한다. 자바스크립트는 프로토타입 기반 객체지향 언어로 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원한다.

  1. 객체 리터럴
  2. object 생성자 함수
  3. 생성자 함수
  4. object.create 메서드
  5. class(ex6)
  이 중 가장 일반적이고 간단한 방법이 객체 리터럴을 사용하는 방법이다.
  괄호 내 0개 이상의 프로퍼티를 정의한다.
*/

let student = {
    name : "유관순",
    age : 16,
    getinfo : function(){
      return `${this.name}은 ${this.age}세 입니다.`;
    }
};


console.log(typeof student);
console.log("===================================================")
console.log(student);

//프로퍼티를 정의하지 않을 시 빈 객체가 생성된다.
var student2 = {};
console.log(typeof student2);
console.log("===================================================")
console.log(student2);


class student3 { //student3 -> class명
    constructor(name, age){ // constructor로 해당 생성자 만듬
      this.name = name;
      this.age = age;
    }

    name = '';
    age = 0; // 없어도 되지만 일반적으로는 넣는다
}

const studentA = new student3("이순신", 30);
console.log(studentA);