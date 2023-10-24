import { useState } from "react";
//react에서 할당이 되어야함

export const EventEx = () => {
  const [num, setNum] = useState(0);

  console.log(num);

  // const plusHandler = () => {
  //   setNum(num + 1); //=> method / => num++는 적용안됨 (SPA라서)
  //   // num = num + 1의 개념
  // };

  // const plusHandler = () => setNum(num + 1);

  //set변수명 => 변수의 값이 변경될때 useState(변경하고자 하는 값)
  // 사용함

  // const minusHandler = () => {
  //   setNum(num - 1);
  // };

  // const minusHandler = () => setNum(num - 1);

  //배열 비구조 할당 사용 const [] = ;
  //넣고 싶은 변수명 , set 내가 넣은 변수명 [i, setI]
  //let num = 0;을 저장한것과 동일
  //=> const [i,setI] = useState(0);
  //use라는 이름이 붙으면 전부 Hooks 라고 함
  //modules 에서 react index.?.ts(type script)
  //=> script를 좀 더 자세히 알려면 type script 공부

  //export const EventEx = () => {
  // const [변수명, set변수명] = useState('hello');
  // }
  // => let 변수명 = 'hello'

  // let num = 0;
  // const plusHandler = () => {
  //   // console.log("event");
  //   num++;
  //   console.log(num);
  // };

  return (
    <div>
      <h3>클릭할 때 숫자 증감</h3>
      <h3>{num}</h3>

      {/* <button onClick={plusHandler}>+</button>
      <button>-</button> */}

      {/* <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button> */}

      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

//SPA single page application의 특성 때문에
//값을 변화할때마다 업데이트를 해달라고 해야됨

//import 불러오기 export 내보내기 extend 확장

//return은 화면에 그냥 그림을 그려주는 역할

// *useState=()
// => react hoot 종류 중 하나로 변수를 정의하고 값을 변경할 때 사용
// => 배열 비구조화 할당을 이용하여 첫번째 값은 변수
// 두번째 값은 변수를 변경할수 있는 함수로 정의
// 단, set이라는 이름을 붙여줘야됨
// ex)
// const [변수명, set변수명] = useState(변수값);
