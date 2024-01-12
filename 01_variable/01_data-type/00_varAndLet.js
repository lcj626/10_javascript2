// var을 사용하는 경우
function test(){
  for(var i =0; i <=3; i++ ){

  }
  console.log(i); // for 스코프 바깥인데 실행됨 var는 스코프가 없다 그래서 충돌 위험 많이 남
}

test();

// let을 사용하는 경우
function test(){
  for(let i =0; i <=3; i++ ){

  }
  console.log(i);
}