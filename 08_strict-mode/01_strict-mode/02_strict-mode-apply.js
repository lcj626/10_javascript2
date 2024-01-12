/*
  strict-mode-apply(엄격 모드 적용)
  전역의 선두 또는 함수 몸체의 선두 'use strict'를 추가한다.
*/



function test(){
  //함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용된다.
  'use strict'
  x = 10;
}

// test();

// console.log(x);

function test2 (){
  y = 10;
}

test2();
console.log(y); // 'use strict(엄격모드)'가  위에 test 함수 내에서만 선언했기 때문에 test2에 영향은 x


//--------------------------------

/* 전역에 strict mode를 적용하면 스크립트 단위로 적용 되어 strict mode와 non-strict mode의 혼용으로 인한 오류가 발생할 수 있다. */

/* <script>
    'use strict'
</script>
<script>
    x = 10;
</script> */

/* 서드파이 라이브러리가 non-strict mode인 경우 즉시 실행 함수로
스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다. */
(function(){
      'use strict';
});

/*
  함수 단위로 strict mode를 적용하면 strict mode와
  non-strict mode의 혼용이 되어 바람직 하지 않고 모든 함수에 일일이 적용하는 것도 번거롭다.
  => 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직 하다.
*/