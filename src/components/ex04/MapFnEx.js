const nums = [1, 2, 3, 4, 5];
console.log(nums);

export const MapFnEx = () => {
  // *map()
  // => 배열을 기준으로 배열의 요소값을 새로운 값으로
  // 반환하는 역할을 함
  // => 반드시 유니크한(고유값) 키값을 넣어줘야됨
  //   nums.map((n) => console.log(n + "♥"));
  //   nums.map((h) => console.log(h * 2 + "♡"));
  return (
    <div>
      {nums.map((num) => (
        <i key={num}>{num}</i>
        //=> 오류가 떠있으면 배포가 불가함
      ))}
    </div>
  );
};
